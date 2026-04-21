"use client";

import Image from "next/image";
import Link from "next/link";
import CanvasCurvedLoop from "@/components/CanvasCurvedLoop";
import { DockApp } from "@/components/Dock";
import { FlipWords } from "@/components/FlipWords";
import Logomarquee from "@/components/Logomarquee";

import VideoText from "@/components/VideoText";
import ThreeDCard from "@/components/ThreeDCard";
import Glass from "@/components/Glass";

export default function Home() {

  return (
    <>
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
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
        @keyframes slideUpFromLine {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .rotate-360 {
          transform: rotate(360deg);
        }
        @keyframes rotateClockwise {
          from {
            transform: rotate(270deg);
          }
          to {
            transform: rotate(630deg);
          }
        }
        @keyframes rotateCounterClockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .animate-slide-up {
          animation: slideUp 1s linear forwards;
        }
        .animate-slide-up-from-line {
          animation: slideUpFromLine 1s linear forwards;
        }
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700&display=swap');
        .font-luxury {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
      `}</style>
      
      {/* Hero Background Image with Fade */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 100%),
            url('/Vandah2.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top Section - Logo/Branding and Bio */}
        <div className="pt-16 px-8 flex flex-col md:flex-row items-start md:justify-between gap-8 md:gap-0">
          <div className="overflow-hidden w-full md:w-auto">
            <p className="text-white/70 text-sm animate-slide-up whitespace-nowrap">© Victory Abu</p>
          </div>
          <div className="overflow-hidden w-full md:w-auto md:max-w-2xl">
            <p className="text-left md:text-right animate-slide-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
              <strong
                className="block text-white font-bold leading-tight text-3xl md:text-4xl lg:text-5xl mb-2"
              >
                FINTECH PM & <br className="hidden md:block" /> OPERATIONS LEADER
              </strong>
              <span className="block text-white/90 text-base md:text-lg mt-2 font-light">Bridging the gap between business goals and technical execution to build resilient modern financial and Web3 architecture.</span>
            </p>
          </div>
        </div>

        {/* Main Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center relative px-8">

          {/* FlipWords - Center Hero Narrative */}
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Phudu:wght@700&display=swap');
            .font-phudu {
              font-family: 'Phudu', cursive;
            } 
          `}</style>
          {/* Centered Profile/Bio text */}
          <div className="relative mt-8 md:mt-24 z-20 text-center animate-slide-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            
            <div className="relative inline-flex items-center justify-center">
              {/* Advanced Glassmorphism background */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Glass
                  borderRadius="9999px"
                  blurAmount={24}
                  opacity={0.18}
                  borderColor="rgba(255,255,255,0.35)"
                  borderWidth="2px"
                  backgroundColor="#fff"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="font-phudu text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white py-4 px-10 flex flex-col items-center justify-center uppercase relative rounded-full z-10 w-full md:min-w-[700px]">
                <FlipWords 
                  words={[ 
                    "FINTECH PROJECT MANAGER",
                    "SYSTEMS OPERATOR",
                    "PRODUCT STRATEGIST",
                    "OPERATIONS LEADER",
                    "GROWTH MANAGER"
                  ]} 
                  duration={3000} 
                />
              </div>
              {/* Curved border overlay */}
              <div className="absolute inset-0 border-2 border-white/50 rounded-full pointer-events-none z-20"></div>
              {/* Selection Handles for curved border */}
              <div className="absolute w-3 h-3 bg-white border-2 border-orange-500 rounded-full top-[10%] left-[5%] z-30"></div>
              <div className="absolute w-3 h-3 bg-white border-2 border-orange-500 rounded-full top-[10%] right-[5%] z-30"></div>
              <div className="absolute w-3 h-3 bg-white border-2 border-orange-500 rounded-full bottom-[10%] left-[5%] z-30"></div>
              <div className="absolute w-3 h-3 bg-white border-2 border-orange-500 rounded-full bottom-[10%] right-[5%] z-30"></div>
            </div>
          </div>

          {/* Profile Image Container - Center */}
          <div className="relative mb-0 mt-32 z-0">
          </div>

          {/* Scrolling Curved Text */}
          <div className="w-screen -mx-8 absolute -bottom-4 md:-bottom-16 z-10">
            {/* Mobile version - larger */}
            <div className="md:hidden pointer-events-none" style={{ color: '#ffffff' }}>
              <CanvasCurvedLoop
                text="Fintech • Project Management • Web3 Strategy • Operations • Stakeholder Coordination • "
                speed={1.5}
                curveHeight={25}
                fontSize={120}
                fontFamily="'DM Sans', sans-serif"
                fontWeight="700"
                height={225}
                easing={0.8}
              />
            </div>
            {/* Desktop version - smaller */}
            <div className="hidden md:block" style={{ color: '#ffffff' }}>
              <CanvasCurvedLoop
                text="Fintech • Project Management • Web3 Strategy • Operations • Stakeholder Coordination • "
                speed={1.5}
                curveHeight={25}
                fontSize={120}
                fontFamily="'DM Sans', sans-serif"
                fontWeight="700"
                height={225}
                easing={0.8}
              />
            </div>
          </div>
        </div>

        {/* Bottom Dock Navigation */}
        <div className="fixed bottom-8 left-0 right-0 z-20 flex justify-center">
          <DockApp />
        </div>
      </div>
    </div>

    {/* Second Section - Impressive Works */}
    <div className="min-h-screen w-full bg-white px-8 py-16 relative">
      {/* Gradient overlay to blend with previous section */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white/0 via-white/70 to-white pointer-events-none -mt-32"></div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <p className="text-gray-800 text-3xl leading-relaxed font-[550]">
              I lead scalable fintech and Web3 infrastructure projects. By bridging high-level project management with operations execution, I deliver end-to-end products that serve modern institutional and retail needs.
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Core competencies include stakeholder coordination, budget allocation, cross-functional team leadership, product roadmap execution, and full operational lifecycle management under pressure.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-gray-800 text-xl font-semibold hover:underline">
              More about me
              <svg width="28" height="28" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-15">
                <path d="M40.1959 33.6014C39.6459 33.5514 39.1595 33.9567 39.1095 34.5068C39.0595 35.0568 39.4648 35.5432 40.0148 35.5932L40.1054 34.5973L40.1959 33.6014ZM70.3986 37.3512L71.3945 37.2607C71.3507 36.7799 70.9698 36.399 70.4891 36.3553L70.3986 37.3512ZM72.1566 67.7349C72.2066 68.2849 72.693 68.6903 73.243 68.6403C73.793 68.5903 74.1984 68.1039 74.1484 67.5539L73.1525 67.6444L72.1566 67.7349ZM36.6443 69.6912C36.2538 70.0817 36.2538 70.7149 36.6443 71.1054C37.0349 71.496 37.668 71.496 38.0586 71.1054L37.3514 70.3983L36.6443 69.6912ZM40.1054 34.5973L40.0148 35.5932L70.308 38.3471L70.3986 37.3512L70.4891 36.3553L40.1959 33.6014L40.1054 34.5973ZM70.3986 37.3512L69.4027 37.4418L72.1566 67.7349L73.1525 67.6444L74.1484 67.5539L71.3945 37.2607L70.3986 37.3512ZM70.3986 37.3512L69.6915 36.6441L36.6443 69.6912L37.3514 70.3983L38.0586 71.1054L71.1057 38.0583L70.3986 37.3512ZM106.75 53.875H105.75C105.75 82.5248 82.5248 105.75 53.875 105.75V106.75V107.75C83.6293 107.75 107.75 83.6293 107.75 53.875H106.75ZM53.875 106.75V105.75C25.2252 105.75 2 82.5248 2 53.875H1H0C0 83.6293 24.1207 107.75 53.875 107.75V106.75ZM1 53.875H2C2 25.2252 25.2252 2 53.875 2V1V0C24.1207 0 0 24.1207 0 53.875H1ZM53.875 1V2C82.5248 2 105.75 25.2252 105.75 53.875H106.75H107.75C107.75 24.1207 83.6293 0 53.875 0V1Z" fill="#C6C6C6"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-8 pr-[7px]" id="projects">
        <Logomarquee />
      </div>

      {/* Impressive Works Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-12">
          <h2 className="text-6xl font-bold text-gray-900">Completed Projects</h2>
          <div className="text-right">
            <p className="text-gray-500 text-xs uppercase tracking-wider leading-relaxed">
              PROJECT MANAGEMENT &<br/>
              OPERATIONAL EXECUTION<br/>
              SHOWCASING SYSTEMIC<br/>
              GROWTH AND LEADERSHIP.
            </p>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Project 1 */}
          <Link href="/projects/campus-bestie" className="group cursor-pointer block">
            <ThreeDCard className="mb-4" maxRotation={15} glowOpacity={0.3}>
              <div className="h-64 rounded-2xl bg-gradient-to-br from-orange-900 via-[#ab3105] to-slate-900 flex flex-col justify-between overflow-hidden relative p-8 border border-orange-500/20">
                <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full"></div>
                <div className="relative z-10 w-full flex justify-between uppercase tracking-widest text-[#ffa27a] text-xs font-bold font-mono">
                  <span>BUDGET: ₦720K</span>
                  <span>ATTENDEES: 224+</span>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between w-full mt-auto gap-4 md:gap-0">
                  <div className="text-white text-3xl md:text-4xl font-bold tracking-tight drop-shadow-xl" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)"}}>
                    Campus Bestie:<br/>Grills & Chills
                  </div>
                  <div className="flex gap-2">
                    <img src="/CAMBES.png" alt="Campus Bestie Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain bg-white/10 backdrop-blur-sm rounded p-1 border border-white/10 shadow-lg" />
                    <img src="/nacos.png" alt="NACOS Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain bg-white/10 backdrop-blur-sm rounded p-1 border border-white/10 shadow-lg" />
                  </div>
                </div>
              </div>
            </ThreeDCard>
            <div className="flex items-center gap-2">
              <span className="text-gray-800 font-semibold text-lg">Event Operations & VIP Product Execution</span>
            </div>
          </Link>

          {/* Project 2 */}
          <Link href="/projects/gonative" className="group cursor-pointer block">
            <ThreeDCard className="mb-4" maxRotation={15} glowOpacity={0.3}>
              <div className="h-64 rounded-2xl bg-slate-950 flex flex-col justify-between overflow-hidden relative p-8 border border-blue-500/20">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/20 blur-[60px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600/20 blur-[50px] rounded-full"></div>
                <div className="relative z-10 w-full flex justify-between uppercase tracking-widest text-blue-400 text-xs font-bold font-mono">
                  <span>ECOSYSTEM: SUI</span>
                  <span>DOMAIN: WEB3</span>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between w-full mt-auto gap-4 md:gap-0">
                  <div className="text-white text-3xl md:text-4xl font-bold tracking-tight drop-shadow-xl" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)"}}>
                    GoNative
                  </div>
                  <div className="flex gap-2">
                    <img src="/native.jpeg" alt="GoNative Logo" className="w-10 h-10 md:w-12 md:h-12 object-cover bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/10 shadow-lg" />
                  </div>
                </div>
              </div>
            </ThreeDCard>
            <div className="flex items-center gap-2">
              <span className="text-gray-800 font-semibold text-lg">Bitcoin Yield & Community Growth Strategy</span>
            </div>
          </Link>
        </div>

        {/* Explore More */}
        <div className="flex justify-center">
          <button className="text-gray-600 text-sm flex items-center gap-2 mt-8">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span>Explore more projects</span>
          </button>
        </div>
      </div>
    </div>

    {/* Roles Section - New Navigation Cards */}
    <div className="min-h-screen w-full bg-gray-50 px-8 py-24" id="explore-my-work">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Core Competencies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover my diverse expertise in the financial technology sector. Click on any discipline to learn more about my experience, achievements, and technical methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fintech PM Card */}
          <Link href="/fintech-project-manager" className="group">
            <div className="bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fintech Project Management</h3>
              <p className="text-gray-500 text-sm">Orchestrating complex financial features, timelines, and scaling launches.</p>
            </div>
          </Link>

          {/* Web3 Card */}
          <Link href="/web3-operations" className="group">
            <div className="bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-emerald-500">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Web3 Operations Leader</h3>
              <p className="text-gray-500 text-sm">Deploying high-probability growth campaigns across decentralized communities.</p>
            </div>
          </Link>

          {/* Product Strategy Card */}
          <Link href="/product-strategist" className="group">
            <div className="bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-indigo-500">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors">
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Product Strategist</h3>
              <p className="text-gray-500 text-sm">Aligning distribution, UX, and operational architecture to drive product adoption.</p>
            </div>
          </Link>

          {/* Risk/Operations Manager Card */}
          <Link href="/operations-manager" className="group">
            <div className="bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-red-500">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <svg className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Operations Leadership</h3>
              <p className="text-gray-500 text-sm">Budget mitigation, systemic processes, and cross-functional team execution.</p>
            </div>
          </Link>

        </div>
      </div>
    </div>

    {/* Contact Section */}
    <div className="min-h-screen w-full bg-white px-8 py-24 flex items-center" id="contact">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-16">
          <p className="text-gray-500 text-sm mb-4 font-[family-name:var(--font-ibm-plex-mono)]">That's all for now.</p>
          <h2 className="text-6xl font-medium text-gray-900 leading-tight">
            Got a project in mind?<br />
            Let's talk
          </h2>
        </div>

        {/* Contact Info and Button */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="w-full h-px bg-gray-300"></div>
          
          <div className="flex items-start justify-between -mt-24 gap-4">
            {/* Contact Details */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-32 pt-48">
              <div>
                <p className="text-gray-500 text-sm mb-2">Email</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=victoryabu@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 text-sm md:text-lg hover:underline break-all">
                  victoryabu@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-2">Phone</p>
                <a href="tel:+2349045684170" className="text-gray-900 text-sm md:text-lg hover:underline whitespace-nowrap">
                  (+234) 904 568 4170
                </a>
              </div>
            </div>

            {/* Get in touch Button */}
            <div className="relative flex-shrink-0 translate-y-8 -translate-x-16 md:translate-y-0 md:-translate-x-32 group">
              {/* Square - Behind triangle */}
              <div className="absolute inset-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 shadow-2xl transition-all duration-1000 ease-in group-hover:scale-125" style={{ zIndex: 1, boxShadow: '0 25px 50px -12px rgba(251, 146, 60, 0.5)', animation: 'rotateClockwise 8s ease-in-out infinite' }}></div>
              
              {/* Square - Behind circle */}
              <div className="absolute -inset-2 md:-inset-3 w-36 h-36 md:w-54 md:h-54 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 shadow-2xl" style={{ zIndex: 2, boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.5)', animation: 'rotateCounterClockwise 10s ease-in-out infinite' }}></div>
              
              {/* Circle button - Front */}
              <button className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-blue-600 text-white font-medium text-sm md:text-lg hover:bg-blue-700 transition-colors shadow-xl" style={{ zIndex: 3 }}>
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Section */}
    <footer className="w-full bg-black text-white px-8 py-16 overflow-hidden relative">
      {/* Arrow Button - Fixed Top Right on Mobile */}
      <div className="absolute top-8 right-8">
        <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
          <svg width="32" height="32" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.8864 12.7751L62.0498 28.9385M62.0498 28.9385L45.8864 45.102M62.0498 28.9385L14.9498 28.9385C12.7407 28.9385 10.9498 30.7294 10.9498 32.9385L10.9498 60.2251" stroke="#1D1D1D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="w-full">
        {/* Left Side - Text */}
        <div className="flex-1">
          <p className="text-white text-3xl md:text-4xl lg:text-6xl mb-2 font-light">your friendly creator</p>
        </div>
      </div>
      
      {/* VideoText "vandah" - Full Width Orange Starting from Left */}
      <div className="w-screen h-48 md:h-64 mt-2 relative left-0">
        <VideoText 
          src="https://ls29t3z55w.ufs.sh/f/JEKFIJDsOBct0vrmLYJRG8BKHmvZQkWJ9ElIVcNfzPg63Mbo"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize={15}
          fontWeight="bold"
          letterSpacing="0.05em"
          textTransform="uppercase"
          textAnchor="start"
          className="text-orange-500"
        >
          Victory Abu
        </VideoText>
      </div>
    </footer>
    </>
  );
}
