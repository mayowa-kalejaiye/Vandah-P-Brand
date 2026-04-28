import Link from "next/link";

export default function Web3Operations() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar/Back */}
      <div className="max-w-5xl mx-auto px-8 py-8">
        <Link href="/" className="text-gray-400 hover:text-white inline-flex items-center gap-2 transition-colors text-sm font-medium tracking-wide">
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
          Web3 <br/><span className="text-emerald-500">Operations</span>
        </h1>
        <p className="text-2xl text-gray-400 max-w-3xl leading-relaxed mb-12">
          I bridge technical Web3 milestones with actionable community growth campaigns, institutional event execution, and ecosystem adoption.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">Core Methodologies</h2>
            
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-3">Community Growth & Engagement Strategy</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                In Web3, the community is a primary distribution channel. I structure highly interactive campaigns such as ecosystem writing contests and platform yields, translating high-pressure technical deployments into accessible user adoption.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-3">Event Operations & VIP Execution</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Scaling physical ecosystem events such as large university tech summits like Campus Bestie: Grills & Chills. I orchestrate multi-layered budgets, stakeholder coordination, and VIP tier experiences to maintain high brand standards locally.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-3">Ecosystem & Product Adoption</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Acting as a critical support funnel to ensure smooth user acquisition. Maintaining the operational structures that connect DeFi products like Sui blockchain dApps with their target audiences, strengthening overall brand presence.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">The Impact Focus</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Crypto operates at an accelerated pace where community sentiment shifts instantly. Standard management practices often fail without grounded, cross-functional execution.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My role is to bring operational logic to decentralized environments. From coordinating high-tier physical tech events to executing digital adoption campaigns, my focus is on driving actual product usage and ecosystem value while navigating the complex technical landscape of blockchains.
            </p>

            <div className="mt-8 pt-8 border-t border-slate-800">
              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-500 mb-6">Execution Focus</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-emerald-900/20 text-emerald-400 text-sm font-bold rounded-full border border-emerald-500/20">Growth Strategy</span>
                <span className="px-4 py-2 bg-emerald-900/20 text-emerald-400 text-sm font-bold rounded-full border border-emerald-500/20">Event Operations</span>
                <span className="px-4 py-2 bg-emerald-900/20 text-emerald-400 text-sm font-bold rounded-full border border-emerald-500/20">DeFi Ecosystems</span>
                <span className="px-4 py-2 bg-emerald-900/20 text-emerald-400 text-sm font-bold rounded-full border border-emerald-500/20">Community Adoption</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
