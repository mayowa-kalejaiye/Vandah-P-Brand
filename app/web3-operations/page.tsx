import Link from "next/link";

export default function Web3Operations() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar/Back */}
      <div className="max-w-5xl mx-auto px-8 py-8">
        <Link href="/#explore-my-work" className="text-gray-400 hover:text-white inline-flex items-center gap-2 transition-colors text-sm font-medium tracking-wide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO PORTFOLIO
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-8 pt-16 pb-16">
        <div className="w-20 h-20 bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20">
          <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-sm">
          Web3 <br/><span className="text-emerald-500">Operations Leader</span>
        </h1>
        <p className="text-2xl text-gray-400 max-w-3xl leading-relaxed mb-12">
          Deploying high-probability growth campaigns, scaling decentralized communities, and managing remote ecosystems securely.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">Core Methodologies</h2>
            
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-3">Community as a Growth Channel</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                In Web3, community is product. I structure Discord, X (Twitter), and Telegram ecosystems not as chat rooms, but as primary distribution pipelines and user acquisition funnels driven by quantitative health metrics.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-3">Campaign & Launch Execution</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Managing the extreme volatility of token launches, NFT mints, and yield protocol deployments. Coordinating whitelist structures, running pre-launch AMAs, and mitigating frontend bottlenecks during high-traffic load events under immense pressure.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-3">Decentralized & Asynchronous Ops</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Thriving in hyper-remote environments. Setting up documentation, communication protocols, and knowledge bases (Notion, GitBook) to keep global, pseudo-anonymous teams perfectly aligned on product roadmaps.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">The Impact Focus</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Crypto operates at 10x the speed of traditional tech. Standard management practices break down when dealing with rapid token deployment, constant community sentiment shifts, and borderless users. 
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I bring grounded operational logic to a chaotic space. By applying rigorous project management principles to decentralized systems, I ensure that marketing promises reflect actual technical capabilities, driving true ecosystem value rather than temporary hype.
            </p>

            <div className="mt-8 pt-8 border-t border-slate-800">
              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-500 mb-6">Execution Toolkit</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-emerald-900/20 text-emerald-400 text-sm font-bold rounded-full border border-emerald-500/20">DeFi Strategy</span>
                <span className="px-4 py-2 bg-emerald-900/20 text-emerald-400 text-sm font-bold rounded-full border border-emerald-500/20">Token/NFT Ops</span>
                <span className="px-4 py-2 bg-emerald-900/20 text-emerald-400 text-sm font-bold rounded-full border border-emerald-500/20">Discord Architecture</span>
                <span className="px-4 py-2 bg-emerald-900/20 text-emerald-400 text-sm font-bold rounded-full border border-emerald-500/20">Remote Scalability</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}