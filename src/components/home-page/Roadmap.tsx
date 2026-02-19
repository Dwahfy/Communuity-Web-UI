// components/home-page/Roadmap.tsx

export default function Roadmap() {
  const milestones = [
    {
      title: "The Spark",
      date: "Dec 2025",
      details: "Inspired by a Jumu'ah khutbah from Imam Muhammad Musri at Masjid Al-Malik (Orlando, FL) on social media censorship hindering free speech and Dawah — the gentle invitation to Islam."
    },
    {
      title: "MVP Launch",
      date: "Q1 2026",
      details: "Core posting, uncensored feeds, Postgres auth, MongoDB storage, open-source algorithm released, Docker + AWS-ready deployment."
    },
    {
      title: "Community Growth",
      date: "Q2–Q3 2026",
      details: "DMs, group chats, custom feeds, PWA, community moderation tools, active open-source contributions."
    },
    {
      title: "Decentralize",
      date: "Q4 2026 →",
      details: "Federated instances, React Native apps, self-hoster monetization, community governance."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap</h2>
        <p className="text-lg md:text-xl text-base-content/70">
          Tap any milestone to see details
        </p>
      </div>

      {/* Desktop: Horizontal Timeline */}
      <div className="hidden lg:block relative">
        {/* Connecting lines */}
        <div className="absolute left-0 top-12 w-full h-0.5 bg-base-300" />
        <div className="absolute left-0 top-12 w-full h-1.5 bg-primary/20" />

        <div className="grid grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex flex-col items-center group">
              <div
                className="tooltip tooltip-bottom tooltip-primary z-20"
                data-tip={milestone.details}
              >
                <div className="cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-primary border-4 border-base-100 shadow-lg 
                                  group-hover:scale-125 group-hover:bg-purple-500 
                                  transition-all duration-300 z-10" />
                  <div className="mt-8 bg-base-200 border border-base-300 rounded-2xl p-6 text-center
                                  transition-all duration-300 
                                  group-hover:-translate-y-4 group-hover:shadow-2xl 
                                  group-hover:border-purple-500/50 group-hover:bg-purple-500/5">
                    <p className="text-sm text-base-content/60 mb-2">{milestone.date}</p>
                    <h3 className="text-xl font-bold tracking-wide">{milestone.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet: Vertical Timeline */}
      <div className="lg:hidden space-y-12">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative flex items-start gap-6">
            {/* Vertical line (except last) */}
            {index < milestones.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-full bg-base-300 -z-10" />
            )}

            {/* Dot */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary border-4 border-base-100 shadow-lg 
                            flex items-center justify-center z-10">
              <span className="text-white font-bold text-sm">{index + 1}</span>
            </div>

            {/* Card */}
            <div className="flex-1 bg-base-200 border border-base-300 rounded-2xl p-6 shadow-md
                            transition-all duration-300 hover:shadow-xl hover:-translate-y-1 
                            hover:border-purple-500/50 hover:bg-purple-500/5">
              <p className="text-sm text-base-content/60 mb-2">{milestone.date}</p>
              <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
              <p className="text-base-content/80 text-sm leading-relaxed">
                {milestone.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}