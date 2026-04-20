import Link from 'next/link';
import { DockApp } from '@/components/Dock';

export default function NFTMarketplace() {
  return (
    <div className="min-h-screen w-full bg-[#030014] text-white relative selection:bg-purple-500/30 overflow-hidden font-sans">
      {/* Ambient Web3 Glow */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-0 right-1/4 w-[40vw] h-[40vh] bg-purple-600/20 blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-1/4 w-[60vw] h-[60vh] bg-blue-600/20 blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-indigo-900/10 blur-[150px] mix-blend-screen"></div>
      </div>

      {/* Nav Overlay */}
      <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50">
        <Link href="/#explore-my-work" className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors">
          <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white/60 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-sm tracking-widest uppercase font-bold">Back</span>
        </Link>
      </div>

      {/* Hero Content */}
      <main className="relative z-10 min-h-screen flex flex-col justify-center px-8 md:px-24">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold tracking-widest uppercase animate-pulse">
            Ecosystem Consulting
          </div>
          
          <h1 className="text-7xl md:text-[8rem] font-bold tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-purple-800 pb-4">
            NFT Marketplace.
          </h1>
          
          <div className="h-px w-full max-w-lg mx-auto bg-gradient-to-r from-transparent via-purple-500/40 to-transparent my-12"></div>
          
          <p className="text-2xl md:text-3xl font-light text-white/60 max-w-3xl leading-snug mx-auto">
            Structuring liquidity, curating digital fine art, and architecting gas-efficient smart contracts for modern, scalable NFT adoption platforms.
          </p>
        </div>
      </main>

      {/* Deep Dive Section */}
      <section className="relative z-10 px-8 md:px-24 py-32 bg-[#05051a]/80 border-t border-purple-900/30 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div className="space-y-6">
               <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">The Problem</h2>
               <p className="text-white/50 leading-relaxed text-lg font-light">
                 Current NFT secondary markets suffer from overwhelming friction, extreme gas volatility, and a clunky Web2-to-Web3 onboarding experience. This creates massive abandonment rates for first-time digital collectors.
               </p>
            </div>
            <div className="space-y-6">
               <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">The Solution</h2>
               <p className="text-white/80 leading-relaxed text-lg font-light">
                 A proprietary aggregation layer integrated directly into an L2 scaling solution. This lowers bridging costs by 94% and introduces social login (OAuth to Wallet), streamlining UX without sacrificing true ownership.
               </p>
            </div>
          </div>
          
          <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-16 relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
             <h3 className="text-white/40 tracking-widest uppercase font-bold text-sm mb-8">Technical Milestones</h3>
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <li className="flex gap-4">
                 <div className="text-purple-400">01</div>
                 <div>
                   <h4 className="text-xl font-bold mb-2">Fiat On-Ramp</h4>
                   <p className="text-sm text-white/50">Abstracting ETH requirements out of the purchase flow using zero-knowledge integrated payment gateways.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <div className="text-blue-400">02</div>
                 <div>
                   <h4 className="text-xl font-bold mb-2">Automated Royalty Splitting</h4>
                   <p className="text-sm text-white/50">Deployed immutable, EIP-2981-compliant smart contracts protecting artist residuals across fragmented marketplaces.</p>
                 </div>
               </li>
             </ul>
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
