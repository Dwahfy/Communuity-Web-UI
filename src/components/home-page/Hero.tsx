'use client';

export default function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="relative mb-16 w-full max-w-4xl">
          {/* SVG image - now responsive */}
          <img
            src="/assets/Hero-bubble.svg"
            alt="Hero bubble"
            className="w-full h-auto drop-shadow-2xl pointer-events-none object-contain" // or object-cover if you want fill
          />

          {/* Text overlay - adjusted padding and text sizes for mobile */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-32 pt-8 pb-16 sm:pt-12 sm:pb-24">
            <h1 className="text-black text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Just a social app that ain’t controlled by the government.
            </h1>
            <p className="text-black text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mt-6 sm:mt-8 lg:mt-10">
              Open-source | Free-Speech
            </p>
          </div>
        </div>

        {/* CTA Buttons - stack on mobile, side-by-side on sm+ */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
<button
  className="btn btn-primary btn-xl w-full sm:w-auto"
  onClick={() => window.open('https://form.typeform.com/to/NiVPfw3J', '_blank')}
>
  Join waitlist
</button>
          <button
            className="btn btn-outline btn-primary btn-xl w-full sm:w-auto"
              onClick={() => window.open('https://discord.gg/mm9dbNxdb6', '_blank')}
          >
            Join Discord Community
          </button>
        </div>
      </div>
    </section>
  );
}
