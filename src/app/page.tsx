import Header from '../components/home-page/header';
import Hero from '../components/home-page/Hero';
import Footer from '../components/home-page/footer';
import Mission from '../components/home-page/Mission';
import Roadmap from '../components/home-page/Roadmap';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-base-100 relative pt-24">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[120vw] h-[120vw] rounded-full bg-gradient-radial from-accent/80 via-accent/40 to-transparent blur-3xl translate-x-10" />
          <div className="absolute w-[100vw] h-[100vw] rounded-full bg-primary/20 blur-3xl -translate-x-20" />
        </div>
      </div>

      <Header />

      <main className="flex-1">
        <section id="home" className="scroll-mt-20">
          <Hero />
        </section>

        <section id="mission" className="bg-base-200 scroll-mt-20">
          <Mission />
        </section>

        <section id="roadmap" className="scroll-mt-20">
          <Roadmap />
        </section>
      </main>

      <Footer />
    </div>
  );
}
