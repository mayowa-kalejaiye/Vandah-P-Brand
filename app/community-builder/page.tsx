import { DockApp } from "@/components/Dock";
import Link from "next/link";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";

export default function CommunityBuilderPage() {
  return (
    <div className="min-h-screen w-full bg-[#fdfaf6] font-sans selection:bg-amber-300/30 text-amber-950 pb-48">
      
      {/* Curved Nav */}
      <div className="p-4 md:p-8 flex justify-center">
        <nav className="bg-white/80 backdrop-blur-xl border border-amber-950/10 rounded-full px-8 py-4 flex justify-between items-center w-full max-w-4xl shadow-sm">
          <span className="font-bold tracking-tight text-lg text-amber-900">Victory Abu</span>
          <span className="text-sm font-medium tracking-wide text-amber-600 bg-amber-50 px-4 py-1 rounded-full">Community Builder</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-8 md:px-24 text-center mt-[-5vh]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="flex -space-x-4 mb-8">
            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bffa1?auto=format&fit=crop&w=150&q=80" alt="Community Member" className="w-16 h-16 rounded-full object-cover border-4 border-[#fdfaf6] bg-amber-200" />
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="Community Member" className="w-16 h-16 rounded-full object-cover border-4 border-[#fdfaf6] bg-orange-300" />
            <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&q=80" alt="Community Member" className="w-16 h-16 rounded-full object-cover border-4 border-[#fdfaf6] bg-rose-300" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold text-amber-950 tracking-tight leading-[1.1] mb-8">
            Gathering <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              The People.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-800/80 max-w-2xl font-light leading-relaxed">
            Fostering engaged, authentic communities where meaningful relationships drive collective growth.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-3xl p-8 text-center border border-amber-100 shadow-sm flex flex-col items-center justify-center aspect-square">
                <div className="text-4xl md:text-6xl font-bold text-amber-950 mb-2">50k+</div>
                <div className="text-sm text-amber-600/80 font-medium">Members Gathered</div>
              </div>
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8 text-center border border-orange-300 shadow-md flex flex-col items-center justify-center aspect-square text-white transform -rotate-2">
                <div className="text-4xl md:text-6xl font-bold mb-2">200+</div>
                <div className="text-sm font-medium">Events Hosted</div>
              </div>
              <div className="bg-white rounded-3xl p-8 text-center border border-amber-100 shadow-sm flex flex-col items-center justify-center aspect-square transform translate-y-4">
                <div className="text-4xl md:text-6xl font-bold text-amber-950 mb-2">15</div>
                <div className="text-sm text-amber-600/80 font-medium">Active Chapters</div>
              </div>
              <div className="bg-gradient-to-br from-pink-400 to-rose-400 rounded-3xl p-8 text-center border border-pink-300 shadow-md flex flex-col items-center justify-center aspect-square text-white rotate-1">
                <div className="text-4xl md:text-6xl font-bold mb-2">95%</div>
                <div className="text-sm font-medium">Engagement Rate</div>
              </div>
           </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-24 px-8 bg-white/50">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center">
             <h2 className="text-4xl font-bold text-amber-950 mb-6">The Approach</h2>
             <p className="text-xl text-amber-800/80 leading-relaxed font-light">
               Building a community isn't just about accumulating members - it's about creating spaces where people feel truly seen, valued, and connected. Victory's approach blends strategic programming with genuine empathy to cultivate spaces of high trust and high impact.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-amber-100/50">
               <h3 className="text-xl font-bold text-amber-900 mb-4">Authentic Connection</h3>
               <p className="text-amber-800/70">Moving beyond transactional networking to foster relationships built on mutual support and shared values.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-amber-100/50">
               <h3 className="text-xl font-bold text-amber-900 mb-4">Scalable Intimacy</h3>
               <p className="text-amber-800/70">Designing architecture that allows large groups to maintain the warmth and intimacy of small gatherings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dock Navigation */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <DockApp />
        </div>
      </div>
    </div>
  );
}
