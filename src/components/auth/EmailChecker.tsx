// src/pages/EmailCheck.tsx  (or src/components/auth/EmailCheck.tsx)
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Adjust if using different router (e.g., Next.js)
import ShakeWrapper from '../UI/ShakeWrapper';

export default function EmailCheck() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(null);
    setShake(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setShake(false);

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      setShake(true);
      return;
    }

    setLoading(true);

    try {
      // TODO: Replace with your real API call to check email availability
      // This assumes your Express endpoint: POST /api/auth/check-email
      const res = await fetch('/api/auth/check-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error('Failed to check email');
      }

      const data = await res.json();

      if (data.exists) {
        setError('Email already in use. Use a different one or log in.');
        setShake(true);
      } else {
        // Redirect to signup with email pre-filled (via query param or state)
        navigate(`/signup?email=${encodeURIComponent(email)}`);
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      setShake(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950/80 to-purple-950/60 px-4 py-12">
      <div className="card w-full max-w-md bg-base-100/70 backdrop-blur-xl shadow-2xl border border-indigo-500/20">
        <div className="card-body p-8 md:p-10">
          <h2 className="card-title text-3xl font-bold text-center mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Start with your email
          </h2>
          <p className="text-center text-base-content/70 mb-8">
            We'll check if it's available for our free-speech community
          </p>

            // In Signup.tsx, EmailCheck.tsx, etc.
{error && (
  <ShakeWrapper shake={shake}>
    <div className="alert alert-error shadow-lg mb-6">
      <span>{error}</span>
    </div>
  </ShakeWrapper>
)}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`input input-bordered input-lg focus:input-primary transition-all ${shake ? 'animate-shake border-error' : ''}`}
                required
                autoFocus
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg w-full mt-4 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Checking...
                </>
              ) : (
                'Continue'
              )}
            </button>
          </form>

          <div className="divider my-8">OR</div>

          <p className="text-center text-base-content/70">
            Already have an account?{' '}
            <Link to="/login" className="link link-primary font-semibold">
              Sign in
            </Link>
          </p>

          <p className="text-center text-xs text-base-content/50 mt-8">
            100% open-source • No tracking • Postgres-powered auth
          </p>
        </div>
      </div>
    </div>
  );
}