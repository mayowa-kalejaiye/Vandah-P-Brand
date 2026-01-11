import { DockApp } from "@/components/Dock";
import Link from "next/link";
import SparklesText from "@/components/SparklesText";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";

export default function GhostWriterPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 py-24 relative">
        {/* Top Section - Logo/Branding and Bio */}
        <div className="absolute top-8 left-0 right-0 px-8 flex items-center justify-between z-10">
          <div className="overflow-hidden">
            <p className="text-gray-600 text-sm">© Victory Abu</p>
          </div>
          <div className="overflow-hidden">
            <p className="text-gray-700 text-sm leading-relaxed max-w-2xl text-right">
              Web3 enthusiast and Crypto strategist, dedicated to navigating the decentralized future through innovative blockchain solutions and financial technology.
            </p>
          </div>
        </div>
        
        <SparklesText
          as="h1"
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-6 text-center"
          colors={{ first: '#6366f1', second: '#818cf8' }}
          sparkleCount={15}
        >
          Ghost Writer
        </SparklesText>
        <p className="text-lg text-gray-600 max-w-2xl text-center">
          Crafting compelling narratives and powerful content that resonates
        </p>
      </section>

      {/* Background Story Section */}
      <section className="min-h-screen px-8 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
            Background Story
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Victory Abu's ghostwriting career emerged from a passion for storytelling and a talent for capturing 
              diverse voices. She has helped executives, entrepreneurs, and thought leaders articulate their ideas 
              through books, articles, speeches, and digital content.
            </p>
            <p>
              With a deep understanding of narrative structure, audience psychology, and persuasive communication, 
              Victory transforms ideas into compelling content that drives engagement and action. Her versatility 
              allows her to write across multiple industries and formats.
            </p>
            <p>
              Her ghostwriting philosophy emphasizes collaboration and voice preservation—ensuring clients' 
              authentic perspectives shine through while benefiting from professional writing expertise. From 
              thought leadership articles to full-length manuscripts, Victory delivers exceptional work.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="min-h-screen px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
            Results & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-indigo-50 rounded-lg">
              <div className="text-5xl font-bold text-indigo-600 mb-4">100+</div>
              <p className="text-gray-700 text-lg">Articles & Blog Posts Written</p>
            </div>
            <div className="p-8 bg-purple-50 rounded-lg">
              <div className="text-5xl font-bold text-purple-600 mb-4">10+</div>
              <p className="text-gray-700 text-lg">Books Ghostwritten</p>
            </div>
            <div className="p-8 bg-blue-50 rounded-lg">
              <div className="text-5xl font-bold text-blue-600 mb-4">50+</div>
              <p className="text-gray-700 text-lg">Speeches Crafted</p>
            </div>
            <div className="p-8 bg-emerald-50 rounded-lg">
              <div className="text-5xl font-bold text-emerald-600 mb-4">30+</div>
              <p className="text-gray-700 text-lg">Executive Clients Served</p>
            </div>
            <div className="p-8 bg-orange-50 rounded-lg">
              <div className="text-5xl font-bold text-orange-600 mb-4">2M+</div>
              <p className="text-gray-700 text-lg">Words Published</p>
            </div>
            <div className="p-8 bg-pink-50 rounded-lg">
              <div className="text-5xl font-bold text-pink-600 mb-4">100%</div>
              <p className="text-gray-700 text-lg">Client Confidentiality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="min-h-screen px-8 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
            Testimonials
          </h2>
          <BentoGrid>
            <BentoCard
              name="Dr. Patricia Lee"
              description="Victory captured my voice perfectly. The book she ghostwrote for me exceeded all expectations and has become a cornerstone of my thought leadership."
              className="lg:col-span-2"
              background={
                <div className="absolute inset-0 bg-indigo-50 dark:bg-indigo-950/20" />
              }
            />
            <BentoCard
              name="Marcus Williams"
              description="Working with Victory transformed my speaking career. The speeches she writes are powerful, engaging, and always delivered on time."
              className="lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-purple-50 dark:bg-purple-950/20" />
              }
            />
            <BentoCard
              name="Jennifer Park"
              description="Victory's ability to understand complex technical concepts and translate them into accessible content is remarkable. She's an invaluable asset to our team."
              className="lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950/20" />
              }
            />
            <BentoCard
              name="Richard Foster"
              description="The thought leadership articles Victory ghostwrites have significantly elevated my personal brand. Her writing is consistently excellent."
              className="lg:col-span-2"
              background={
                <div className="absolute inset-0 bg-emerald-50 dark:bg-emerald-950/20" />
              }
            />
          </BentoGrid>
        </div>
      </section>

      {/* Proof of Work Section */}
      <section className="min-h-screen px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
            Proof of Work
          </h2>
          <div className="space-y-12">
            <div className="border-l-4 border-indigo-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Executive Book Projects</h3>
              <p className="text-gray-700 mb-4">
                Ghostwritten 10+ books for executives and entrepreneurs, including business memoirs, leadership 
                guides, and industry insights. Several titles became Amazon bestsellers in their categories.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm">Book Writing</span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm">Executive Memoir</span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm">Publishing</span>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thought Leadership Content</h3>
              <p className="text-gray-700 mb-4">
                Produced 100+ thought leadership articles for C-suite executives, published in major industry 
                publications and corporate blogs. Content consistently drives engagement and positions clients as experts.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Articles</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Thought Leadership</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Content Strategy</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Speech Writing for High-Profile Events</h3>
              <p className="text-gray-700 mb-4">
                Crafted 50+ keynote speeches and presentations for conferences, corporate events, and media appearances. 
                Speeches have been delivered to audiences ranging from 100 to 10,000+ attendees.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Speech Writing</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Keynotes</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Presentations</span>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web3 & Tech Content Specialization</h3>
              <p className="text-gray-700 mb-4">
                Developed specialized expertise in writing about blockchain, cryptocurrency, and emerging technologies. 
                Created whitepapers, explainer content, and marketing materials for Web3 projects.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Web3 Content</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Whitepapers</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Technical Writing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need a Writer?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's bring your ideas to life through powerful writing
          </p>
          <Link 
            href="/#contact" 
            className="inline-block px-8 py-4 bg-white text-indigo-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Dock Navigation */}
      <div className="fixed bottom-8 left-0 right-0 z-20">
        <DockApp />
      </div>
    </div>
  );
}
