// src/pages/OTP.tsx  (or src/components/auth/OTP.tsx)
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // adjust router as needed

export default function OTP() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [timer, setTimer] = useState(60); // 60 seconds countdown

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  // Timer for resend button
  useEffect(() => {
    if (!resendDisabled) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [resendDisabled]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // only digits

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // take last digit if paste
    setOtp(newOtp);
    setError(null);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Move to previous on backspace when empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6 - index);

    if (pasted) {
      const newOtp = [...otp];
      for (let i = 0; i < pasted.length && index + i < 6; i++) {
        newOtp[index + i] = pasted[i];
      }
      setOtp(newOtp);

      // Focus last filled or end
      const nextFocus = Math.min(index + pasted.length, 5);
      inputRefs.current[nextFocus]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join('');

    if (code.length !== 6) {
      setError('Please enter a 6-digit code');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // TODO: Replace with your real API call
      // await fetch('/api/auth/verify-otp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ otp: code, email: 'from previous step' }),
      // });

      console.log('OTP verified (mock):', code);

      // On success → redirect to feed / complete profile / etc.
      navigate('/feed'); // or '/onboarding', '/home', etc.
    } catch (err: any) {
      setError(err.message || 'Invalid or expired code');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = () => {
    setResendDisabled(true);
    setTimer(60);
    setOtp(Array(6).fill(''));
    setError(null);
    inputRefs.current[0]?.focus();

    // TODO: Call resend OTP API
    console.log('Resend OTP requested (mock)');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 py-12">
      <div className="card w-full max-w-md bg-base-100/70 backdrop-blur-xl shadow-2xl border border-indigo-500/20">
        <div className="card-body p-8 md:p-10">
          <h2 className="card-title text-3xl font-bold text-center mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Verify your email
          </h2>
          <p className="text-center text-base-content/70 mb-8">
            Enter the 6-digit code sent to your email
          </p>

          {error && (
            <div className="alert alert-error shadow-lg mb-6">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* OTP Inputs */}
    <div className="flex justify-center gap-3 sm:gap-4">
  {otp.map((digit, index) => (
    <input
      key={index}
      type="text"
      maxLength={1}
      value={digit}
      onChange={(e) => handleChange(index, e.target.value)}
      onKeyDown={(e) => handleKeyDown(e, index)}
      onPaste={(e) => handlePaste(e, index)}
      // Fixed ref assignment – no return value
      ref={(el) => {
        inputRefs.current[index] = el;
      }}
      className="input input-bordered input-lg text-center text-2xl font-bold w-12 h-14 sm:w-14 sm:h-16 focus:input-primary transition-all"
      autoFocus={index === 0}
    />
  ))}
</div>

            <button
              type="submit"
              className="btn btn-primary btn-lg w-full shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all"
              disabled={loading || otp.join('').length !== 6}
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Verifying...
                </>
              ) : (
                'Verify & Continue'
              )}
            </button>
          </form>

          <div className="text-center mt-8 space-y-3">
            <p className="text-base-content/70">
              Didn't receive the code?{' '}
              <button
                onClick={handleResend}
                disabled={resendDisabled}
                className={`link link-primary font-semibold ${resendDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Resend {resendDisabled && `(${timer}s)`}
              </button>
            </p>

            <p className="text-sm text-base-content/60">
              <Link to="/signup" className="link link-hover">
                Back to Sign Up
              </Link>
              {' • '}
              <Link to="/login" className="link link-hover">
                Back to Sign In
              </Link>
            </p>
          </div>

          <p className="text-center text-xs text-base-content/50 mt-10">
            Code expires in 10 minutes • Open-source & self-hostable
          </p>
        </div>
      </div>
    </div>
  );
}