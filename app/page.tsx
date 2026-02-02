"use client";

import Image from "next/image";
import Link from "next/link";
import CanvasCurvedLoop from "@/components/CanvasCurvedLoop";
import { DockApp } from "@/components/Dock";
import { FlipWords } from "@/components/FlipWords";
import VideoText from "@/components/VideoText";
import ThreeDCard from "@/components/ThreeDCard";

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
      
      {/* Previous backgrounds - commented out */}
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 1) 100%),
            url('/bg.jpeg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, rgba(255, 255, 255, 0.7) 40%, rgba(218, 128, 10, 0.8) 96%)
          `,
          backgroundSize: "100% 100%",
        }}
      /> */}

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top Section - Logo/Branding and Bio */}
        <div className="pt-8 px-8 flex items-center justify-between">
          <div className="overflow-hidden">
            <p className="text-white/70 text-sm animate-slide-up">© Victory Abu</p>
          </div>
          <div className="overflow-hidden">
            <p className="text-white/90 text-sm leading-relaxed max-w-2xl text-right animate-slide-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
              Web3 enthusiast and Crypto strategist, dedicated to navigating the decentralized future through innovative blockchain solutions and financial technology.
            </p>
          </div>
        </div>

        {/* Main Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center relative px-8">

          {/* FlipWords - Right side, close to middle and top */}
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Phudu:wght@700&display=swap');
            .font-phudu {
              font-family: 'Phudu', cursive;
            }
          `}</style>
          <div className="absolute right-8 md:right-74 top-1/2 -translate-y-64 md:-translate-y-70">
            <div className="relative inline-block">
              <div className="font-phudu text-3xl md:text-5xl font-bold tracking-tight text-white py-1 px-4 flex items-center justify-center uppercase relative">
                <FlipWords 
                  words={[
                    "FOUNDER & CEO",
                    "WEB3 STRATEGIST",
                    "PROJECT CONSULTANT",
                    "PUBLIC FIGURE",
                    "GHOST WRITER",
                    "COMMUNITY BUILDER",
                    "COMMERCIAL MODEL",
                    "PUBLIC SPEAKER"
                  ]} 
                  duration={3000} 
                />
              </div>
              <div className="absolute inset-0 border-2 border-white/50 rounded-lg pointer-events-none"></div>
              {/* Selection Handles */}
              <div className="absolute w-3 h-3 bg-white border-2 border-orange-500 rounded-sm -top-1.5 -left-1.5"></div>
              <div className="absolute w-3 h-3 bg-white border-2 border-orange-500 rounded-sm -top-1.5 -right-1.5"></div>
              <div className="absolute w-3 h-3 bg-white border-2 border-orange-500 rounded-sm -bottom-1.5 -left-1.5"></div>
              <div className="absolute w-3 h-3 bg-white border-2 border-orange-500 rounded-sm -bottom-1.5 -right-1.5"></div>
            </div>
          </div>

          {/* Profile Image Container - Center */}
          <div className="relative mb-0 mt-32 z-0">
            
            {/* Profile Image */}
            {/* <div className="w-[550px] h-[550px] rounded-lg overflow-hidden">
              <Image 
                src="/Vandah2.png" 
                alt="Victory Abu - Vandah" 
                width={550}
                height={550}
                quality={100}
                priority
                className="w-full h-full object-cover"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div> */}
          </div>

          {/* Scrolling Curved Text */}
          <div className="w-screen -mx-8 absolute -bottom-4 md:-bottom-16 z-10">
            {/* Mobile version - larger */}
            <div className="md:hidden" style={{ color: '#ffffff' }}>
              <CanvasCurvedLoop
                text="Web3 • Crypto • Finance • Blockchain • DeFi • NFTs • "
                speed={1.5}
                curveHeight={25}
                fontSize={288}
                fontFamily="'DM Sans', sans-serif"
                fontWeight="700"
                height={450}
                easing={0.8}
              />
            </div>
            {/* Desktop version - smaller */}
            <div className="hidden md:block" style={{ color: '#ffffff' }}>
              <CanvasCurvedLoop
                text="Web3 • Crypto • Finance • Blockchain • DeFi • NFTs • "
                speed={1.5}
                curveHeight={25}
                fontSize={144}
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
              Navigating the decentralized frontier where blockchain meets innovation. I specialize in strategic Web3 consulting, transforming complex crypto ecosystems into accessible financial opportunities.
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              My expertise bridges the gap between traditional <br/>finance and the decentralized future, helping <br/>projects and individuals thrive in the evolving <br/>landscape of cryptocurrency and blockchain technology.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-gray-800 text-xl font-semibold hover:underline">
              More about me
              <svg width="28" height="28" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-15">
                <path d="M40.1959 33.6014C39.6459 33.5514 39.1595 33.9567 39.1095 34.5068C39.0595 35.0568 39.4648 35.5432 40.0148 35.5932L40.1054 34.5973L40.1959 33.6014ZM70.3986 37.3512L71.3945 37.2607C71.3507 36.7799 70.9698 36.399 70.4891 36.3553L70.3986 37.3512ZM72.1566 67.7349C72.2066 68.2849 72.693 68.6903 73.243 68.6403C73.793 68.5903 74.1984 68.1039 74.1484 67.5539L73.1525 67.6444L72.1566 67.7349ZM36.6443 69.6912C36.2538 70.0817 36.2538 70.7149 36.6443 71.1054C37.0349 71.496 37.668 71.496 38.0586 71.1054L37.3514 70.3983L36.6443 69.6912ZM40.1054 34.5973L40.0148 35.5932L70.308 38.3471L70.3986 37.3512L70.4891 36.3553L40.1959 33.6014L40.1054 34.5973ZM70.3986 37.3512L69.4027 37.4418L72.1566 67.7349L73.1525 67.6444L74.1484 67.5539L71.3945 37.2607L70.3986 37.3512ZM70.3986 37.3512L69.6915 36.6441L36.6443 69.6912L37.3514 70.3983L38.0586 71.1054L71.1057 38.0583L70.3986 37.3512ZM106.75 53.875H105.75C105.75 82.5248 82.5248 105.75 53.875 105.75V106.75V107.75C83.6293 107.75 107.75 83.6293 107.75 53.875H106.75ZM53.875 106.75V105.75C25.2252 105.75 2 82.5248 2 53.875H1H0C0 83.6293 24.1207 107.75 53.875 107.75V106.75ZM1 53.875H2C2 25.2252 25.2252 2 53.875 2V1V0C24.1207 0 0 24.1207 0 53.875H1ZM53.875 1V2C82.5248 2 105.75 25.2252 105.75 53.875H106.75H107.75C107.75 24.1207 83.6293 0 53.875 0V1Z" fill="#C6C6C6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Impressive Works Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-12">
          <h2 className="text-6xl font-bold text-gray-900">Featured Projects</h2>
          <div className="text-right">
            <p className="text-gray-500 text-xs uppercase tracking-wider leading-relaxed">
              STRATEGIC CONSULTING PROJECTS IN WEB3,<br/>
              DEFI, AND BLOCKCHAIN INNOVATION<br/>
              THAT SHOWCASE MY EXPERTISE IN<br/>
              CRYPTO ECOSYSTEM STRATEGY.
            </p>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Project 1 - CampusBestie */}
          <div className="group cursor-pointer">
            <ThreeDCard className="mb-4" maxRotation={15} glowOpacity={0.3}>
              <img 
                src="/campus.png" 
                alt="CampusBestie Platform"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </ThreeDCard>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1959 33.6014C39.6459 33.5514 39.1595 33.9567 39.1095 34.5068C39.0595 35.0568 39.4648 35.5432 40.0148 35.5932L40.1054 34.5973L40.1959 33.6014ZM70.3986 37.3512L71.3945 37.2607C71.3507 36.7799 70.9698 36.399 70.4891 36.3553L70.3986 37.3512ZM72.1566 67.7349C72.2066 68.2849 72.693 68.6903 73.243 68.6403C73.793 68.5903 74.1984 68.1039 74.1484 67.5539L73.1525 67.6444L72.1566 67.7349ZM36.6443 69.6912C36.2538 70.0817 36.2538 70.7149 36.6443 71.1054C37.0349 71.496 37.668 71.496 38.0586 71.1054L37.3514 70.3983L36.6443 69.6912ZM40.1054 34.5973L40.0148 35.5932L70.308 38.3471L70.3986 37.3512L70.4891 36.3553L40.1959 33.6014L40.1054 34.5973ZM70.3986 37.3512L69.4027 37.4418L72.1566 67.7349L73.1525 67.6444L74.1484 67.5539L71.3945 37.2607L70.3986 37.3512ZM70.3986 37.3512L69.6915 36.6441L36.6443 69.6912L37.3514 70.3983L38.0586 71.1054L71.1057 38.0583L70.3986 37.3512ZM106.75 53.875H105.75C105.75 82.5248 82.5248 105.75 53.875 105.75V106.75V107.75C83.6293 107.75 107.75 83.6293 107.75 53.875H106.75ZM53.875 106.75V105.75C25.2252 105.75 2 82.5248 2 53.875H1H0C0 83.6293 24.1207 107.75 53.875 107.75V106.75ZM1 53.875H2C2 25.2252 25.2252 2 53.875 2V1V0C24.1207 0 0 24.1207 0 53.875H1ZM53.875 1V2C82.5248 2 105.75 25.2252 105.75 53.875H106.75H107.75C107.75 24.1207 83.6293 0 53.875 0V1Z" fill="#C6C6C6"/>
              </svg>
              <span className="text-gray-800">CampusBestie - Student Connection Platform</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group cursor-pointer">
            <ThreeDCard className="mb-4" maxRotation={15} glowOpacity={0.3}>
              <div className="h-64 rounded-2xl bg-gradient-to-br from-orange-200 via-purple-200 to-blue-300 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">
                  W
                </div>
              </div>
            </ThreeDCard>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1959 33.6014C39.6459 33.5514 39.1595 33.9567 39.1095 34.5068C39.0595 35.0568 39.4648 35.5432 40.0148 35.5932L40.1054 34.5973L40.1959 33.6014ZM70.3986 37.3512L71.3945 37.2607C71.3507 36.7799 70.9698 36.399 70.4891 36.3553L70.3986 37.3512ZM72.1566 67.7349C72.2066 68.2849 72.693 68.6903 73.243 68.6403C73.793 68.5903 74.1984 68.1039 74.1484 67.5539L73.1525 67.6444L72.1566 67.7349ZM36.6443 69.6912C36.2538 70.0817 36.2538 70.7149 36.6443 71.1054C37.0349 71.496 37.668 71.496 38.0586 71.1054L37.3514 70.3983L36.6443 69.6912ZM40.1054 34.5973L40.0148 35.5932L70.308 38.3471L70.3986 37.3512L70.4891 36.3553L40.1959 33.6014L40.1054 34.5973ZM70.3986 37.3512L69.4027 37.4418L72.1566 67.7349L73.1525 67.6444L74.1484 67.5539L71.3945 37.2607L70.3986 37.3512ZM70.3986 37.3512L69.6915 36.6441L36.6443 69.6912L37.3514 70.3983L38.0586 71.1054L71.1057 38.0583L70.3986 37.3512ZM106.75 53.875H105.75C105.75 82.5248 82.5248 105.75 53.875 105.75V106.75V107.75C83.6293 107.75 107.75 83.6293 107.75 53.875H106.75ZM53.875 106.75V105.75C25.2252 105.75 2 82.5248 2 53.875H1H0C0 83.6293 24.1207 107.75 53.875 107.75V106.75ZM1 53.875H2C2 25.2252 25.2252 2 53.875 2V1V0C24.1207 0 0 24.1207 0 53.875H1ZM53.875 1V2C82.5248 2 105.75 25.2252 105.75 53.875H106.75H107.75C107.75 24.1207 83.6293 0 53.875 0V1Z" fill="#C6C6C6"/>
              </svg>
              <span className="text-gray-800">NFT Marketplace Consulting</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group cursor-pointer">
            <ThreeDCard className="mb-4" maxRotation={15} glowOpacity={0.3}>
              <div className="h-64 rounded-2xl bg-black flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-white">
                  <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="3"/>
                  <path d="M40 20C40 20 50 30 40 40C30 50 40 60 40 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
            </ThreeDCard>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1959 33.6014C39.6459 33.5514 39.1595 33.9567 39.1095 34.5068C39.0595 35.0568 39.4648 35.5432 40.0148 35.5932L40.1054 34.5973L40.1959 33.6014ZM70.3986 37.3512L71.3945 37.2607C71.3507 36.7799 70.9698 36.399 70.4891 36.3553L70.3986 37.3512ZM72.1566 67.7349C72.2066 68.2849 72.693 68.6903 73.243 68.6403C73.793 68.5903 74.1984 68.1039 74.1484 67.5539L73.1525 67.6444L72.1566 67.7349ZM36.6443 69.6912C36.2538 70.0817 36.2538 70.7149 36.6443 71.1054C37.0349 71.496 37.668 71.496 38.0586 71.1054L37.3514 70.3983L36.6443 69.6912ZM40.1054 34.5973L40.0148 35.5932L70.308 38.3471L70.3986 37.3512L70.4891 36.3553L40.1959 33.6014L40.1054 34.5973ZM70.3986 37.3512L69.4027 37.4418L72.1566 67.7349L73.1525 67.6444L74.1484 67.5539L71.3945 37.2607L70.3986 37.3512ZM70.3986 37.3512L69.6915 36.6441L36.6443 69.6912L37.3514 70.3983L38.0586 71.1054L71.1057 38.0583L70.3986 37.3512ZM106.75 53.875H105.75C105.75 82.5248 82.5248 105.75 53.875 105.75V106.75V107.75C83.6293 107.75 107.75 83.6293 107.75 53.875H106.75ZM53.875 106.75V105.75C25.2252 105.75 2 82.5248 2 53.875H1H0C0 83.6293 24.1207 107.75 53.875 107.75V106.75ZM1 53.875H2C2 25.2252 25.2252 2 53.875 2V1V0C24.1207 0 0 24.1207 0 53.875H1ZM53.875 1V2C82.5248 2 105.75 25.2252 105.75 53.875H106.75H107.75C107.75 24.1207 83.6293 0 53.875 0V1Z" fill="#C6C6C6"/>
              </svg>
              <span className="text-gray-800">Crypto Trading Strategy Consulting</span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="group cursor-pointer">
            <ThreeDCard className="mb-4" maxRotation={15} glowOpacity={0.3}>
              <div className="h-64 rounded-2xl bg-black flex items-center justify-center">
                <div className="text-white text-4xl font-light">Gemini</div>
              </div>
            </ThreeDCard>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1959 33.6014C39.6459 33.5514 39.1595 33.9567 39.1095 34.5068C39.0595 35.0568 39.4648 35.5432 40.0148 35.5932L40.1054 34.5973L40.1959 33.6014ZM70.3986 37.3512L71.3945 37.2607C71.3507 36.7799 70.9698 36.399 70.4891 36.3553L70.3986 37.3512ZM72.1566 67.7349C72.2066 68.2849 72.693 68.6903 73.243 68.6403C73.793 68.5903 74.1984 68.1039 74.1484 67.5539L73.1525 67.6444L72.1566 67.7349ZM36.6443 69.6912C36.2538 70.0817 36.2538 70.7149 36.6443 71.1054C37.0349 71.496 37.668 71.496 38.0586 71.1054L37.3514 70.3983L36.6443 69.6912ZM40.1054 34.5973L40.0148 35.5932L70.308 38.3471L70.3986 37.3512L70.4891 36.3553L40.1959 33.6014L40.1054 34.5973ZM70.3986 37.3512L69.4027 37.4418L72.1566 67.7349L73.1525 67.6444L74.1484 67.5539L71.3945 37.2607L70.3986 37.3512ZM70.3986 37.3512L69.6915 36.6441L36.6443 69.6912L37.3514 70.3983L38.0586 71.1054L71.1057 38.0583L70.3986 37.3512ZM106.75 53.875H105.75C105.75 82.5248 82.5248 105.75 53.875 105.75V106.75V107.75C83.6293 107.75 107.75 83.6293 107.75 53.875H106.75ZM53.875 106.75V105.75C25.2252 105.75 2 82.5248 2 53.875H1H0C0 83.6293 24.1207 107.75 53.875 107.75V106.75ZM1 53.875H2C2 25.2252 25.2252 2 53.875 2V1V0C24.1207 0 0 24.1207 0 53.875H1ZM53.875 1V2C82.5248 2 105.75 25.2252 105.75 53.875H106.75H107.75C107.75 24.1207 83.6293 0 53.875 0V1Z" fill="#C6C6C6"/>
              </svg>
              <span className="text-gray-800">Blockchain Integration Advisory</span>
            </div>
          </div>
        </div>

        {/* Explore More */}
        <div className="flex justify-center">
          <button className="text-gray-600 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span>Explore more</span>
          </button>
        </div>
      </div>
    </div>

    {/* Roles Section - New Navigation Cards */}
    <div className="min-h-screen w-full bg-gray-50 px-8 py-24" id="explore-my-work">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Explore My Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover my diverse expertise across multiple fields. Click on any role to learn more about my experience, 
            achievements, and how I can help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Founder & CEO Card */}
          <Link href="/founder-ceo" className="group">
            <div className="bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-orange-500">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <svg className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Founder & CEO</h3>
              <p className="text-gray-600 mb-2">@CampusBestie</p>
              <p className="text-gray-500 text-sm">Leading innovation in campus connectivity</p>
            </div>
          </Link>

          {/* Web3 Strategist Card */}
          <Link href="/web3-strategist" className="group">
            <div className="bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Web3 Strategist</h3>
              <p className="text-gray-500 text-sm">Blockchain strategies for the decentralized future</p>
            </div>
          </Link>

          {/* Project Consultant Card */}
          <Link href="/project-consultant" className="group">
            <div className="bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-emerald-500">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Project Consultant</h3>
              <p className="text-gray-500 text-sm">Strategic insights and execution excellence</p>
            </div>
          </Link>

          {/* Public Figure Card */}
          <Link href="/public-figure" className="group">
            <div className="bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-pink-500">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-pink-500 transition-colors">
                <svg className="w-8 h-8 text-pink-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Public Figure</h3>
              <p className="text-gray-500 text-sm">Inspiring audiences and building connections</p>
            </div>
          </Link>

          {/* Ghost Writer Card */}
          <Link href="/ghost-writer" className="group">
            <div className="bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-indigo-500">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors">
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ghost Writer</h3>
              <p className="text-gray-500 text-sm">Crafting compelling narratives that resonate</p>
            </div>
          </Link>

          {/* Community Builder Card */}
          <Link href="/community-builder" className="group">
            <div className="bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-emerald-500">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Community Builder</h3>
              <p className="text-gray-500 text-sm">Creating thriving communities that grow together</p>
            </div>
          </Link>

          {/* Commercial Model Card */}
          <Link href="/commercial-model" className="group">
            <div className="bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-pink-500">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-pink-500 transition-colors">
                <svg className="w-8 h-8 text-pink-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Commercial Model</h3>
              <p className="text-gray-500 text-sm">Bringing brands to life through visual storytelling</p>
            </div>
          </Link>

          {/* Public Speaker Card */}
          <Link href="/public-speaker" className="group">
            <div className="bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-500">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                <svg className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Public Speaker</h3>
              <p className="text-gray-500 text-sm">Delivering impactful presentations that inspire</p>
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
                <a href="mailto:victoryabu@gmail.com" className="text-gray-900 text-sm md:text-lg hover:underline break-all">
                  realvandah@gmail.com
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
          <p className="text-white text-3xl md:text-4xl lg:text-6xl mb-2 font-light">your friendly  creator</p>
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
