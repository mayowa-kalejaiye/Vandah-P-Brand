import { DockApp } from "@/components/Dock";
import Link from "next/link";

export default function ProjectConsultantPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-start justify-center px-8 md:px-24 py-24 relative z-10 border-b border-slate-800">
        
        {/* Top Section - Logo/Branding */}
        <div className="absolute top-8 left-0 right-0 px-8 flex items-center justify-between">
          <div className="overflow-hidden">
            <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">© Victory Abu / Consult</p>
          </div>
        </div>
        
        <div className="max-w-5xl space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 bg-blue-400"></span> Strategy & Execution
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none">
            Project <br/>Consultant.
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light">
            Delivering strategic insights and execution excellence for complex technical projects.
          </p>
        </div>
      </section>

      {/* Background Story Section */}
      <section className="min-h-[60vh] px-8 md:px-24 py-24 border-b border-slate-800 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-8">01 / Methodology</h2>
          <div className="space-y-8 text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
            <p>
              Victory Abu's consulting practice emerged from years of successfully navigating complex projects across 
              various industries. Her analytical approach and strategic mindset have helped numerous organizations 
              overcome challenges and achieve their goals.
            </p>
            <p className="pl-6 border-l-2 border-blue-500/50">
              With expertise spanning project management, business strategy, and stakeholder engagement, Victory brings 
              a holistic perspective to every consulting engagement. She excels at identifying root causes, developing 
              actionable solutions, and ensuring successful implementation.
            </p>
            <p>
              Her consulting philosophy centers on collaboration and knowledge transfer, ensuring clients not only 
              achieve immediate objectives but also build internal capabilities for long-term success. From startups 
              to established enterprises, Victory's insights drive meaningful transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="min-h-[50vh] px-8 md:px-24 py-24 border-b border-slate-800 relative z-10">
        <div className="max-w-6xl">
          <h2 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-12">02 / Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div>
              <div className="text-6xl font-bold text-white mb-2">40+</div>
              <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">Projects Consulted</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-white mb-2">95%</div>
              <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">On-Time Delivery</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-white mb-2">$10M+</div>
              <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">Value Created</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-white mb-2">20+</div>
              <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">Industries Served</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-white mb-2">100%</div>
              <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-white mb-2">5+</div>
              <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof of Work & Testimonials */}
      <section className="px-8 md:px-24 py-24 relative z-10 pb-48">
        <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Projects */}
          <div>
             <h2 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-12">03 / Case Studies</h2>
             <div className="space-y-16">
                <div className="group">
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">Digital Transformation</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Led digital transformation consulting for a mid-size enterprise, resulting in 40% efficiency improvement 
                    and successful adoption of new technologies across all departments.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-slate-800 text-slate-300 font-mono text-xs uppercase">Strategy</span>
                    <span className="px-3 py-1 bg-slate-800 text-slate-300 font-mono text-xs uppercase">Digital</span>
                  </div>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">Operational Scaling</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Designed and implemented scalable operational frameworks for a fast-growing startup, enabling them 
                    to handle a 300% increase in customer volume without compromising service quality.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-slate-800 text-slate-300 font-mono text-xs uppercase">Operations</span>
                    <span className="px-3 py-1 bg-slate-800 text-slate-300 font-mono text-xs uppercase">Scaling</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-12">04 / Client Feedback</h2>
            <div className="space-y-12">
              <div className="p-8 bg-slate-900 border border-slate-800 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <p className="text-slate-300 italic mb-6 leading-relaxed">
                  "Victory's strategic insights completely transformed our project approach. She identified issues we hadn't seen and provided actionable solutions that delivered results."
                </p>
                <p className="text-white font-semibold">James Miller</p>
              </div>

              <div className="p-8 bg-slate-900 border border-slate-800 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <p className="text-slate-300 italic mb-6 leading-relaxed">
                  "Her project management expertise saved our initiative from disaster. Victory brought structure, clarity, and momentum when we needed it most."
                </p>
                <p className="text-white font-semibold">Lisa Anderson</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Bottom Dock Navigation */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <DockApp />
        </div>
      </div>
    </div>
  );
}
