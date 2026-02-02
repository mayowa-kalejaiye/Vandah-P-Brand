import { DockApp } from "@/components/Dock";
import Link from "next/link";
import SparklesText from "@/components/SparklesText";
import ThreeDCard from "@/components/ThreeDCard";
import ShimmerButton from "@/components/ShimmerButton";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import { SVGProps, FC } from "react";

export default function FounderCEOPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slideUp 1s linear forwards;
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 py-24 relative overflow-hidden">
        {/* Background Image with Dark Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(255, 255, 255, 1) 100%),
              url('/campus.png')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 1,
          }}
        />
        
        {/* Top Section - Logo/Branding and Bio */}
        <div className="absolute top-8 left-0 right-0 px-8 flex items-center justify-between z-10">
          <div className="overflow-hidden">
            <p className="text-white/70 text-sm animate-slide-up">© Victory Abu</p>
          </div>
          <div className="overflow-hidden">
            <p className="text-white/90 text-sm leading-relaxed max-w-2xl text-right animate-slide-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
              Web3 enthusiast and Crypto strategist, dedicated to navigating the decentralized future through innovative blockchain solutions and financial technology.
            </p>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div className="animate-slide-up">
            <SparklesText
              as="h1"
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 text-center relative z-10"
              colors={{ first: '#fb923c', second: '#f97316' }}
              sparkleCount={15}
            >
              Founder & CEO
            </SparklesText>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex items-center justify-center gap-4 mb-4">
            <p className="text-2xl md:text-3xl text-blue-400 font-medium relative z-10 animate-slide-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
              @CampusBestie
            </p>
            <div className="relative z-10 animate-slide-up" style={{ animationDelay: "0.15s", opacity: 0 }}>
              <ShimmerButton href="https://campusbestie.com">
                Visit Site →
              </ShimmerButton>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <p className="text-lg text-white/90 max-w-2xl text-center relative z-10 animate-slide-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Leading the vision and driving innovation in campus connectivity
          </p>
        </div>
      </section>

      {/* Background Story Section */}
      <section className="min-h-screen px-8 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
            Background Story
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Victory Abu founded CampusBestie with a vision to revolutionize how students connect, collaborate, 
              and thrive in campus environments. What started as a simple idea to bridge communication gaps has 
              evolved into a comprehensive platform serving thousands of students.
            </p>
            <p>
              With a deep understanding of the challenges students face in navigating campus life, Victory built 
              CampusBestie from the ground up, combining technical innovation with genuine empathy for student needs. 
              Her leadership has transformed the platform into an essential tool for campus communities.
            </p>
            <p>
              Under her guidance, CampusBestie has expanded from a single campus to multiple institutions, creating 
              a network effect that benefits students across different universities. Her strategic vision continues 
              to drive the company's growth and impact.
            </p>
          </div>
          
          <div className="mt-16 flex justify-center">
            <ThreeDCard
              className="w-full max-w-2xl"
              backgroundImage="/campus.png"
              maxRotation={15}
              glowOpacity={0.3}
            >
              <img
                src="/campus3.png"
                alt="CampusBestie Campus"
                className="w-full h-auto rounded-lg"
              />
            </ThreeDCard>
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
            <div className="p-8 bg-orange-50 rounded-lg">
              <div className="text-5xl font-bold text-orange-600 mb-4">10K+</div>
              <p className="text-gray-700 text-lg">Active Students on Platform</p>
            </div>
            <div className="p-8 bg-blue-50 rounded-lg">
              <div className="text-5xl font-bold text-blue-600 mb-4">15+</div>
              <p className="text-gray-700 text-lg">Partner Universities</p>
            </div>
            <div className="p-8 bg-emerald-50 rounded-lg">
              <div className="text-5xl font-bold text-emerald-600 mb-4">98%</div>
              <p className="text-gray-700 text-lg">User Satisfaction Rate</p>
            </div>
            <div className="p-8 bg-purple-50 rounded-lg">
              <div className="text-5xl font-bold text-purple-600 mb-4">500K+</div>
              <p className="text-gray-700 text-lg">Connections Facilitated</p>
            </div>
            <div className="p-8 bg-pink-50 rounded-lg">
              <div className="text-5xl font-bold text-pink-600 mb-4">50+</div>
              <p className="text-gray-700 text-lg">Campus Events Organized</p>
            </div>
            <div className="p-8 bg-indigo-50 rounded-lg">
              <div className="text-5xl font-bold text-indigo-600 mb-4">3</div>
              <p className="text-gray-700 text-lg">Years of Growth</p>
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
              name="Sarah Johnson"
              description="Victory's vision for CampusBestie has completely transformed our campus experience. The platform brings students together in ways we never thought possible."
              className="lg:col-span-2"
              background={
                <div className="absolute inset-0 bg-orange-50 dark:bg-orange-950/20" />
              }
            />
            <BentoCard
              name="Michael Chen"
              description="Working with Victory has been incredible. Her leadership style is both inspiring and practical, always focused on delivering real value to students."
              className="lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950/20" />
              }
            />
            <BentoCard
              name="David Williams"
              description="As an investor, I've seen many student-focused startups, but Victory's approach to building CampusBestie stands out for its genuine understanding of the market."
              className="lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-emerald-50 dark:bg-emerald-950/20" />
              }
            />
            <BentoCard
              name="Emily Rodriguez"
              description="The impact CampusBestie has had on student engagement is remarkable. Victory's dedication to improving student life is evident in every feature."
              className="lg:col-span-2"
              background={
                <div className="absolute inset-0 bg-purple-50 dark:bg-purple-950/20" />
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
            <div className="border-l-4 border-orange-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform Launch & Growth</h3>
              <p className="text-gray-700 mb-4">
                Successfully launched CampusBestie platform and grew user base from 0 to 10,000+ active students 
                across multiple universities within the first 18 months.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">Platform Development</span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">User Acquisition</span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">Growth Strategy</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">University Partnerships</h3>
              <p className="text-gray-700 mb-4">
                Established strategic partnerships with 15+ universities, creating a network that serves thousands 
                of students and integrates with existing campus systems.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Partnership Development</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Stakeholder Management</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Integration</span>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Funding & Investment</h3>
              <p className="text-gray-700 mb-4">
                Secured seed funding and angel investment to fuel company growth, demonstrating strong business 
                acumen and the ability to articulate vision to investors.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Fundraising</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Investor Relations</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Business Strategy</span>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Building & Leadership</h3>
              <p className="text-gray-700 mb-4">
                Built and led a diverse team of developers, designers, and community managers, fostering a culture 
                of innovation and student-first thinking.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Team Leadership</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Culture Building</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Talent Acquisition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can work together to drive innovation
          </p>
          <Link 
            href="/#contact" 
            className="inline-block px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
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
