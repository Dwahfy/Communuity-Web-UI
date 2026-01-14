// src/pages/Signup.tsx  (or components/auth/Signup.tsx)
import { useState } from 'react';
import { Link } from 'react-router-dom'; // ← adjust if using different router
import Header from '../components/home-page/header';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      // TODO: Replace with your real API call
      // const res = await fetch('/api/auth/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     username: formData.username,
      //     email: formData.email,
      //     password: formData.password,
      //   }),
      // });
      // const data = await res.json();
      // if (!res.ok) throw new Error(data.message || 'Signup failed');

      // On success → redirect or set auth context
      console.log('Signup successful (mock)', formData);
      // window.location.href = '/login'; // or use navigate('/feed')
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 py-12">
          <Header />
        
      <div className="card w-full max-w-md bg-base-100/70 backdrop-blur-xl shadow-2xl border border-indigo-500/20">
        <div className="card-body p-8 md:p-10">
          <h2 className="card-title text-3xl font-bold text-center mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Create your account
          </h2>
          <p className="text-center text-base-content/70 mb-8">
            Join the uncensored, open-source social network
          </p>

          {error && (
            <div className="alert alert-error shadow-lg mb-6">
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
                placeholder="Choose a unique handle"
                className="input input-bordered input-lg focus:input-primary transition-all"
                required
                minLength={3}
                maxLength={20}
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
                className="input input-bordered input-lg focus:input-primary transition-all"
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
                className="input input-bordered input-lg focus:input-primary transition-all"
                required
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

          <p className="text-center text-xs text-base-content/50 mt-8">
            100% open-source • No tracking • Self-host friendly
          </p>
        </div>
      </div>
    </div>
  );
}