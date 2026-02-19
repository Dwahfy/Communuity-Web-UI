import { LiaBullhornSolid, LiaUsersSolid, LiaCodeSolid } from "react-icons/lia";

export default function Mission() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: No Censorship */}
        <div className="card bg-base-100 shadow-lg border border-base-300 
                        transition-all duration-500 ease-out
                        hover:shadow-2xl hover:-translate-y-4 
                        hover:[&>.card-body]:bg-purple-500/5
                        group lg:col-span-1">
          <div className="card-body items-center text-center py-12 transition-colors duration-500">
            <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mb-6 
                            group-hover:bg-error/20 transition-colors duration-300">
              <LiaBullhornSolid className="w-10 h-10 text-error" />
            </div>
            <h2 className="card-title text-2xl mb-4">No More Censorship</h2>
            <p className="text-base-content/80 text-balance">
              No interference from corporations or governments.<br className="hidden sm:inline" />
              Truly free speech on your terms.
            </p>
          </div>
        </div>

        {/* Card 2: Power to Users */}
        <div className="card bg-base-100 shadow-lg border border-base-300 
                        transition-all duration-500 ease-out
                        hover:shadow-2xl hover:-translate-y-4 
                        hover:[&>.card-body]:bg-purple-500/5
                        group lg:col-span-1">
          <div className="card-body items-center text-center py-12 transition-colors duration-500">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 
                            group-hover:bg-primary/20 transition-colors duration-300">
              <LiaUsersSolid className="w-10 h-10 text-primary" />
            </div>
            <h2 className="card-title text-2xl mb-4">Power Back to Users</h2>
            <p className="text-base-content/80 text-balance">
              Dwahfy puts control firmly in your hands.<br className="hidden sm:inline" />
              Uncensored conversations on an open platform built for freedom.
            </p>
          </div>
        </div>

        {/* Card 3: Transparent & Intentional - Centered on tablet only */}
        <div className="card bg-base-100 shadow-lg border border-base-300 
                        transition-all duration-500 ease-out
                        hover:shadow-2xl hover:-translate-y-4 
                        hover:[&>.card-body]:bg-purple-500/5
                        group md:col-start-1 md:col-span-2 lg:col-start-auto lg:col-span-1">
          <div className="card-body items-center text-center py-12 transition-colors duration-500">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-6 
                            group-hover:bg-success/20 transition-colors duration-300">
              <LiaCodeSolid className="w-10 h-10 text-success" />
            </div>
            <h2 className="card-title text-2xl mb-4">Transparent & Intentional</h2>
            <p className="text-base-content/80 text-balance">
              Core algorithm: fully open-source & auditable.<br className="hidden sm:inline" />
              UI: closed-source so we maintain a consistent, intentional experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}