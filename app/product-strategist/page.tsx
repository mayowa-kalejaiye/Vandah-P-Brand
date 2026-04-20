import Link from "next/link";

export default function ProductStrategist() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar/Back */}
      <div className="max-w-5xl mx-auto px-8 py-8">
        <Link href="/#explore-my-work" className="text-gray-500 hover:text-black inline-flex items-center gap-2 transition-colors text-sm font-medium tracking-wide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO PORTFOLIO
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-8 pt-16 pb-16">
        <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 border border-indigo-100">
          <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
          Product <br/><span className="text-indigo-600">Strategist</span>
        </h1>
        <p className="text-2xl text-gray-500 max-w-3xl leading-relaxed mb-12">
          Aligning distribution models, user experience (UX), and technical architecture to drive deep product adoption and market fit.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-4">Core Methodologies</h2>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Product-Market Fit Validation</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Transitioning ideas from assumption to validated metrics. Architecting MVP structures that require the lowest feasible engineering lift while generating maximum user feedback to inform the long-term roadmap.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Go-To-Market (GTM) Architecture</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                A great product fails without a distribution lever. Building synchronized launch sequences aligning marketing messaging, community onboarding, and product readiness to ensure launch day momentum generates structural retention.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">User Flow & Friction Reduction</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Auditing user onboarding processes, especially in complex fintech or Web3 environments where trust and compliance (KYC, wallet connections) inherently introduce drop-off risks.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-4">The Impact Focus</h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Product Strategy isn&apos;t just about building features—it’s about deciding what <strong>not</strong> to build. I act as the filter between user requests, stakeholder ambitions, and engineering realities.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              By enforcing rigorous prioritization and focusing heavily on distribution architecture, I ensure that the software we ship actually solves the core problem for the user while operating smoothly within the broader business objectives.
            </p>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-6">Execution Toolkit</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-full">GTM Sequencing</span>
                <span className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-full">Roadmap Prioritization</span>
                <span className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-full">Conversion Optimization</span>
                <span className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-full">Figma/Miro</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
