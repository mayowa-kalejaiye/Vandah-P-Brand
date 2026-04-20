import { DockApp } from "@/components/Dock";
import Link from "next/link";
import SparklesText from "@/components/SparklesText";
import ThreeDCard from "@/components/ThreeDCard";

export default function PublicFigurePage() {
  return (
    <div className="min-h-screen w-full bg-fuchsia-950 text-fuchsia-50 font-sans selection:bg-pink-500/30 pb-48">
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
         <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-fuchsia-600/20 blur-[120px]"></div>
         <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-pink-600/20 blur-[120px]"></div>
      </div>

      {/* Nav */}
      <nav className="relative z-10 w-full p-8 flex justify-between items-center mix-blend-screen text-white">
        <span className="font-serif font-bold text-2xl tracking-tight">VA.</span>
        <span className="uppercase tracking-widest text-xs font-bold px-4 py-2 border border-white/20 rounded-full">Media & Press</span>
      </nav>

      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center px-8 md:px-24 relative z-10 pt-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <p className="text-pink-400 font-mono uppercase tracking-widest text-sm">Public Figure ///</p>
            
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white">
              VOICE <span className="text-pink-500 italic font-serif font-normal">&</span> <br/>
              VISION.
            </h1>

            <p className="text-xl md:text-2xl text-fuchsia-200/80 font-light max-w-2xl mt-8">
              An influential voice at the intersection of technology, culture, and female leadership.
            </p>
          </div>

          <div className="hidden lg:flex justify-end">
             <ThreeDCard
                className="w-full max-w-lg"
                backgroundImage="/public.png"
                maxRotation={15}
                glowOpacity={0.3}
              >
                <img
                  src="/public.png"
                  alt="Public Figure Victory"
                  className="w-full h-auto rounded-xl shadow-2xl border border-pink-500/20"
                />
             </ThreeDCard>
          </div>

        </div>
      </section>

      {/* As Seen In */}
      <section className="py-24 px-8 md:px-24 bg-black/20 backdrop-blur-sm border-y border-white/5 relative z-10">
         <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-sm uppercase tracking-widest text-fuchsia-400 font-bold mb-12">Featured Across Major Platforms</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="text-3xl font-sans font-bold lowercase tracking-tight text-[#0066F5] flex items-center gap-2">
                 {/* Simplified Cowrywise logo mark representation */}
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                   <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18Z" />
                   <path d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z" />
                 </svg>
                 cowrywise
               </div>
            </div>
         </div>
      </section>

      {/* Biography / Narrative */}
      <section className="py-32 px-8 md:px-24 relative z-10">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-4xl md:text-6xl font-black mb-12 text-white">The Narrative.</h2>
           
           <div className="space-y-8 text-xl text-fuchsia-200/90 leading-relaxed font-light">
             <p>
               Victory Abu isn't just building companies; she's building a movement. As a public figure, she uses her platform to challenge the status quo, champion diversity in tech, and demystify complex emerging technologies for the masses.
             </p>
             <p className="pl-6 border-l-2 border-pink-500">
               With a compelling personal story that spans from grassroots community building to executive leadership, her narrative resonates with a diverse global audience. She represents the new archetype of the modern tech leader - accessible, authentic, and undeniably effective.
             </p>
             <p>
               Whether on global stages, in deep-dive interviews, or through her highly engaged social channels, Victory's voice is shaping the conversation around the future of the internet.
             </p>
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
