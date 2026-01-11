import { DockApp } from "@/components/Dock";
import Link from "next/link";
import SparklesText from "@/components/SparklesText";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";

export default function CommunityBuilderPage() {
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
          colors={{ first: '#10b981', second: '#34d399' }}
          sparkleCount={15}
        >
          Community Builder
        </SparklesText>
        <p className="text-lg text-gray-600 max-w-2xl text-center">
          Creating thriving communities that connect, engage, and grow together
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
              Victory Abu's expertise in community building stems from a fundamental belief that meaningful connections 
              drive success. She has built, scaled, and managed communities across various platforms and industries, 
              creating spaces where members genuinely support and uplift each other.
            </p>
            <p>
              Her approach to community building goes beyond numbers—focusing on engagement quality, member value, and 
              sustainable growth. Victory understands that great communities require intentional design, consistent nurturing, 
              and authentic leadership.
            </p>
            <p>
              From Discord servers to in-person meetups, from brand communities to Web3 DAOs, Victory has created 
              frameworks and strategies that transform groups of individuals into cohesive, active communities. Her 
              work has helped projects achieve higher retention, stronger engagement, and genuine member loyalty.
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
            <div className="p-8 bg-emerald-50 rounded-lg">
              <div className="text-5xl font-bold text-emerald-600 mb-4">50K+</div>
              <p className="text-gray-700 text-lg">Community Members Managed</p>
            </div>
            <div className="p-8 bg-blue-50 rounded-lg">
              <div className="text-5xl font-bold text-blue-600 mb-4">20+</div>
              <p className="text-gray-700 text-lg">Communities Built from Scratch</p>
            </div>
            <div className="p-8 bg-purple-50 rounded-lg">
              <div className="text-5xl font-bold text-purple-600 mb-4">85%</div>
              <p className="text-gray-700 text-lg">Average Member Retention Rate</p>
            </div>
            <div className="p-8 bg-orange-50 rounded-lg">
              <div className="text-5xl font-bold text-orange-600 mb-4">100+</div>
              <p className="text-gray-700 text-lg">Community Events Organized</p>
            </div>
            <div className="p-8 bg-pink-50 rounded-lg">
              <div className="text-5xl font-bold text-pink-600 mb-4">15+</div>
              <p className="text-gray-700 text-lg">Brand Communities Managed</p>
            </div>
            <div className="p-8 bg-indigo-50 rounded-lg">
              <div className="text-5xl font-bold text-indigo-600 mb-4">90%</div>
              <p className="text-gray-700 text-lg">Engagement Rate Achieved</p>
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
              name="Daniel Kim"
              description="Victory transformed our Discord server from a quiet space into a vibrant community. Her strategies for engagement and member activation are brilliant."
              className="lg:col-span-2"
              background={
                <div className="absolute inset-0 bg-emerald-50 dark:bg-emerald-950/20" />
              }
            />
            <BentoCard
              name="Sarah Johnson"
              description="Our community growth under Victory's guidance exceeded all projections. She knows how to create genuine connections that last."
              className="lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950/20" />
              }
            />
            <BentoCard
              name="Michael Torres"
              description="Victory's community management turned our users into brand advocates. The engagement metrics speak for themselves—she's a master at what she does."
              className="lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-purple-50 dark:bg-purple-950/20" />
              }
            />
            <BentoCard
              name="Lisa Chang"
              description="The community events Victory organized brought our members together in meaningful ways. She understands community dynamics at a deep level."
              className="lg:col-span-2"
              background={
                <div className="absolute inset-0 bg-pink-50 dark:bg-pink-950/20" />
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
            <div className="border-l-4 border-emerald-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web3 Community Growth Strategies</h3>
              <p className="text-gray-700 mb-4">
                Developed and implemented community growth strategies for 10+ Web3 projects, growing Discord communities 
                from launch to 10K+ active members with sustained 80%+ engagement rates.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Discord Management</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Growth Strategy</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Engagement</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Community Management</h3>
              <p className="text-gray-700 mb-4">
                Managed brand communities for 15+ companies across social platforms, creating engagement frameworks 
                that increased member interactions by 200% and improved customer loyalty metrics.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Community Management</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Brand Loyalty</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Social Platforms</span>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Event Production & Activation</h3>
              <p className="text-gray-700 mb-4">
                Organized 100+ community events including virtual meetups, AMAs, workshops, and in-person gatherings 
                that strengthened member bonds and created memorable experiences.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Event Planning</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Member Activation</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Experience Design</span>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Governance & Moderation</h3>
              <p className="text-gray-700 mb-4">
                Established governance frameworks and moderation systems for communities ranging from 1K to 50K members, 
                ensuring healthy discussions and positive community culture.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">Governance</span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">Moderation</span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">Culture Building</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Community?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's create an engaged, thriving community for your project
          </p>
          <Link 
            href="/#contact" 
            className="inline-block px-8 py-4 bg-white text-emerald-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
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
