import { DockApp } from "@/components/Dock";
import Link from "next/link";
import ThreeDCard from "@/components/ThreeDCard";

export default function PublicSpeakerPage() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white font-sans selection:bg-emerald-500/30 pb-48 overflow-hidden relative">
      
      {/* Spotlight Effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Nav */}
      <nav className="relative z-10 w-full p-8 flex justify-between items-center text-white border-b border-white/5">
        <span className="font-bold text-2xl tracking-tight">VA.</span>
        <span className="uppercase tracking-widest text-xs font-bold px-4 py-2 border border-white/20 rounded-full text-emerald-400">Speaker Profile</span>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center px-8 md:px-24 pt-12 relative z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-emerald-500"></div>
              <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase">Keynotes ///</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
              PUBLIC <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-700">
                SPEAKER.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-xl font-light leading-snug mt-8">
              Delivering high-impact technical keynotes and future-focused narratives to global audiences.
            </p>

            <div className="pt-8">
              <button className="px-8 py-4 bg-emerald-500 text-black font-bold uppercase tracking-widest text-sm hover:bg-emerald-400 transition-all hover:-translate-y-1">
                Book for Speaking
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
             <ThreeDCard
                className="w-full max-w-lg"
                backgroundImage="/vandah3.png"
                maxRotation={15}
                glowOpacity={0.3}
              >
                <img
                  src="/public.png"
                  alt="Public Speaker Victory"
                  className="w-full h-auto rounded-xl shadow-2xl border border-emerald-500/20 grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/5] object-cover object-top"
                />
             </ThreeDCard>
          </div>

        </div>
      </section>

      {/* Topics Section */}
      <section className="py-24 px-8 md:px-24 relative z-10 border-t border-white/5 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px w-24 bg-emerald-500"></div>
            <h2 className="text-3xl font-bold uppercase tracking-widest text-emerald-400">Speaking Topics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group border border-white/10 p-8 hover:border-emerald-500/50 hover:bg-white/5 transition-all cursor-pointer">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">The Web3 Frontier</h3>
              <p className="text-gray-400 leading-relaxed">
                Deconstructing blockchain adoption, tokenomics, and the future of decentralized communities for mainstream audiences.
              </p>
            </div>
            
            <div className="group border border-white/10 p-8 hover:border-emerald-500/50 hover:bg-white/5 transition-all cursor-pointer">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">Founder Resilience</h3>
              <p className="text-gray-400 leading-relaxed">
                Raw, unfiltered lessons on navigating the emotional and operational turbulence of early-stage startups and scaling.
              </p>
            </div>

            <div className="group border border-white/10 p-8 hover:border-emerald-500/50 hover:bg-white/5 transition-all cursor-pointer">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">Community as Capital</h3>
              <p className="text-gray-400 leading-relaxed">
                Why the next generation of powerhouse companies won't compete on product features, but on the strength of their networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stage Stats */}
      <section className="py-24 px-8 md:px-24 bg-white/5 relative z-10 border-y border-white/10">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center gap-12 text-center">
            <div>
              <div className="text-6xl md:text-8xl font-black text-emerald-500 mb-2">50+</div>
              <div className="text-gray-400 tracking-widest uppercase text-sm font-bold">Stages Graced</div>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-black text-emerald-500 mb-2">15k</div>
              <div className="text-gray-400 tracking-widest uppercase text-sm font-bold">Attendees Reached</div>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-black text-emerald-500 mb-2">10</div>
              <div className="text-gray-400 tracking-widest uppercase text-sm font-bold">Countries Spoken In</div>
            </div>
         </div>
      </section>

      {/* Dock Navigation */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <DockApp />
        </div>
      </div>
    </div>
  );
}
