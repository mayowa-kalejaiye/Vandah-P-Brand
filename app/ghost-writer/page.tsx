import { DockApp } from "@/components/Dock";
import Link from "next/link";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";

export default function GhostWriterPage() {
  return (
    <div className="min-h-screen w-full bg-[#fdfbf6] text-stone-900 selection:bg-stone-900 selection:text-[#fdfbf6]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        .font-literary {
          font-family: 'Crimson Text', serif;
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 py-24 relative overflow-hidden border-b border-stone-300">
        
        {/* Top Section - Logo/Branding and Bio */}
        <div className="absolute top-8 left-0 right-0 px-8 flex items-center justify-between z-10">
          <div className="overflow-hidden">
            <p className="text-stone-500 font-literary italic text-sm tracking-widest">© Victory Abu</p>
          </div>
          <div className="overflow-hidden">
             {/* Small header text if needed */}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="font-mono text-xs tracking-[0.3em] text-stone-400 uppercase">Chapter I.</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-literary font-bold text-stone-900 tracking-tight">
            Ghost<br/>Writer.
          </h1>
          <div className="w-24 h-[1px] bg-stone-300 mx-auto"></div>
          <p className="text-xl md:text-2xl text-stone-500 max-w-2xl mx-auto font-literary italic">
            "Crafting compelling narratives and powerful content that resonates, leaving the spotlight to the storyteller."
          </p>
        </div>
      </section>

      {/* Background Story Section */}
      <section className="min-h-screen px-8 py-24 relative">
        {/* Decorative margin line */}
        <div className="hidden md:block absolute left-24 top-0 bottom-0 w-[1px] bg-stone-200"></div>
        <div className="hidden md:block absolute right-24 top-0 bottom-0 w-[1px] bg-stone-200"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-literary font-bold text-stone-900 mb-16 text-center">
            The Author's Note
          </h2>
          <div className="space-y-8 text-xl text-stone-700 leading-relaxed font-literary">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-stone-900 first-letter:mr-3 first-letter:float-left">
              Victory Abu's ghostwriting work grew from a love of storytelling and a knack for authentically channeling
              other voices. Rather than working directly as a personal writer for headline thought leaders, Victory has
              focused her craft across six dedicated ghostwriting brands and contributed to three additional brand
              campaigns — predominantly in the Web3 and blockchain space.
            </p>
            <p>
              She brings a practical approach to narrative structure, audience-first messaging, and conversion-focused
              content. Victory writes long-form books, articles, speeches, and technical Web3 content, always prioritizing
              the client's tone and objectives while shaping ideas into clear, persuasive narratives.
            </p>
            <p>
              Her collaborative process centers on voice preservation and measurable impact: aligning content with
              product goals, community growth, and brand positioning for Web3 projects and forward-thinking companies.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="min-h-screen px-8 py-24 border-t border-stone-300 bg-stone-100/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-literary font-bold text-stone-900 mb-20 text-center">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-literary text-stone-900 mb-4 border-b border-stone-300 pb-4 w-full">100+</div>
              <p className="text-stone-500 font-mono text-xs uppercase tracking-widest">Articles & Blog Posts</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-literary text-stone-900 mb-4 border-b border-stone-300 pb-4 w-full">6</div>
              <p className="text-stone-500 font-mono text-xs uppercase tracking-widest">Dedicated Brands</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-literary text-stone-900 mb-4 border-b border-stone-300 pb-4 w-full">50+</div>
              <p className="text-stone-500 font-mono text-xs uppercase tracking-widest">Speeches Crafted</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-literary text-stone-900 mb-4 border-b border-stone-300 pb-4 w-full">3</div>
              <p className="text-stone-500 font-mono text-xs uppercase tracking-widest">Brand Contributions</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-literary text-stone-900 mb-4 border-b border-stone-300 pb-4 w-full">2M+</div>
              <p className="text-stone-500 font-mono text-xs uppercase tracking-widest">Words Published</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-literary text-stone-900 mb-4 border-b border-stone-300 pb-4 w-full">100%</div>
              <p className="text-stone-500 font-mono text-xs uppercase tracking-widest">Confidentiality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof of Work / Testimonials combined */}
      <section className="min-h-screen px-8 py-24 border-t border-stone-300 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-literary font-bold text-stone-900 mb-20 text-center">
            Praise & Work
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="space-y-16">
              <div className="border-l border-stone-400 pl-8">
                <h3 className="text-3xl font-literary text-stone-900 mb-4">Executive Book Projects</h3>
                <p className="text-stone-600 mb-6 font-literary text-lg leading-relaxed">
                  Ghostwritten 10+ books for executives and entrepreneurs, including business memoirs, leadership 
                  guides, and industry analyses. Managed end-to-end process from interviews to final manuscript.
                </p>
              </div>

              <div className="border-l border-stone-400 pl-8">
                <h3 className="text-3xl font-literary text-stone-900 mb-4">Web3 Thought Leadership</h3>
                <p className="text-stone-600 mb-6 font-literary text-lg leading-relaxed">
                  Produced extensive high-level thought leadership content for founders in the blockchain space. 
                  Translated complex technological concepts into compelling narratives that drove investment 
                  and community growth.
                </p>
              </div>

              <div className="border-l border-stone-400 pl-8">
                <h3 className="text-3xl font-literary text-stone-900 mb-4">Keynote & Key Speech Design</h3>
                <p className="text-stone-600 mb-6 font-literary text-lg leading-relaxed">
                  Penned impactful speeches for C-suite executives delivered at major global conferences like 
                  Consensus and Token2049, ensuring message resonance and brand alignment.
                </p>
              </div>
            </div>

            <div className="space-y-8 bg-stone-100/50 p-8 md:p-12 border border-stone-200">
              <div className="space-y-4">
                <p className="text-stone-700 italic font-literary text-xl leading-relaxed">
                  "Victory captured my voice perfectly. The book she ghostwrote for me exceeded all expectations and has become a cornerstone of my thought leadership."
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-stone-500">— Dr. Patricia Lee</p>
              </div>
              <div className="w-full h-px bg-stone-300"></div>

              <div className="space-y-4">
                <p className="text-stone-700 italic font-literary text-xl leading-relaxed">
                  "Working with Victory transformed my speaking career. The speeches she writes are powerful, engaging, and always delivered on time."
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-stone-500">— Marcus Williams</p>
              </div>
              <div className="w-full h-px bg-stone-300"></div>

              <div className="space-y-4">
                <p className="text-stone-700 italic font-literary text-xl leading-relaxed">
                  "Victory's ability to understand complex technical concepts and translate them into accessible content is remarkable."
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-stone-500">— Jennifer Park</p>
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
                