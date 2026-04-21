import Link from "next/link";

export default function FintechProjectManager() {
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
        <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 border border-blue-100">
          <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
          Fintech <br/><span className="text-blue-600">Project Management</span>
        </h1>
        <p className="text-2xl text-gray-500 max-w-3xl leading-relaxed mb-12">
          Transforming strategic FinTech concepts into fully operational, scalable products through adaptable project management and cross-functional coordination.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-4">Core Methodologies</h2>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Stakeholder & Team Coordination</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Bridging the gap between strategy and execution. Managing cross-functional teams to ensure alignment, clear communication, and successful delivery of technical and operational milestones within the FinTech and Web3 ecosystems.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Product Roadmap & Strategy</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Driving products from ideation through to launch. Structuring initiatives realistically to ensure long-term scalability while adapting to the fast-paced nature of emerging financial technologies.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Budget & Resource Management</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Optimizing operational setups by directing budget allocations and resources effectively. Ensuring that project lifecycles remain within scope and deliver maximum value without compromising on quality standards.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-4">The Impact Focus</h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              In financial technology and Web3, successful execution relies on maintaining rigorous operational standards while remaining highly adaptable. My project management approach is built on creating structures that de-risk operations and empower teams to build efficiently.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I ensure that every stakeholder operates with total clarity. Whether navigating the complexities of institutional scale infrastructure or early-stage growth operations, I enforce structured communication loops and full operational lifecycle management to ensure the end product succeeds.
            </p>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-6">Execution Focus</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-bold rounded-full">FinTech Operations</span>
                <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-bold rounded-full">Web3 Infrastructure</span>
                <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-bold rounded-full">Team Coordination</span>
                <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-bold rounded-full">Roadmap Execution</span>
                <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-bold rounded-full">Lifecycle Management</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
