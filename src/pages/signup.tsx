// src/pages/Signup.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/home-page/header'; // assuming this is your Dwahfy + Community UI header


export default function Signup() {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [shake, setShake] = useState(false);
  const [loading, setLoading] = useState(false);

  // Pre-fill email from URL query param (coming from EmailCheck)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailFromQuery = params.get('email');
    if (emailFromQuery) {
      setFormData((prev) => ({ ...prev, email: decodeURIComponent(emailFromQuery) }));
    }
  }, [location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
    setShake(false);
  };

  const validateForm = () => {
    if (formData.username.length < 3 || formData.username.length > 20) {
      setError('Username must be 3–20 characters');
      setShake(true);
      return false;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      setError('Username can only contain letters, numbers, and underscores');
      setShake(true);
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      setShake(true);
      return false;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      setShake(true);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setShake(false);

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username.trim(),
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      // Success → redirect to OTP or feed (depending on your flow)
      // For now assuming email verification is required
      navigate('/otp'); // or '/verify-email', or directly to '/feed' if no verification

      console.log('Signup successful:', data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      setShake(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-indigo-950/80 to-purple-950/60">
      <Header />

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="card w-full max-w-md bg-base-100/70 backdrop-blur-xl shadow-2xl border border-indigo-500/20">
          <div className="card-body p-8 md:p-10">
            <h2 className="card-title text-3xl font-bold text-center mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Create your account
            </h2>
            <p className="text-center text-base-content/70 mb-8">
              Join the uncensored, open-source social network
            </p>

            {error && (
              <div className={`alert alert-error shadow-lg mb-6 ${shake ? 'animate-shake' : ''}`}>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="@yourhandle"
                  className={`input input-bordered input-lg focus:input-primary transition-all ${shake && error?.includes('Username') ? 'input-error animate-shake' : ''}`}
                  required
                  minLength={3}
                  maxLength={20}
                  autoFocus={!formData.email} // focus username if no prefilled email
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="input input-bordered input-lg focus:input-primary transition-all"
                  required
                  readOnly={!!formData.email} // prevent changing if came from EmailCheck
                  title={formData.email ? "Email was pre-verified" : ""}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                  className={`input input-bordered input-lg focus:input-primary transition-all ${shake && (error?.includes("don't match") || error?.includes("8 characters")) ? 'input-error animate-shake' : ''}`}
                  required
                  minLength={8}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  className={`input input-bordered input-lg focus:input-primary transition-all ${shake && error?.includes("don't match") ? 'input-error animate-shake' : ''}`}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-full mt-6 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-md"></span>
                    Creating account...
                  </>
                ) : (
                  'Sign Up — Free Forever'
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

            <p className="text-center text-xs text-base-content/50 mt-10">
              100% open-source • No tracking • Self-host friendly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}