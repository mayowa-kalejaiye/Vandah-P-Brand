import Link from 'next/link';
import { DockApp } from '@/components/Dock';

export default function BlockchainAdvisory() {
  return (
    <div className="min-h-screen w-full bg-[#f8f9fa] text-slate-900 relative selection:bg-blue-500/20 overflow-hidden font-sans">
      {/* Ambient background clean/corporate theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-blue-400/5 blur-[100px] mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-slate-400/10 blur-[150px] mix-blend-multiply"></div>
      </div>

      <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50">
        <Link href="/#explore-my-work" className="group flex items-center gap-3 text-slate-500 hover:text-slate-900 transition-colors">
          <div className="w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center group-hover:border-slate-500 transition-colors bg-white/40 backdrop-blur-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-sm tracking-widest uppercase font-bold">Back to Portfolio</span>
        </Link>
      </div>

      {/* Hero Content */}
      <main className="relative z-10 min-h-screen flex flex-col justify-center px-8 md:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase mb-12 shadow-sm">
            Enterprise Solutions
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-none mb-8 text-slate-900">
            Blockchain <br/>
            <span className="font-light italic text-slate-400">Advisory.</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-slate-600 leading-relaxed mx-auto max-w-3xl mb-12">
            Strategic implementation of distributed ledgers within legacy systemic environments to reduce reconciliation costs and increase data immutability.
          </p>
          <div className="flex justify-center gap-4">
             <div className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold tracking-widest uppercase text-sm hover:scale-105 transition-transform cursor-pointer shadow-xl">
                Case Study PDF
             </div>
             <div className="px-8 py-4 rounded-full border border-slate-300 text-slate-700 font-bold tracking-widest uppercase text-sm hover:bg-slate-50 transition-colors cursor-pointer bg-white/50 backdrop-blur">
                View Audits
             </div>
          </div>
        </div>
      </main>

      {/* Deep Dive Section */}
      <section className="relative z-10 px-8 md:px-24 py-32 bg-white border-t border-slate-100 shadow-[0_-15px_60px_-15px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 border-r border-slate-100 pr-16 hidden lg:block">
            <h2 className="text-4xl font-bold tracking-tighter mb-8 text-slate-900">Scope of<br/>Work</h2>
            <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-slate-400">
               <li className="text-blue-600 border-l-2 border-blue-600 pl-4 py-1">Legacy Modernization</li>
               <li className="hover:text-slate-900 transition-colors cursor-pointer pl-4">Smart Contract Dev</li>
               <li className="hover:text-slate-900 transition-colors cursor-pointer pl-4">Consortium Planning</li>
               <li className="hover:text-slate-900 transition-colors cursor-pointer pl-4">Regulatory Compliance</li>
            </ul>
          </div>
          <div className="lg:col-span-2 space-y-16">
            <div>
               <h3 className="text-3xl font-bold text-slate-900 mb-6">Transitioning from Silos.</h3>
               <p className="text-lg text-slate-600 leading-loose font-light">
                 When a multi-national logistics firm needed to eliminate data reconciliation bottlenecks across its supply chain, we engineered a private Hyperledger fabric consortium. This advisory role extended past architecture into organizational alignment, ensuring all stakeholders migrated node nodes simultaneously.
               </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                 <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-2xl mb-6 font-bold text-xl">1</div>
                 <h4 className="text-xl font-bold text-slate-900 mb-4">Architecture</h4>
                 <p className="text-slate-500 text-sm leading-relaxed">
                   Designing robust, scalable EVM-compatible networks prioritizing throughput, decentralization, and Byzantine fault tolerance.
                 </p>
               </div>
               <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                 <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-2xl mb-6 font-bold text-xl">2</div>
                 <h4 className="text-xl font-bold text-slate-900 mb-4">Implementation</h4>
                 <p className="text-slate-500 text-sm leading-relaxed">
                   Shepherding clients from whitepaper to mainnet deployment while managing external audits and bug bounties.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <DockApp />
        </div>
      </div>
    </div>
  );
}
