import Link from "next/link";

export default function OperationsManager() {
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
        <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 border border-orange-100">
          <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
          Operations <br/><span className="text-orange-600">Leadership</span>
        </h1>
        <p className="text-2xl text-gray-500 max-w-3xl leading-relaxed mb-12">
          Deploying structured financial logic, robust budget mitigation, and systemic processes to fortify high-stakes execution.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-4">Core Methodologies</h2>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Resource & Budget Control</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Managing severe physical and financial limits without sacrificing product quality. Architecting deep allocation spreadsheets to track burn-rates, balance profit/loss objectives, and maintain strict break-even floors.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Vendor & Stakeholder Alignment</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Operating effectively in multi-stakeholder structures. Structuring secure partnership agreements, aligning external corporate vendors with internal engineering constraints, and driving B2B delivery objectives smoothly.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Crisis Logistics</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Developing proactive mitigation frameworks. When high-pressure scenarios occur (denied compliance approvals, delayed assets, technical crashes), resolving the bottleneck immediately while actively preserving user sentiment and operational stability on the front-end.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-4">The Impact Focus</h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Operations is the structural backbone of strategy. Without systemic processes, even the best technical ideas dissolve into delays and budget blowouts in execution. 
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in bridging the gap between what is envisioned and what can logically be sustained. By documenting every workflow, anticipating compliance blockers, and tightening reporting structures, I build invisible scaffolding that protects the organization from execution failure.
            </p>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-6">Execution Toolkit</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-orange-50 text-orange-700 text-sm font-bold rounded-full">Burn-rate Tracking</span>
                <span className="px-4 py-2 bg-orange-50 text-orange-700 text-sm font-bold rounded-full">Crisis Management</span>
                <span className="px-4 py-2 bg-orange-50 text-orange-700 text-sm font-bold rounded-full">B2B Documentation</span>
                <span className="px-4 py-2 bg-orange-50 text-orange-700 text-sm font-bold rounded-full">Logistical Sequencing</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
