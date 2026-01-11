import { DockApp } from "@/components/Dock";
import Link from "next/link";
import SparklesText from "@/components/SparklesText";

export default function CommercialModelPage() {
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
          Commercial Model
        </SparklesText>
        <p className="text-lg text-gray-600 max-w-2xl text-center">
          Bringing brands to life through professional modeling and brand representation
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
              Victory Abu's modeling career began with opportunities to represent brands that aligned with her values 
              and aesthetic. Her natural presence and professionalism quickly made her a sought-after commercial model 
              for campaigns across fashion, beauty, and lifestyle sectors.
            </p>
            <p>
              With experience in both photography and video campaigns, Victory brings versatility and reliability to 
              every project. She understands the importance of brand representation and works collaboratively with 
              creative teams to bring campaign visions to life.
            </p>
            <p>
              Her modeling work extends beyond traditional commercial shoots—she's featured in social media campaigns, 
              product launches, and brand storytelling content. Victory's authentic approach resonates with modern 
              audiences, making her campaigns both visually compelling and genuinely engaging.
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
              <div className="text-5xl font-bold text-pink-600 mb-4">30+</div>
              <p className="text-gray-700 text-lg">Brand Campaigns</p>
            </div>
            <div className="p-8 bg-purple-50 rounded-lg">
              <div className="text-5xl font-bold text-purple-600 mb-4">15+</div>
              <p className="text-gray-700 text-lg">Fashion Brands Represented</p>
            </div>
            <div className="p-8 bg-blue-50 rounded-lg">
              <div className="text-5xl font-bold text-blue-600 mb-4">50+</div>
              <p className="text-gray-700 text-lg">Professional Shoots</p>
            </div>
            <div className="p-8 bg-emerald-50 rounded-lg">
              <div className="text-5xl font-bold text-emerald-600 mb-4">20+</div>
              <p className="text-gray-700 text-lg">Beauty & Lifestyle Campaigns</p>
            </div>
            <div className="p-8 bg-orange-50 rounded-lg">
              <div className="text-5xl font-bold text-orange-600 mb-4">100+</div>
              <p className="text-gray-700 text-lg">Published Images</p>
            </div>
            <div className="p-8 bg-indigo-50 rounded-lg">
              <div className="text-5xl font-bold text-indigo-600 mb-4">5+</div>
              <p className="text-gray-700 text-lg">Years in Industry</p>
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
              name="Isabella Rodriguez"
              description="Victory's professionalism and natural camera presence made our campaign shoot effortless. She perfectly captured the essence of our brand."
              className="lg:col-span-2"
              background={
                <div className="absolute inset-0 bg-pink-50 dark:bg-pink-950/20" />
              }
            />
            <BentoCard
              name="David Park"
              description="Working with Victory is always a pleasure. She takes direction well and brings her own creative energy to every shoot. Highly professional."
              className="lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-purple-50 dark:bg-purple-950/20" />
              }
            />
            <BentoCard
              name="Sophia Laurent"
              description="Victory represented our beauty line beautifully. Her engagement with the campaign content on social media exceeded our expectations."
              className="lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950/20" />
              }
            />
            <BentoCard
              name="Marcus Thompson"
              description="Victory brings authenticity to every campaign. She's not just a model—she's a true brand ambassador who genuinely connects with our audience."
              className="lg:col-span-2"
              background={
                <div className="absolute inset-0 bg-orange-50 dark:bg-orange-950/20" />
              }
            />
                <div className="w-12 h-12 bg-emerald-200 rounded-full"></div>
                <div>
                  <p className="font-bold text-gray-900">Marcus Johnson</p>
                  <p className="text-gray-600 text-sm">Marketing Director</p>
                </div>
              </div>
            </div>
          </div>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fashion Brand Campaigns</h3>
              <p className="text-gray-700 mb-4">
                Featured in 15+ fashion brand campaigns including lookbook shoots, social media content, and e-commerce 
                photography. Campaigns reached millions of impressions across digital platforms.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm">Fashion Modeling</span>
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm">Lookbooks</span>
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm">E-commerce</span>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Beauty & Lifestyle Content</h3>
              <p className="text-gray-700 mb-4">
                Collaborated with 20+ beauty and lifestyle brands on product launches, tutorial content, and brand 
                storytelling campaigns. Content consistently drove high engagement and product interest.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Beauty Campaigns</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Product Photography</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Lifestyle Content</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Video & Motion Content</h3>
              <p className="text-gray-700 mb-4">
                Performed in video campaigns for brand launches, social media reels, and promotional content. 
                Comfortable with both scripted and improvised video content creation.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Video Campaigns</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Social Reels</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Brand Content</span>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Ambassador Partnerships</h3>
              <p className="text-gray-700 mb-4">
                Served as brand ambassador for multiple companies, representing brands at events, creating ongoing 
                content, and engaging with brand communities to drive awareness and loyalty.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Brand Ambassador</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Event Representation</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">Content Creation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Together
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Interested in booking for your next campaign or collaboration?
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
