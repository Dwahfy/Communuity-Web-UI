
export default function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="relative mb-16 w-full max-w-4xl">


          {/* Text overlay - adjusted padding and text sizes for mobile */}
            <h1 className="text-base-content text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Just a social app that ain’t controlled by the government.
            </h1>
            <p className="text-base-padding text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mt-6 sm:mt-8 lg:mt-10">
              Open-source | Free-Speech
            </p>
        </div>

        {/* CTA Buttons - stack on mobile, side-by-side on sm+ */}
<div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-8">
          <button
            className="btn btn-primary btn-lg sm:btn-xl w-full sm:w-64 min-w-[260px] shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-300 text-lg font-semibold"
            onClick={() => {
              // Replace with your actual routing logic (e.g. react-router, next.js link, or modal trigger)
              window.location.href = '/email-checker';
              // OR if using modal: setShowSignupModal(true)
            }}
          >
            Sign Up — It's Free
          </button>

          <button
            className="btn btn-outline btn-primary btn-lg sm:btn-xl w-full sm:w-64 min-w-[260px] border-2 border-indigo-400/70 hover:bg-indigo-950/50 hover:border-indigo-400 transition-all duration-300 text-lg font-semibold"
            onClick={() => {
              window.location.href = '/login';
              // OR modal trigger, etc.
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
}