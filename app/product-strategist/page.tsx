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
          Aligning roadmap execution with market realities to drive deep product adoption and operational scalability.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-4">Core Methodologies</h2>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Product Roadmap Strategy</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Transitioning ideas from early-stage ideation to large-scale deployment. Architecting plans that require manageable execution phases while generating the feedback needed to inform the long-term lifecycle of the product.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Go-To-Market Alignment</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                A great product requires clear distribution and adoption paths. Coordinating marketing messaging, community onboarding (specifically in Web3 environments), and product readiness to ensure successful launches.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Cross-Functional Integration</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Directing the flow of information between stakeholders, external partners, and execution teams. Balancing the business ambitions with operational constraints to maintain product momentum.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-4">The Impact Focus</h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Product Strategy in emerging markets and complex tech environments isn&apos;t just about building features—it’s about structured growth operations. I act as the filter between market demands, stakeholder ambitions, and operational realities.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              By enforcing rigorous prioritization and focusing heavily on community-driven distribution, I ensure that the solutions we ship operate smoothly within the broader business objectives and are positioned to succeed over their full lifecycle.
            </p>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-6">Execution Focus</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-full">Roadmap Strategy</span>
                <span className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-full">Community Integration</span>
                <span className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-full">Scalable Ideation</span>
                <span className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-full">Stakeholder Delivery</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
