import Link from "next/link";

export default function GoNative() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar/Back */}
      <div className="max-w-5xl mx-auto px-8 py-8">
        <Link href="/" className="text-gray-500 hover:text-white inline-flex items-center gap-2 transition-colors text-sm font-medium tracking-wide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO PORTFOLIO
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-8 pt-16 pb-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-sm">
          GoNative: <br/><span className="text-blue-400">Bitcoin Yield on Sui</span>
        </h1>
        <p className="text-2xl text-gray-400 max-w-3xl leading-relaxed mb-12">
          Executed cross-functional community growth campaigns and NFT sales support as a Community Manager within a high-stakes Web3 ecosystem.
        </p>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-slate-800">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Ecosystem</p>
            <p className="text-4xl font-bold text-blue-400">Sui / BTC</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Role Focus</p>
            <p className="text-4xl font-bold text-white">Growth</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Vertical</p>
            <p className="text-4xl font-bold text-white">Web3 & DeFi</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Core KPI</p>
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
              <h2 className="text-2xl font-bold mb-6 text-white border-b border-slate-800 pb-4">Context & Alignment</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                GoNative operates as a pioneer in the Bitcoin yield integration on the upcoming layer-1 Sui blockchain. As the Community Manager, I functioned essentially as a decentralized Project Manager driving distribution, user acquisition, and overall brand resonance throughout the community channels.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                By bridging early-stage product execution with immediate go-to-market communities, I ensured the product strategy translated effectively into actionable, scalable community growth.
              </p>
            </section>

            {/* Campaign Execution */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-white border-b border-slate-800 pb-4">Campaign Execution: Brand Visibility</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                One of the critical growth levers I spearheaded was the GoNative Writing Contest. Designed solely to drive organic brand visibility, this campaign required strict timeline management, deep participant coordination, and constant communication funnels across Discord and Twitter.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                I coordinated the campaign rollout end-to-end—building the engagement loop, supporting participants across varying time zones, and ensuring the writing submissions heavily amplified our foundational product features inside the wider Web3 space.
              </p>
            </section>

            {/* NFT Sales */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-white border-b border-slate-800 pb-4">Product Support: NFT Sales</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Product adoption inside Web3 requires a hyper-engaged audience. During GoNative&apos;s NFT sales phase, I operated on the front-lines to drive awareness, clarify product utility to users, and directly convert community participation into quantitative results.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                My contribution was structural—bridging the gap between the product team&apos;s deployment and the actual consumer demand, ensuring real-time support pipelines were maintained during high-volume sales windows.
              </p>
            </section>

          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-12">
            
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-500 mb-6">Strategic Positioning</h3>
              <ul className="space-y-6">
                <li>
                  <p className="font-bold text-white text-xl">User Acquisition</p>
                  <p className="text-sm text-gray-400 leading-relaxed mt-1">Driving foundational brand visibility through structured community campaigns.</p>
                </li>
                <li>
                  <p className="font-bold text-white text-xl">Sales Support</p>
                  <p className="text-sm text-gray-400 leading-relaxed mt-1">On-ground mitigation of user queries to securely convert engagement into NFT acquisitions.</p>
                </li>
                <li>
                  <p className="font-bold text-white text-xl">Decentralized Ops</p>
                  <p className="text-sm text-gray-400 leading-relaxed mt-1">Navigating asynchronous, global teams and community stakeholders simultaneously.</p>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900/20 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-sm uppercase tracking-widest font-bold text-blue-400 mb-4">Ecosystem Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm font-medium rounded-full border border-blue-500/30">Discord Strategy</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm font-medium rounded-full border border-blue-500/30">Twitter / X Operations</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm font-medium rounded-full border border-blue-500/30">Campaign Tracking</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm font-medium rounded-full border border-blue-500/30">Defi Product Metrics</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
