import { DockApp } from "@/components/Dock";
import Link from "next/link";
import ThreeDCard from "@/components/ThreeDCard";

export default function FounderCEOPage() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans selection:bg-red-500/20 pb-48">
      
      {/* Navigation / Branding */}
      <nav className="absolute top-0 w-full p-8 flex justify-between items-center z-40 text-zinc-900 border-b border-zinc-200">
        <span className="font-bold tracking-tight text-xl">V.A. / CEO</span>
        <span className="text-sm font-bold tracking-widest uppercase text-red-600">Company Building</span>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 pt-20 relative">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 w-12 bg-red-600"></div>
              <span className="text-zinc-500 font-bold tracking-widest uppercase text-sm">Vision to Execution</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-zinc-900 tracking-tighter leading-[0.9] mb-8 uppercase">
              Founder <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-400">
                & CEO
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl text-zinc-600 max-w-3xl font-medium leading-snug">
              Building scalable digital platforms and steering teams toward industry-defining innovation.
            </p>
          </div>

          <div className="hidden lg:flex justify-end">
             <ThreeDCard
                className="w-full max-w-lg"
                backgroundImage="/campus.png"
                maxRotation={15}
                glowOpacity={0.3}
              >
                <img
                  src="/campus.png"
                  alt="CampusBestie Platform"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
             </ThreeDCard>
          </div>

        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="py-32 px-8 md:px-24 bg-zinc-900 text-zinc-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 item-start">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white uppercase">
                Leadership <br/> Philosophy.
              </h2>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                As a Founder and CEO, Victory focuses on launching new ventures, scaling existing operations, and navigating complex market dynamics.
              </p>
              <div className="w-full h-px bg-zinc-800 my-8"></div>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Her leadership style is characterized by empowering high-performing teams, fostering inclusive company cultures, and maintaining unwavering focus on user-centric product development.
              </p>
            </div>
            
            <div className="flex flex-col gap-6 justify-center">
               <div className="p-8 border border-zinc-800 bg-zinc-950/50 hover:border-red-600 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3">01. Vision</h3>
                  <p className="text-zinc-500">Defining ambitious objectives and aligning organizations around a unified north star.</p>
               </div>
               <div className="p-8 border border-zinc-800 bg-zinc-950/50 hover:border-red-600 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3">02. Growth</h3>
                  <p className="text-zinc-500">Identifying market opportunities and implementing scalable growth frameworks.</p>
               </div>
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
