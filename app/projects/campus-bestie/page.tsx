import Link from "next/link";

export default function CampusBestie() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar/Back */}
      <div className="max-w-5xl mx-auto px-8 py-8">
        <Link href="/" className="text-gray-500 hover:text-black inline-flex items-center gap-2 transition-colors text-sm font-medium tracking-wide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO PORTFOLIO
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-8 pt-16 pb-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm">
          Campus Bestie: <br/><span className="text-[#e85a1f]">Grills & Chills</span>
        </h1>
        <p className="text-2xl text-gray-500 max-w-3xl leading-relaxed mb-12">
          Managed a 200+ attendee campus event with a ₦720K budget and a 10+ member cross-functional team, balancing revenue execution with operational crisis management.
        </p>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-gray-200">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Attendees</p>
            <p className="text-4xl font-bold text-gray-900">224+</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Budget Managed</p>
            <p className="text-4xl font-bold text-gray-900">₦720K</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">VIP Revenue</p>
            <p className="text-4xl font-bold text-gray-900">₦525K</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Team Coordinated</p>
            <p className="text-4xl font-bold text-gray-900">10+</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="md:col-span-8 space-y-16">
            
            {/* Context */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4">Context & Partnership</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Campus Bestie partnered with NACOS to design and manage an exclusive VIP product experience within a larger 200+ attendee university event. The goal was to provide high-end social engagement while successfully executing operational frameworks on top of a larger, broader campus initiative. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Rather than just coordinating the event, I established a structured partnership model. Campus Bestie leveraged NACOS for distribution, promotion, and audience access, while maintaining absolute product ownership of the VIP delivery, financing, branding, and end-to-end execution.
              </p>
            </section>

            {/* Challenges & Crisis Management */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4">Crisis Resolution & Operations</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We faced a massive last-minute compliance restriction on bringing in specialized equipment (snooker setup) which was a core feature of the VIP offering. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I immediately escalated the issue directly to the university authorities, securing final operational clearance within two hours. While waiting for approval, I employed rapid crisis mitigation—diverting the VIP attendees to alternative engagements (console games, high-end ambience, and premium snacks) to protect the user experience and preserve customer satisfaction metrics during the bottleneck.
              </p>
            </section>

            {/* Financial Control */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4">Financial & Budget Management</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                I oversaw a total budget execution of <strong>~₦720,000</strong>, deploying spreadsheet-driven systems to meticulously track all resource allocations.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
                <li>Balanced the incoming VIP revenue (₦525,000 via 15 direct VIP tickets at ₦35K each) with internal stakeholder funding.</li>
                <li>Ensured <strong>zero budget overruns</strong> or debt exposure, delivering a perfectly break-even financial execution optimized for brand growth rather than immediate short-term profit.</li>
                <li>Managed the ₦150,000 upfront corporate sponsorship commitment to NACOS exactly as modeled.</li>
              </ul>
            </section>

          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-12">
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-6">Execution Impact</h3>
              <ul className="space-y-6">
                <li>
                  <p className="font-bold text-gray-900 text-xl">200-400</p>
                  <p className="text-sm text-gray-500 leading-relaxed mt-1">New TikTok followers gained via event-driven viral marketing and high-quality user-generated content (UGC).</p>
                </li>
                <li>
                  <p className="font-bold text-gray-900 text-xl">30 VIP Slots</p>
                  <p className="text-sm text-gray-500 leading-relaxed mt-1">Successfully deployed as a structured product offering featuring tiered tiered access and guest-listing.</p>
                </li>
                <li>
                  <p className="font-bold text-gray-900 text-xl">10+ Personnel</p>
                  <p className="text-sm text-gray-500 leading-relaxed mt-1">Built and coordinated the entire logistics matrix spanning caterers, decorators, media, and volunteers through spreadsheet models.</p>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
              <h3 className="text-sm uppercase tracking-widest font-bold text-orange-800 mb-4">Tools & Systems</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-orange-700 text-sm font-medium rounded-full shadow-sm">Google Sheets</span>
                <span className="px-3 py-1 bg-white text-orange-700 text-sm font-medium rounded-full shadow-sm">Excel</span>
                <span className="px-3 py-1 bg-white text-orange-700 text-sm font-medium rounded-full shadow-sm">Notion</span>
                <span className="px-3 py-1 bg-white text-orange-700 text-sm font-medium rounded-full shadow-sm">Budget Matrix</span>
                <span className="px-3 py-1 bg-white text-orange-700 text-sm font-medium rounded-full shadow-sm">Timeline Maps</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
