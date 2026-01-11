import { DockApp } from "@/components/Dock";
import Link from "next/link";
import SparklesText from "@/components/SparklesText";
import ThreeDCard from "@/components/ThreeDCard";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";

export default function Web3StrategistPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 py-24 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(255, 255, 255, 1) 100%),
              url('/bg.jpeg')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Top Section - Logo/Branding and Bio */}
        <div className="absolute top-8 left-0 right-0 px-8 flex items-center justify-between z-10">
          <div className="overflow-hidden">
            <p className="text-white/70 text-sm">© Victory Abu</p>
          </div>
          <div className="overflow-hidden">
            <p className="text-white/90 text-sm leading-relaxed max-w-2xl text-right">
              Web3 enthusiast and Crypto strategist, dedicated to navigating the decentralized future through innovative blockchain solutions and financial technology.
            </p>
          </div>
        </div>
        
        <SparklesText
          as="h1"
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 text-center relative z-10"
          colors={{ first: '#3b82f6', second: '#60a5fa' }}
          sparkleCount={15}
        >
          Web3 Strategist
        </SparklesText>
        <p className="text-lg text-white/90 max-w-2xl text-center relative z-10">
          Crafting decentralized solutions and blockchain strategies for the future
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
              Victory Abu's journey into Web3 began with a fascination for decentralized technologies and their 
              potential to reshape industries. She quickly recognized that blockchain wasn't just about cryptocurrency—it 
              was about creating trustless, transparent systems that could empower individuals and organizations.
            </p>
            <p>
              Through years of deep research and hands-on experience, Victory developed a comprehensive understanding 
              of blockchain ecosystems, smart contracts, tokenomics, and decentralized governance. She has worked with 
              startups and established companies to implement Web3 strategies that drive real business value.
            </p>
            <p>
              Her approach combines technical knowledge with strategic thinking, helping clients navigate the complex 
              Web3 landscape while staying focused on practical outcomes. From NFT launches to DAO governance frameworks, 
              Victory's expertise spans the full spectrum of decentralized technologies.
            </p>
          </div>
          
          <div className="mt-16 flex justify-center">
            <ThreeDCard
              className="w-full max-w-2xl"
              backgroundImage="/web3.png"
              maxRotation={15}
              glowOpacity={0.3}
            >
              <img
                src="/web3.png"
                alt="Web3 Strategy"
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
            <div className="p-8 bg-blue-50 rounded-lg">
              <div className="text-5xl font-bold text-blue-600 mb-4">25+</div>
              <p className="text-gray-700 text-lg">Web3 Projects Consulted</p>
            </div>
            <div className="p-8 bg-purple-50 rounded-lg">
              <div className="text-5xl font-bold text-purple-600 mb-4">$5M+</div>
              <p className="text-gray-700 text-lg">Total Value Locked Facilitated</p>
            </div>
            <div className="p-8 bg-emerald-50 rounded-lg">
              <div className="text-5xl font-bold text-emerald-600 mb-4">10+</div>
              <p className="text-gray-700 text-lg">NFT Collections Launched</p>
            </div>
            <div className="p-8 bg-orange-50 rounded-lg">
              <div className="text-5xl font-bold text-orange-600 mb-4">5</div>
              <p className="text-gray-700 text-lg">DAOs Established</p>
            </div>
            <div className="p-8 bg-pink-50 rounded-lg">
              <div className="text-5xl font-bold text-pink-600 mb-4">50K+</div>
              <p className="text-gray-700 text-lg">Community Members Engaged</p>
            </div>
            <div className="p-8 bg-indigo-50 rounded-lg">
              <div className="text-5xl font-bold text-indigo-600 mb-4">100%</div>
              <p className="text-gray-700 text-lg">Project Success Rate</p>
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
              name="Alex Thompson"
              description="Victory's Web3 strategy helped us successfully launch our NFT project and build a thriving community. Her insights into tokenomics and community engagement were invaluable."
              className="lg:col-span-2"
              background={
                <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950/20" />
              }
            />
            <BentoCard
              name="Priya Patel"
              description="Working with Victory transformed our understanding of Web3. She made complex blockchain concepts accessible and helped us develop a winning strategy."
              className="lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-purple-50 dark:bg-purple-950/20" />
              }
            />
            <BentoCard
              name="Marcus Johnson"
              description="Victory's strategic approach to our DAO governance framework ensured smooth operations and engaged community participation from day one."
              className="lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-emerald-50 dark:bg-emerald-950/20" />
              }
            />
            <BentoCard
              name="Sarah Martinez"
              description="Her expertise in DeFi protocols and smart contract security gave us confidence to launch our platform successfully. Victory is a true Web3 expert."
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
            <div className="border-l-4 border-blue-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">NFT Collection Strategy & Launch</h3>
              <p className="text-gray-700 mb-4">
                Developed comprehensive go-to-market strategies for 10+ NFT collections, including tokenomics design, 
                community building, and launch execution. Projects collectively generated over $2M in initial sales.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">NFT Strategy</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Tokenomics</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Launch Planning</span>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">DAO Governance Implementation</h3>
              <p className="text-gray-700 mb-4">
                Architected governance frameworks for 5 DAOs, implementing voting mechanisms, proposal systems, and 
                treasury management protocols that ensure democratic and transparent decision-making.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">DAO Design</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Governance</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Smart Contracts</span>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">DeFi Protocol Consulting</h3>
              <p className="text-gray-700 mb-4">
                Advised multiple DeFi protocols on product strategy, risk management, and market positioning. 
                Helped projects achieve $5M+ in total value locked through strategic recommendations.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">DeFi Strategy</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Risk Management</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">TVL Growth</span>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web3 Education & Workshops</h3>
              <p className="text-gray-700 mb-4">
                Conducted educational workshops and training sessions for companies transitioning into Web3, 
                demystifying blockchain technology and providing practical implementation roadmaps.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">Education</span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">Workshops</span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">Training</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Go Decentralized?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's build your Web3 strategy together
          </p>
          <Link 
            href="/#contact" 
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
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
