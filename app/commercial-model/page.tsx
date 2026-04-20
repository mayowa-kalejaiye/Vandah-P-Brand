import { DockApp } from "@/components/Dock";
import Link from "next/link";
import ThreeDCard from "@/components/ThreeDCard";

export default function CommercialModelPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@300;400;700&display=swap');
        .font-luxury {
          font-family: 'Fraunces', serif;
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 py-24 relative overflow-hidden bg-white">
        {/* Top Section - Logo/Branding and Bio */}
        <div className="absolute top-8 left-0 right-0 px-8 flex items-center justify-between z-10">
          <div className="overflow-hidden">
            <p className="text-gray-900 text-sm tracking-widest uppercase font-light">© Victory Abu</p>
          </div>
          <div className="overflow-hidden">
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm text-right font-light italic">
              Bringing brands to life through professional presence, timeless elegance, and compelling visual storytelling. 
            </p>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-black mb-6 text-center font-luxury tracking-tighter uppercase leading-none">
          Commercial<br/>Model
        </h1>
        <div className="w-24 h-[1px] bg-black mb-8 mx-auto"></div>
        <p className="text-xl text-gray-500 max-w-2xl text-center font-light uppercase tracking-[0.2em]">
          Timeless Elegance & Representation
        </p>
      </section>

      {/* Background Story Section */}
      <section className="min-h-screen px-8 py-24 bg-zinc-50 border-t border-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-luxury text-black mb-12 uppercase tracking-wide">
            The Journey
          </h2>
          <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-light">
            <p>
              Victory's modeling career began with opportunities to represent brands that aligned with her core values 
              and aesthetic. Her natural presence on camera and innate professionalism quickly positioned her as a sought-after commercial model 
              for campaigns spanning fashion, beauty, and lifestyle sectors.
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
      <section className="min-h-screen px-8 py-24 bg-white border-t border-black/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-luxury text-black mb-16 text-center uppercase tracking-wide">
            Portfolio Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            <div className="flex flex-col items-center text-center border-b border-black pb-8">
              <div className="text-6xl font-light text-black mb-4 font-luxury">30+</div>
              <p className="text-gray-500 uppercase tracking-widest text-sm">Brand Campaigns</p>
            </div>
            <div className="flex flex-col items-center text-center border-b border-black pb-8">
              <div className="text-6xl font-light text-black mb-4 font-luxury">15+</div>
              <p className="text-gray-500 uppercase tracking-widest text-sm">Fashion Brands Represented</p>
            </div>
            <div className="flex flex-col items-center text-center border-b border-black pb-8">
              <div className="text-6xl font-light text-black mb-4 font-luxury">50+</div>
              <p className="text-gray-500 uppercase tracking-widest text-sm">Professional Shoots</p>
            </div>
            <div className="flex flex-col items-center text-center border-b border-black pb-8">
              <div className="text-6xl font-light text-black mb-4 font-luxury">20+</div>
              <p className="text-gray-500 uppercase tracking-widest text-sm">Beauty & Lifestyle Campaigns</p>
            </div>
            <div className="flex flex-col items-center text-center border-b border-black pb-8">
              <div className="text-6xl font-light text-black mb-4 font-luxury">100+</div>
              <p className="text-gray-500 uppercase tracking-widest text-sm">Published Images</p>
            </div>
            <div className="flex flex-col items-center text-center border-b border-black pb-8">
              <div className="text-6xl font-light text-black mb-4 font-luxury">5+</div>
              <p className="text-gray-500 uppercase tracking-widest text-sm">Years in Industry</p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen px-8 py-24 bg-white border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-luxury text-black mb-16 text-center uppercase tracking-wide">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
            <ThreeDCard 
              className="w-full" 
              backgroundImage="/vandah3.png" 
              maxRotation={15} 
              glowOpacity={0.2}
            >
              <img 
                src="/vandah3.png" 
                alt="Commercial Modeling Portfolio 1" 
                className="w-full h-auto object-cover rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </ThreeDCard>

            <ThreeDCard 
              className="w-full md:mt-32" 
              backgroundImage="/Vandah2.png" 
              maxRotation={15} 
              glowOpacity={0.2}
            >
              <img 
                src="/Vandah2.png" 
                alt="Commercial Modeling Portfolio 2" 
                className="w-full aspect-[3/4] object-cover object-center rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </ThreeDCard>
          </div>
        </div>
      </section>

      {/* 
      {/* Testimonials Section */}
      <section className="min-h-screen px-8 py-24 bg-zinc-50 border-t border-black/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-luxury text-black mb-16 text-center uppercase tracking-wide">
            Client Words
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 border border-black bg-white hover:-translate-y-2 transition-transform duration-300">
              <p className="text-gray-600 mb-8 font-light italic leading-loose text-lg">
                "Victory's professionalism and natural camera presence made our campaign shoot effortless. She perfectly captured the essence of our brand."
              </p>
              <div className="border-t border-black pt-6">
                <p className="text-black font-luxury uppercase tracking-widest">Isabella Rodriguez</p>
                <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-light">Mode Fashion</p>
              </div>
            </div>
            
            <div className="p-12 border border-black bg-white hover:-translate-y-2 transition-transform duration-300">
              <p className="text-gray-600 mb-8 font-light italic leading-loose text-lg">
                "Working with Victory is always a pleasure. She takes direction well and brings her own creative energy to every shoot. Highly professional."
              </p>
              <div className="border-t border-black pt-6">
                <p className="text-black font-luxury uppercase tracking-widest">David Park</p>
                <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-light">Creative Director</p>
              </div>
            </div>

            <div className="p-12 border border-black bg-white hover:-translate-y-2 transition-transform duration-300">
                <p className="text-gray-600 mb-8 font-light italic leading-loose text-lg">
                  "Victory represented our beauty line beautifully. Her engagement with the campaign content on social media exceeded our expectations."
                </p>
                <div className="border-t border-black pt-6">
                  <p className="text-black font-luxury uppercase tracking-widest">Sophia Laurent</p>
                  <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-light">Glow Beauty</p>
                </div>
            </div>

            <div className="p-12 border border-black bg-white hover:-translate-y-2 transition-transform duration-300">
                <p className="text-gray-600 mb-8 font-light italic leading-loose text-lg">
                  "Victory brings authenticity to every campaign. She's not just a model—she's a true brand ambassador who genuinely connects with our audience."
                </p>
                <div className="border-t border-black pt-6">
                  <p className="text-black font-luxury uppercase tracking-widest">Marcus Thompson</p>
                  <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-light">Brand Manager</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof of Work Section */}
      <section className="min-h-screen px-8 py-24 bg-white border-y border-black/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-luxury text-black mb-16 text-center uppercase tracking-wide">
            Body of Work
          </h2>
          <div className="space-y-16">
            <div className="border-l-2 border-black pl-8 pb-8 border-b-0 hover:border-l-4 transition-all">
              <h3 className="text-2xl font-luxury text-black mb-4 uppercase tracking-widest">Fashion Campaigns</h3>
              <p className="text-gray-500 font-light mb-6">
                Featured in 15+ fashion brand campaigns including lookbook shoots, social media content, and e-commerce 
                photography. Campaigns reached millions of impressions across digital platforms.
              </p>
              <div className="flex gap-4 flex-wrap">
                <span className="text-xs uppercase tracking-widest text-black border border-black px-4 py-2">Fashion Modeling</span>
                <span className="text-xs uppercase tracking-widest text-black border border-black px-4 py-2">Lookbooks</span>
                <span className="text-xs uppercase tracking-widest text-black border border-black px-4 py-2">E-commerce</span>
              </div>
            </div>

            <div className="border-l-2 border-black pl-8 hover:border-l-4 transition-all">
              <h3 className="text-2xl font-luxury text-black mb-4 uppercase tracking-widest">Beauty & Lifestyle Content</h3>
              <p className="text-gray-500 font-light mb-6">
                Collaborated with 20+ beauty and lifestyle brands on product launches, tutorial content, and brand 
                storytelling campaigns. Content consistently drove high engagement and product interest.
              </p>
              <div className="flex gap-4 flex-wrap">
                <span className="text-xs uppercase tracking-widest text-black border border-black px-4 py-2">Beauty Campaigns</span>
                <span className="text-xs uppercase tracking-widest text-black border border-black px-4 py-2">Product Photography</span>
                <span className="text-xs uppercase tracking-widest text-black border border-black px-4 py-2">Lifestyle Content</span>
              </div>
            </div>

            <div className="border-l-2 border-black pl-8 hover:border-l-4 transition-all">
              <h3 className="text-2xl font-luxury text-black mb-4 uppercase tracking-widest">Video & Motion Content</h3>
              <p className="text-gray-500 font-light mb-6">
                Performed in video campaigns for brand launches, social media reels, and promotional content. 
                Comfortable with both scripted and improvised video content creation.
              </p>
              <div className="flex gap-4 flex-wrap">
                <span className="text-xs uppercase tracking-widest text-black border border-black px-4 py-2">Video Campaigns</span>
                <span className="text-xs uppercase tracking-widest text-black border border-black px-4 py-2">Social Reels</span>
                <span className="text-xs uppercase tracking-widest text-black border border-black px-4 py-2">Brand Content</span>
              </div>
            </div>

            <div className="border-l-2 border-black pl-8 hover:border-l-4 transition-all">
              <h3 className="text-2xl font-luxury text-black mb-4 uppercase tracking-widest">Brand Ambassador Partnerships</h3>
              <p className="text-gray-500 font-light mb-6">
                Served as brand ambassador for multiple companies, representing brands at events, creating ongoing 
                content, and engaging with brand communities to drive awareness and loyalty.
              </p>
              <div className="flex gap-4 flex-wrap">
                <span className="text-xs uppercase tracking-widest text-black border border-black px-4 py-2">Brand Ambassador</span>
                <span className="text-xs uppercase tracking-widest text-black border border-black px-4 py-2">Event Representation</span>
                <span className="text-xs uppercase tracking-widest text-black border border-black px-4 py-2">Content Creation</span>
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
