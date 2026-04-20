import Link from 'next/link';
import { DockApp } from '@/components/Dock';

export default function CampusBestie() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white relative selection:bg-orange-500/30 overflow-hidden font-sans">
      {/* Ambient background tailored to social/vibrant theme */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 right-1/4 w-[50vw] h-[50vh] bg-orange-600/30 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-rose-600/30 blur-[150px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50">
        <Link href="/#explore-my-work" className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors">
          <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white/60 transition-colors bg-black/40 backdrop-blur-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-sm tracking-widest uppercase font-bold">Back</span>
        </Link>
      </div>

      {/* Hero Content */}
      <main className="relative z-10 min-h-screen flex flex-col justify-center px-8 md:px-24 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold tracking-widest uppercase mb-8">
              Social Network Architecture
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Campus<br/>Bestie.
            </h1>
            <p className="text-2xl md:text-3xl font-light text-white/70 leading-snug mb-12">
              A decentralized social graph connecting students across global campuses through shared interests, events, and academic collaboration.
            </p>
            <div className="flex gap-4">
              <div className="px-6 py-3 rounded-xl bg-white text-black font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform cursor-pointer">
                Live Prototype
              </div>
              <div className="px-6 py-3 rounded-xl border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors cursor-pointer">
                Read Case Study
              </div>
            </div>
          </div>
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img src="/campus.png" alt="CampusBestie Platform" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </main>

      {/* Features Deep Dive */}
      <section className="relative z-10 px-8 md:px-24 py-32 bg-black/60 border-t border-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16">The Architecture<br/><span className="text-white/40">of Connection.</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-colors group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">Interest-Based Matchmaking</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Utilizing customized machine learning algorithms to match students not just by major or proximity, but by deeply specific micro-interests, creating highly cohesive study groups and social circles.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-rose-500/50 transition-colors group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-rose-400 transition-colors">Verified Ecosystem</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Implementing zero-knowledge proof verification for `.edu` email addresses, ensuring that the network remains entirely exclusive to verified students while protecting user privacy.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-colors group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">Campus Event Hub</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                A localized event mapping system that allows student organizations to broadcast parties, study sessions, and seminars directly to targeted student demographics in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <DockApp />
        </div>
      </div>
    </div>
  );
}
