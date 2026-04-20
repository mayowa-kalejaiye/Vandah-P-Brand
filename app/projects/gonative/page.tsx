import Link from "next/link";

export default function GoNative() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar/Back */}
      <div className="max-w-5xl mx-auto px-8 py-8">
        <Link href="/#explore-my-work" className="text-gray-500 hover:text-white inline-flex items-center gap-2 transition-colors text-sm font-medium tracking-wide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO PORTFOLIO
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-8 pt-12 pb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-sm">
          GoNative: <br/><span className="text-blue-400">Bitcoin Yield on Sui</span>
        </h1>
        <p className="text-2xl text-gray-400 max-w-3xl leading-relaxed mb-12">
          Community Manager with project-level ownership across growth initiatives, coordinating high-impact marketing campaigns and driving product adoption within a Web3 ecosystem.
        </p>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-slate-800">
          <div>
            <p className="text-sm text-blue-400 uppercase tracking-widest font-bold mb-1">Ecosystem</p>
            <p className="text-4xl font-bold text-white">Sui / BTC</p>
          </div>
          <div>
            <p className="text-sm text-blue-400 uppercase tracking-widest font-bold mb-1">Role</p>
            <p className="text-4xl font-bold text-white">Ops & Growth</p>
          </div>
          <div>
            <p className="text-sm text-blue-400 uppercase tracking-widest font-bold mb-1">Vertical</p>
            <p className="text-4xl font-bold text-white">Web3 DeFi</p>
          </div>
          <div>
            <p className="text-sm text-blue-400 uppercase tracking-widest font-bold mb-1">Focus</p>
            <p className="text-4xl font-bold text-white">Engagement</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="md:col-span-8 space-y-16">
            
            {/* Context */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-white border-b border-slate-800 pb-4">Context & Project Scope</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                GoNative is a Bitcoin yield platform built on the Sui blockchain, focused on yield generation, community growth, and product adoption. My role as Community Manager required cross-functional responsibilities that overlapped heavily with project management.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Rather than acting merely as a moderator, my contribution was structured around organizing growth systems, leveraging the community as a distribution channel, and translating technical milestones into actionable community campaigns.
              </p>
            </section>

            {/* Campaign Execution */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-white border-b border-slate-800 pb-4">Key Contributions</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Community Growth Campaign (Writing Contest)</h3>
                  <p className="text-lg text-gray-400 leading-relaxed mb-4">
                    Coordinated a community-driven writing campaign engineered to increase brand visibility and drive engagement within the ecosystem. 
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-400">
                    <li>Structured participant interaction and campaign flow.</li>
                    <li>Acted as a support funnel to ensure smooth user acquisition.</li>
                    <li>Strengthened GoNative&apos;s brand presence and product narrative within the broader Web3 community.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">NFT Sales Support</h3>
                  <p className="text-lg text-gray-400 leading-relaxed mb-4">
                    Supported critical NFT sales initiatives through community engagement, structured communication, and campaign coordination.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-400">
                    <li>Contributed to the awareness phase by clarifying NFT utility to users.</li>
                    <li>Managed real-time communication between the core project team and potential buyers.</li>
                    <li>Helped drive awareness and participation in the NFT offerings to support the overall revenue goals of the protocol.</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-12">
            
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-500 mb-6">Strategic Value</h3>
              <ul className="space-y-6">
                <li>
                  <p className="font-bold text-white text-xl">Execution</p>
                  <p className="text-sm text-gray-400 leading-relaxed mt-1">Demonstrated capability to run growth campaigns and handle front-line user mitigation.</p>
                </li>
                <li>
                  <p className="font-bold text-white text-xl">Web3 Ops</p>
                  <p className="text-sm text-gray-400 leading-relaxed mt-1">Understanding the vital role of community as a product distribution channel in decentralized environments.</p>
                </li>
              </ul>
            </div>

            <div className="bg-blue-950/30 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-sm uppercase tracking-widest font-bold text-blue-400 mb-4">Core Strengths</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-gray-300 font-medium">DeFi Strategy</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-gray-300 font-medium">Token/NFT Ops</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-gray-300 font-medium">Remote Scalability</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
