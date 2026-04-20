import Link from 'next/link';
import { DockApp } from '@/components/Dock';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const titles: Record<string, string> = {
    'campusbestie': 'CampusBestie Platform',
    'nft-marketplace': 'NFT Marketplace Ecosystem',
    'crypto-strategy': 'Crypto Trading Strategy',
    'blockchain-advisory': 'Blockchain Advisory'
  };

  const subtitles: Record<string, string> = {
    'campusbestie': 'Connecting students across campuses with a decentralized social graph.',
    'nft-marketplace': 'A highly curated, liquid marketplace model for digital collectibles.',
    'crypto-strategy': 'Algorithmic and narrative-driven portfolio scaling for high-net-worth individuals.',
    'blockchain-advisory': 'Strategic implementation of distributed ledgers within legacy systemic environments.'
  };

  const currentTitle = titles[params.slug] || 'Digital Project';
  const currentSubtitle = subtitles[params.slug] || 'Exploring the intersection of technology and human experience.';

  return (
    <div className="min-h-screen w-full bg-black text-white relative selection:bg-white/30 overflow-hidden font-sans">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vh] bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-purple-600/20 blur-[150px] rounded-full mix-blend-screen -translate-x-1/3 translate-y-1/4"></div>
      </div>

      {/* Nav Overlay */}
      <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50">
        <Link href="/#explore-my-work" className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors">
          <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white/60 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-sm tracking-widest uppercase font-bold">Back to Home</span>
        </Link>
      </div>

      {/* Hero Content */}
      <main className="relative z-10 min-h-screen flex flex-col justify-end pb-32 px-8 md:px-24">
        <div className="max-w-6xl">
          <p className="text-white/40 font-mono tracking-widest text-sm uppercase mb-8">CASE STUDY /// {params.slug}</p>
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter leading-[0.9] mb-8 text-white mix-blend-difference drop-shadow-2xl">
            {currentTitle.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>
          
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-white/40 to-transparent my-12"></div>
          
          <p className="text-2xl md:text-4xl font-light text-white/70 max-w-3xl leading-snug">
            {currentSubtitle}
          </p>
        </div>
      </main>

      {/* Deep Dive placeholder */}
      <section className="min-h-[50vh] bg-zinc-950/80 relative z-10 px-8 md:px-24 py-32 border-t border-white/10 backdrop-blur-md">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-8">Project Details</h2>
          <p className="text-xl text-white/50 leading-relaxed font-light">
            This module represents an immersive dive into the methodology, technology stack, and strategic decisions made throughout the lifecycle of the project. A full breakdown detailing specific metrics, brand strategy, and community engagement outcomes is currently being curated.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="p-8 border border-white/5 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm">
              <h3 className="text-sm font-bold tracking-widest text-white/40 uppercase mb-4">Core Focus</h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Strategy definition</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Community alignment</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Implementation</li>
              </ul>
            </div>
            <div className="p-8 border border-white/5 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm">
               <h3 className="text-sm font-bold tracking-widest text-white/40 uppercase mb-4">Current Status</h3>
               <div className="flex items-center gap-4">
                 <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
                 <span className="text-lg text-white tracking-widest uppercase font-bold">Active / Deployed</span>
               </div>
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
