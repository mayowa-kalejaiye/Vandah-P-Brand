import { DockApp } from "@/components/Dock";
import Link from "next/link";
import SparklesText from "@/components/SparklesText";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";

export default function PublicSpeakerPage() {
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
          colors={{ first: '#8b5cf6', second: '#a78bfa' }}
          sparkleCount={15}
        >
          Public Speaker
        </SparklesText>
        <p className="text-lg text-gray-600 max-w-2xl text-center">
          Delivering impactful presentations that inspire, educate, and motivate audiences
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
              Victory Abu discovered her passion for public speaking through a desire to share knowledge and inspire 
              others. What began with small meetups and panel discussions has evolved into keynote presentations at 
              major conferences and corporate events.
            </p>
            <p>
              Her speaking style combines authenticity with expertise, delivering content that's both informative and 
              engaging. Victory speaks on topics ranging from entrepreneurship and Web3 to personal branding and 
              community building, always tailoring her message to resonate with specific audiences.
            </p>
            <p>
              With experience addressing audiences from 50 to 5,000+ attendees, Victory brings energy and confidence 
              to every stage. Her presentations don't just inform—they inspire action, spark conversations, and leave 
              lasting impressions on audiences worldwide.
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
            <div className="p-8 bg-purple-50 rounded-lg">
              <div className="text-5xl font-bold text-purple-600 mb-4">75+</div>
              <p className="text-gray-700 text-lg">Speaking Engagements</p>
            </div>
            <div className="p-8 bg-blue-50 rounded-lg">
              <div className="text-5xl font-bold text-blue-600 mb-4">25+</div>
              <p className="text-gray-700 text-lg">Keynote Presentations</p>
            </div>
            <div className="p-8 bg-emerald-50 rounded-lg">
              <div className="text-5xl font-bold text-emerald-600 mb-4">15K+</div>
              <p className="text-gray-700 text-lg">Total Audience Members</p>
            </div>
            <div className="p-8 bg-orange-50 rounded-lg">
              <div className="text-5xl font-bold text-orange-600 mb-4">10+</div>
              <p className="text-gray-700 text-lg">Countries Spoken In</p>
            </div>
            <div className="p-8 bg-pink-50 rounded-lg">
              <div className="text-5xl font-bold text-pink-600 mb-4">30+</div>
              <p className="text-gray-700 text-lg">Panel Discussions</p>
            </div>
            <div className="p-8 bg-indigo-50 rounded-lg">
              <div className="text-5xl font-bold text-indigo-600 mb-4">95%</div>
              <p className="text-gray-700 text-lg">Audience Satisfaction Rating</p>
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
              name="Rebecca Martinez"
              description="Victory's keynote was the highlight of our conference. Her insights on Web3 and entrepreneurship were both practical and inspiring. Attendees are still talking about it!"
              className="lg:col-span-2"
              background={
                <div className="absolute inset-0 bg-purple-50 dark:bg-purple-950/20" />
              }
            />
            <BentoCard
              name="James Wilson"
              description="We've had many speakers, but Victory's energy and authenticity stood out. She connected with our audience in a way that few speakers can."
              className="lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950/20" />
              }
            />
            <BentoCard
              name="Angela Thompson"
              description="Victory's presentation to our team was transformative. She delivered actionable insights that we immediately implemented. Highly recommend booking her."
              className="lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-emerald-50 dark:bg-emerald-950/20" />
              }
            />
            <BentoCard
              name="Carlos Rivera"
              description="As a panel moderator, Victory was exceptional. She facilitated thoughtful discussion and kept the conversation engaging for the entire session."
              className="lg:col-span-2"
              background={
                <div className="absolute inset-0 bg-orange-50 dark:bg-orange-950/20" />
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
            <div className="border-l-4 border-purple-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Keynote Presentations</h3>
              <p className="text-gray-700 mb-4">
                Delivered 25+ keynote presentations at major conferences and corporate events on topics including 
                entrepreneurship, Web3 strategy, personal branding, and community building. Audiences range from 
                500 to 5,000+ attendees.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Keynote Speaking</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Conferences</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Corporate Events</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Panel Discussions & Moderation</h3>
              <p className="text-gray-700 mb-4">
                Participated in and moderated 30+ panel discussions at industry events, facilitating conversations 
                with thought leaders and experts across technology, business, and innovation sectors.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Panel Discussions</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Moderation</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Industry Events</span>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Workshops & Training Sessions</h3>
              <p className="text-gray-700 mb-4">
                Conducted interactive workshops on Web3 strategy, community building, and entrepreneurship for 
                organizations and educational institutions. Sessions emphasize practical application and skill development.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Workshops</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Training</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Skill Development</span>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual & Hybrid Events</h3>
              <p className="text-gray-700 mb-4">
                Adapted speaking expertise to virtual and hybrid formats, delivering engaging presentations to global 
                audiences through webinars, virtual summits, and online conferences with high attendance and engagement.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">Virtual Speaking</span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">Webinars</span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book a Speaking Engagement
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Looking for an impactful speaker for your next event?
          </p>
          <Link 
            href="/#contact" 
            className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
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
