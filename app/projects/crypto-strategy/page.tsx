import Link from 'next/link';
import { DockApp } from '@/components/Dock';

export default function CryptoStrategy() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-emerald-50 relative selection:bg-emerald-900/50 overflow-hidden font-mono">
      {/* Matrix / Financial terminal vibe bg */}
      <div className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-[url('/noise.png')] before:opacity-5 mix-blend-overlay">
        <div className="absolute top-0 right-0 w-[40vw] h-[100vh] bg-emerald-900/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[30vw] h-[30vh] bg-teal-800/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50">
        <Link href="/#explore-my-work" className="group flex items-center gap-3 text-emerald-500/50 hover:text-emerald-400 transition-colors">
          <div className="w-10 h-10 border border-emerald-500/20 rounded-sm flex items-center justify-center group-hover:border-emerald-500/60 transition-colors bg-black/40 backdrop-blur-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-sm tracking-widest uppercase font-bold">TERMINATE SESSION</span>
        </Link>
      </div>

      <main className="relative z-10 min-h-screen flex flex-col justify-center px-8 md:px-24">
        <div className="max-w-6xl w-full border-l-2 border-emerald-900/50 pl-8 md:pl-16 py-12">
          <div className="inline-block px-3 py-1 bg-emerald-950/40 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 border border-emerald-800/50 relative">
             <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 animate-pulse"></span>
             Algorithmic Consulting
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-none text-emerald-100 mb-8 dropdown-shadow-emerald">
            Crypto<br/>Strategy.
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-emerald-300/70 max-w-3xl leading-relaxed mb-12">
            > INITIALIZING QUANTITATIVE RISK PROFILING... <br/>
            > OPTIMIZING FOR HIGH-NET-WORTH PORTFOLIOS.
          </p>

          <div className="flex flex-wrap gap-4 font-sans uppercase text-xs tracking-widest font-bold">
            <div className="px-6 py-3 border border-emerald-500 text-emerald-400 hover:bg-emerald-950/40 hover:text-white transition-colors cursor-pointer">
              Deploy Models
            </div>
            <div className="px-6 py-3 bg-emerald-900/20 text-emerald-500/50 hover:text-emerald-300 transition-colors cursor-pointer flex gap-3 items-center">
              View Backtests
            </div>
          </div>
        </div>
      </main>

      {/* Terminal Output Section */}
      <section className="relative z-10 px-8 md:px-24 py-24 bg-black/80 border-t border-emerald-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="border border-emerald-900/30 p-8 rounded bg-emerald-950/10 font-mono relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 text-emerald-800 text-sm">SYS.001</div>
            <h3 className="text-emerald-300 text-xl font-bold mb-6">Market Inefficiencies</h3>
            <p className="text-emerald-500/60 text-sm leading-loose">
              By mapping order book slippage and macro-on-chain liquidations, we designed a mean-reversion algorithm designed for turbulent volatile trading pairs, decreasing drawdowns by 42%. Data silos have been fully unified for low-latency institutional clients.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-emerald-900/50 to-transparent my-6"></div>
             <div className="flex justify-between items-center text-xs text-emerald-400/40">
                <span>Latency Check</span>
                <span className="text-emerald-400">12ms - OPTIMAL</span>
             </div>
          </div>

          <div className="border border-emerald-900/30 p-8 rounded bg-emerald-950/10 font-mono relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-emerald-800 text-sm">SYS.002</div>
            <h3 className="text-emerald-300 text-xl font-bold mb-6">Tokenomics Design</h3>
            <p className="text-emerald-500/60 text-sm leading-loose">
              Structured vesting schedules and staking-yield dynamics for tier-1 decentralized protocols. We mitigated early dump risks while ensuring high retail engagement post-TGE via gamified emission rewards.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-emerald-900/50 to-transparent my-6"></div>
             <div className="flex justify-between items-center text-xs text-emerald-400/40">
                <span>Vesting Model</span>
                <span className="text-emerald-400">Linear / CLIFF 6M</span>
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
