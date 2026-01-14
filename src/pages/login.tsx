// src/pages/Login.tsx  (or components/auth/Login.tsx)
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/home-page/header';

export default function Login() {
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: '',
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
    setLoading(true);

    try {
      // TODO: Replace with real API call
      // const res = await fetch('/api/auth/login', { ... });
      console.log('Login attempt (mock)', formData);
      // On success: set token/context → redirect to /feed or home
    } catch (err: any) {
      setError(err.message || 'Invalid credentials');
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
            Welcome back
          </h2>
          <p className="text-center text-base-content/70 mb-8">
            Sign in to your free-speech community
          </p>

          {error && (
            <div className="alert alert-error shadow-lg mb-6">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email or Username</span>
              </label>
              <input
                type="text"
                name="emailOrUsername"
                value={formData.emailOrUsername}
                onChange={handleChange}
                placeholder="you@example.com or @yourhandle"
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
                placeholder="••••••••"
                className="input input-bordered input-lg focus:input-primary transition-all"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg w-full mt-4 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="divider my-8">OR</div>

          <p className="text-center text-base-content/70">
            New here?{' '}
            <Link to="/signup" className="link link-primary font-semibold">
              Create an account
            </Link>
          </p>

          <p className="text-center text-xs text-base-content/50 mt-8">
            Open-source • No ads • Postgres auth + MongoDB storage
          </p>
        </div>
      </div>
    </div>
  );
}