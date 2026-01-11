import { DockApp } from "@/components/Dock";
import Link from "next/link";
import SparklesText from "@/components/SparklesText";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";

export default function ProjectConsultantPage() {
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
          Project Consultant
        </SparklesText>
        <p className="text-lg text-gray-600 max-w-2xl text-center">
          Delivering strategic insights and execution excellence for complex projects
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
              Victory Abu's consulting practice emerged from years of successfully navigating complex projects across 
              various industries. Her analytical approach and strategic mindset have helped numerous organizations 
              overcome challenges and achieve their goals.
            </p>
            <p>
              With expertise spanning project management, business strategy, and stakeholder engagement, Victory brings 
              a holistic perspective to every consulting engagement. She excels at identifying root causes, developing 
              actionable solutions, and ensuring successful implementation.
            </p>
            <p>
              Her consulting philosophy centers on collaboration and knowledge transfer, ensuring clients not only 
              achieve immediate objectives but also build internal capabilities for long-term success. From startups 
              to established enterprises, Victory's insights drive meaningful transformation.
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
              <div className="text-5xl font-bold text-emerald-600 mb-4">40+</div>
              <p className="text-gray-700 text-lg">Projects Consulted</p>
            </div>
            <div className="p-8 bg-blue-50 rounded-lg">
              <div className="text-5xl font-bold text-blue-600 mb-4">95%</div>
              <p className="text-gray-700 text-lg">On-Time Delivery Rate</p>
            </div>
            <div className="p-8 bg-purple-50 rounded-lg">
              <div className="text-5xl font-bold text-purple-600 mb-4">$10M+</div>
              <p className="text-gray-700 text-lg">Value Created for Clients</p>
            </div>
            <div className="p-8 bg-orange-50 rounded-lg">
              <div className="text-5xl font-bold text-orange-600 mb-4">20+</div>
              <p className="text-gray-700 text-lg">Industries Served</p>
            </div>
            <div className="p-8 bg-pink-50 rounded-lg">
              <div className="text-5xl font-bold text-pink-600 mb-4">100%</div>
              <p className="text-gray-700 text-lg">Client Satisfaction</p>
            </div>
            <div className="p-8 bg-indigo-50 rounded-lg">
              <div className="text-5xl font-bold text-indigo-600 mb-4">5+</div>
              <p className="text-gray-700 text-lg">Years Experience</p>
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
              name="James Miller"
              description="Victory's strategic insights completely transformed our project approach. She identified issues we hadn't seen and provided actionable solutions that delivered results."
              className="lg:col-span-2"
              background={
                <div className="absolute inset-0 bg-emerald-50 dark:bg-emerald-950/20" />
              }
            />
            <BentoCard
              name="Lisa Anderson"
              description="Her project management expertise saved our initiative from disaster. Victory brought structure, clarity, and momentum when we needed it most."
              className="lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950/20" />
              }
            />
            <BentoCard
              name="Robert Chen"
              description="Working with Victory was a game-changer. Her ability to align stakeholders and drive execution is unmatched. Highly recommend her consulting services."
              className="lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-purple-50 dark:bg-purple-950/20" />
              }
            />
            <BentoCard
              name="Maria Santos"
              description="Victory doesn't just provide recommendations—she ensures successful implementation. Her hands-on approach made all the difference in our project outcome."
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Transformation Initiative</h3>
              <p className="text-gray-700 mb-4">
                Led digital transformation consulting for a mid-size enterprise, resulting in 40% efficiency improvement 
                and successful migration of legacy systems to modern cloud infrastructure within 6 months.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Digital Transformation</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Change Management</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Cloud Migration</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Launch Strategy</h3>
              <p className="text-gray-700 mb-4">
                Developed go-to-market strategy for 5 product launches, coordinating cross-functional teams and 
                ensuring on-time delivery. All products exceeded initial adoption targets by 30%.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Product Strategy</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Go-to-Market</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Cross-functional Leadership</span>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Process Optimization</h3>
              <p className="text-gray-700 mb-4">
                Conducted comprehensive process audits and implemented optimization frameworks for 10+ organizations, 
                achieving average cost reduction of 25% and productivity increase of 35%.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Process Improvement</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Cost Optimization</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Efficiency Gains</span>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Planning & Execution</h3>
              <p className="text-gray-700 mb-4">
                Facilitated strategic planning sessions for C-suite executives, translating vision into actionable 
                roadmaps with clear KPIs and accountability structures that drove measurable business outcomes.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">Strategic Planning</span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">Executive Advisory</span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">KPI Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Expert Guidance?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how strategic consulting can transform your project
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
