"use client";

import Link from "next/link";
import { DockApp } from "@/components/Dock";

export default function AboutPage() {
  return (
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
      `}</style>

      {/* Top Header */}
      <div className="w-full flex-col md:flex-row flex items-start md:items-center justify-between px-8 py-8 relative z-20">
        <div className="overflow-hidden mb-4 md:mb-0">
          <p className="text-gray-900 text-sm tracking-widest uppercase font-light">
            © Victory Abu
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="text-gray-500 text-sm font-medium tracking-tight">
            ABOUT ME
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-8 pt-24 pb-16 relative z-10">
        <h1 className="text-7xl md:text-8xl font-black text-gray-900 tracking-tight leading-none mb-12" style={{ animation: "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
          Bridging Vision <br />
          <span className="text-gray-400">&amp; Execution</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16" style={{ animation: "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards", animationDelay: "0.2s", opacity: 0 }}>
          <div>
            <p className="text-gray-800 text-2xl leading-relaxed font-[550] mb-8">
              Working at the intersection of FinTech and Web3, I focus on transforming strategic concepts into fully operational and user-centric products.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              My approach is built on collaboration, clear communication, and adaptable project management. Whether navigating the nuances of emerging markets or organizing fast-paced tech environments, my goal is to support teams in building products that are structured to grow and succeed over their full lifecycle.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-12">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
              >
                View Resume
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="currentColor"/>
                </svg>
              </a>
              {/* <Link 
                href="/" 
                className="px-8 py-4 text-gray-900 rounded-full font-medium border border-gray-200 hover:border-gray-900 transition-colors inline-block"
              >
                Back to Home
              </Link> */}
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4 mb-2">Core Competencies</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-gray-400 mt-1">01</span>
                  <span>Cross-Functional Team & Stakeholder Coordination</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-gray-400 mt-1">02</span>
                  <span>Budget Allocation & Resource Management</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-gray-400 mt-1">03</span>
                  <span>Product Roadmap Strategy & Execution</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-gray-400 mt-1">04</span>
                  <span>Full Operational Lifecycle Management</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4 mb-2">Industry Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                FinTech • Web3 Infrastructure • Blockchain • Growth Operations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dock Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-8 pointer-events-none">
        <div className="pointer-events-auto">
          <DockApp />
        </div>
      </div>
    </div>
  );
}
