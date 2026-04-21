import Link from "next/link";

export default function CampusBestie() {
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
      <div className="max-w-5xl mx-auto px-8 pt-12 pb-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 drop-shadow-sm">
            Campus Bestie: <br/><span className="text-[#e85a1f]">Grills & Chills</span>
          </h1>
          <div className="flex gap-4 md:mt-4">
            <img src="/CAMBES.png" alt="Campus Bestie Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg shadow-sm border border-gray-100" />
            <img src="/nacos.png" alt="NACOS Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg shadow-sm border border-gray-100" />
          </div>
        </div>
        <p className="text-2xl text-gray-500 max-w-3xl leading-relaxed mb-12">
          Managed a 200+ attendee campus event under a structured NACOS partnership, balancing a ₦720K budget, cross-functional logistics, and break-even financial execution.
        </p>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-10 border-y border-gray-200">
          <div>
            <p className="text-sm text-[#e85a1f] uppercase tracking-widest font-bold mb-1">Attendees</p>
            <p className="text-4xl font-bold text-gray-900">~224</p>
          </div>
          <div>
            <p className="text-sm text-[#e85a1f] uppercase tracking-widest font-bold mb-1">Budget</p>
            <p className="text-4xl font-bold text-gray-900">₦720K</p>
          </div>
          <div>
            <p className="text-sm text-[#e85a1f] uppercase tracking-widest font-bold mb-1">Revenue</p>
            <p className="text-4xl font-bold text-gray-900">₦525K</p>
          </div>
          <div>
            <p className="text-sm text-[#e85a1f] uppercase tracking-widest font-bold mb-1">Team</p>
            <p className="text-4xl font-bold text-gray-900">10+</p>
          </div>
          <div>
            <p className="text-sm text-[#e85a1f] uppercase tracking-widest font-bold mb-1">VIP Slots</p>
            <p className="text-4xl font-bold text-gray-900">30</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="md:col-span-8 space-y-16">
            
            {/* Context & Partnership */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4">Context & Partnership Model</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Campus Bestie partnered with NACOS (Crawford Chapter) under a structured agreement that defined financial commitments, marketing responsibilities, and execution roles to design a VIP experience within a 200+ attendee campus event.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl my-8">
                <h3 className="text-sm uppercase tracking-widest font-bold text-gray-500 mb-4">Partnership Structure</h3>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-32 flex-shrink-0 font-bold text-gray-900">NACOS</div>
                    <div className="text-gray-600">Distribution, Audience Access, Promotion</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-32 flex-shrink-0 font-bold text-gray-900">Campus Bestie</div>
                    <div className="text-gray-600">VIP Product, Event Experience, Revenue Generation</div>
                  </div>
                </div>
              </div>
              
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
                <li>Managed financial commitments including a ₦150,000 corporate sponsorship agreement alongside overall event budget execution.</li>
                <li>Designed and executed a structured VIP experience with defined access tiers (₦35K per ticket), bundled offerings, and controlled entry systems.</li>
                <li>Leveraged NACOS distribution channels for event marketing while maintaining absolute ownership of the branded premium experience.</li>
              </ul>
            </section>

            {/* Actions Taken */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4">Execution & Operations</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1. Crisis Handling & Experience Protection</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Faced a last-minute campus restriction on importing specialized snooker equipment (a core VIP feature). I personally escalated the issue to school authorities, navigating bottlenecks to secure clearance within two hours. Simultaneously, I maintained attendee engagement using alternative activities (console gaming) to ensure zero drop in customer satisfaction during the wait.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2. Financial Management</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Tracked and controlled the complete ₦720K budget using structured spreadsheet systems. Balanced customer revenue (₦525K across 15 primarily ticketed VIPs + guests) with internal investments, preventing overspending and averting debt exposure to land an intentional break-even financial result.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3. Operational Setup</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Built clear role segmentation across 10+ team members and volunteers. Handled end-to-end execution including catering logistics, venue setup, game operations, and implementing strict VIP access control via tagging validation systems.
                  </p>
                </div>
              </div>
            </section>

            {/* Outcome & Impact */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4">Outcome & Impact</h2>
              
              <ul className="space-y-4 text-lg text-gray-600">
                <li><strong className="text-gray-900">Attendance:</strong> Successfully hosted ~224 attendees, delivering a 30-slot structured VIP product experience.</li>
                <li><strong className="text-gray-900">Financial Execution:</strong> Generated ₦525K in revenue while executing a ₦720K budget, resulting in a strategically break-even positioning with zero operational failure.</li>
                <li><strong className="text-gray-900">Growth & Engagement:</strong> Drove +200-400 follower growth on TikTok through event-driven marketing, sparking strong organic social sharing from participants (UGC) validating the product-market fit of the VIP tier.</li>
                <li><strong className="text-gray-900">Brand Positioning:</strong> Reinforced the Campus Bestie presence and ecosystem value on campus.</li>
              </ul>
            </section>

          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-12">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-6">Tools & Systems</h3>
              <p className="text-gray-600 mb-6">
                Used spreadsheet-based systems to manage budgeting, team coordination, and event logistics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-full shadow-sm">Google Sheets</span>
                <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-full shadow-sm">Excel</span>
                <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-full shadow-sm">Budget Analysis</span>
                <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-full shadow-sm">Timeline Workflows</span>
                <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-full shadow-sm">WhatsApp Comms</span>
              </div>
            </div>
            
            <div className="bg-[#fff3ef] rounded-2xl p-8 border border-[#ffe4da]">
              <h3 className="text-sm uppercase tracking-widest font-bold text-[#e85a1f] mb-4">Core Strengths</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#e85a1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-gray-800 font-medium">Financial Control</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#e85a1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-gray-800 font-medium">Stakeholder Alignment</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#e85a1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-gray-800 font-medium">Crisis Logistics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
