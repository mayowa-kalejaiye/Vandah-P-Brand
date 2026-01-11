import { DockApp } from "@/components/Dock";
import Link from "next/link";
import SparklesText from "@/components/SparklesText";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";

export default function PublicFigurePage() {
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
          colors={{ first: '#ec4899', second: '#f472b6' }}
          sparkleCount={15}
        >
          Public Figure
        </SparklesText>
        <p className="text-lg text-gray-600 max-w-2xl text-center">
          Inspiring audiences and building meaningful connections across platforms
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
              Victory Abu's emergence as a public figure stems from her authentic voice and commitment to empowering 
              others. What began as sharing insights on social media has evolved into a influential platform where 
              she connects with thousands of followers daily.
            </p>
            <p>
              Her content spans personal development, entrepreneurship, technology, and lifestyle, always delivered 
              with genuineness and relatability. Victory has built a community that values transparency, growth, 
              and meaningful conversation.
            </p>
            <p>
              As a public figure, Victory leverages her platform to advocate for important causes, mentor emerging 
              entrepreneurs, and showcase the possibilities available to young professionals in tech and business. 
              Her influence extends beyond social media into real-world impact.
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
            <div className="p-8 bg-pink-50 rounded-lg">
              <div className="text-5xl font-bold text-pink-600 mb-4">100K+</div>
              <p className="text-gray-700 text-lg">Social Media Followers</p>
            </div>
            <div className="p-8 bg-purple-50 rounded-lg">
              <div className="text-5xl font-bold text-purple-600 mb-4">5M+</div>
              <p className="text-gray-700 text-lg">Total Content Impressions</p>
            </div>
            <div className="p-8 bg-blue-50 rounded-lg">
              <div className="text-5xl font-bold text-blue-600 mb-4">15+</div>
              <p className="text-gray-700 text-lg">Media Features</p>
            </div>
            <div className="p-8 bg-emerald-50 rounded-lg">
              <div className="text-5xl font-bold text-emerald-600 mb-4">50+</div>
              <p className="text-gray-700 text-lg">Brand Collaborations</p>
            </div>
            <div className="p-8 bg-orange-50 rounded-lg">
              <div className="text-5xl font-bold text-orange-600 mb-4">20+</div>
              <p className="text-gray-700 text-lg">Speaking Engagements</p>
            </div>
            <div className="p-8 bg-indigo-50 rounded-lg">
              <div className="text-5xl font-bold text-indigo-600 mb-4">92%</div>
              <p className="text-gray-700 text-lg">Audience Engagement Rate</p>
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
              name="Amanda White"
              description="Victory's authentic approach to content creation is refreshing. She's built a community that genuinely supports and uplifts each other."
              className="lg:col-span-2"
              background={
                <div className="absolute inset-0 bg-pink-50 dark:bg-pink-950/20" />
              }
            />
            <BentoCard
              name="Kevin Davis"
              description="Working with Victory on our brand campaign exceeded expectations. Her influence and engagement with her audience is incredibly valuable."
              className="lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-purple-50 dark:bg-purple-950/20" />
              }
            />
            <BentoCard
              name="Rachel Green"
              description="Victory's content has been a source of inspiration for my entrepreneurial journey. Her insights are practical and motivating."
              className="lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950/20" />
              }
            />
            <BentoCard
              name="Thomas Reed"
              description="As a media outlet, Victory is always our go-to for insightful commentary on tech and entrepreneurship. She brings real expertise to every conversation."
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
            <div className="border-l-4 border-pink-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Growth & Engagement</h3>
              <p className="text-gray-700 mb-4">
                Built a following of 100K+ across platforms through consistent, value-driven content. Achieved 
                industry-leading engagement rates through authentic community interaction and strategic content planning.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm">Social Media</span>
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm">Content Strategy</span>
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm">Community Building</span>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Partnerships & Collaborations</h3>
              <p className="text-gray-700 mb-4">
                Partnered with 50+ brands for sponsored content, product launches, and marketing campaigns. 
                Maintained authenticity while delivering measurable results for brand partners.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Brand Partnerships</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Influencer Marketing</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Campaign Management</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Media Appearances & Press Coverage</h3>
              <p className="text-gray-700 mb-4">
                Featured in 15+ media publications and podcasts discussing entrepreneurship, technology, and personal 
                development. Regular contributor to industry conversations and thought leadership pieces.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Media Relations</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Thought Leadership</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Public Speaking</span>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Impact & Mentorship</h3>
              <p className="text-gray-700 mb-4">
                Launched mentorship programs and community initiatives that have helped hundreds of aspiring 
                entrepreneurs and content creators build their own platforms and businesses.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Mentorship</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Community Programs</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Collaborate
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Interested in partnerships, collaborations, or speaking engagements?
          </p>
          <Link 
            href="/#contact" 
            className="inline-block px-8 py-4 bg-white text-pink-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
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
