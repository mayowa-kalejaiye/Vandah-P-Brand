"use client";

import Link from "next/link";
import Image from "next/image";
import { DockApp } from "@/components/Dock";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f4efe7] text-[#121212]">
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

        .about-fade {
          animation: slideUp 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .about-delay {
          opacity: 0;
        }

        .about-delay-1 {
          animation-delay: 120ms;
        }

        .about-delay-2 {
          animation-delay: 220ms;
        }

        .about-delay-3 {
          animation-delay: 320ms;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_top_left,rgba(215,122,43,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(22,72,133,0.12),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(244,239,231,0.96))]" />
        <div className="absolute left-[-6rem] top-[8rem] h-72 w-72 rounded-full bg-[#d97a2b]/12 blur-3xl" />
        <div className="absolute right-[-5rem] bottom-[8rem] h-80 w-80 rounded-full bg-[#0f3c6f]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 md:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-black/55 transition-colors hover:text-black">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO HOME
        </Link>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 pb-8 pt-6 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="overflow-hidden mb-4 md:mb-0">
          <p className="text-[11px] uppercase tracking-[0.4em] text-black/45">
            © Victory Abu
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="text-xs sm:text-sm font-medium tracking-wider sm:tracking-[0.2em] text-black/60 uppercase">
            VICTORY ABU / FINTECH PM & WEB3 STRATEGIST
          </p>
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-10 md:px-8 md:pt-14">
        <section className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <h1 className="about-fade text-4xl sm:text-5xl font-semibold tracking-[-0.05em] leading-[0.92] text-[#121212] md:text-7xl lg:text-[6rem]">
              Bridging vision <br />
              <span className="text-black/40">& execution.</span>
            </h1>

            <p className="about-delay about-delay-1 about-fade mt-8 max-w-2xl text-lg leading-8 text-black/68 md:text-xl">
              I work across FinTech and Web3 to transform strategic concepts into products and operations
              that are clearer, tighter, and easier to trust.
            </p>

            <p className="about-delay about-delay-2 about-fade mt-5 max-w-2xl text-base leading-7 text-black/60 md:text-lg">
              I build systems that keep teams moving with clarity. That means stakeholders stay aligned, scope stays tight, and execution stays calm.
            </p>

            <div className="about-delay about-delay-3 about-fade mt-8 flex flex-wrap gap-4">
              <Link
                href="mailto:realvandah@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-[#121212] px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                Contact me
              </Link>
              <Link
                href="https://www.linkedin.com/in/abu-victory-479993326/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/12 bg-white/80 px-6 py-3 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
              >
                LinkedIn profile
              </Link>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white/75 p-4 shadow-[0_24px_80px_rgba(17,17,17,0.08)] backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#e7e0d7]">
                <Image
                  src="/Vandah2.png"
                  alt="Victory Abu portrait"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/6 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[11px] uppercase tracking-[0.34em] text-white/75">Victory Abu</p>
                  <p className="mt-2 max-w-sm text-2xl font-semibold leading-tight text-white">
                    Fintech project manager, Web3 operator, and systems thinker.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur">
                <h3 className="text-[11px] uppercase tracking-[0.35em] text-black/45">Core competencies</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-black/65">
                  <li>Cross-functional team and stakeholder coordination</li>
                  <li>Budget allocation and resource management</li>
                  <li>Product roadmap strategy and execution</li>
                  <li>Full operational lifecycle management</li>
                </ul>
              </div>

              <div className="rounded-[1.6rem] border border-black/10 bg-[#121212] p-6 text-white shadow-sm">
                <h3 className="text-[11px] uppercase tracking-[0.35em] text-white/45">Industry focus</h3>
                <p className="mt-4 text-base leading-7 text-white/76">
                  FinTech • Web3 Infrastructure • Blockchain • Growth Operations
                </p>
                <p className="mt-4 text-sm leading-6 text-white/55">
                  I approach every program with the same rigor: clear role definition, realistic timelines, and a bias toward structured handoffs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Dock Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-8 pointer-events-none">
        <div className="pointer-events-auto">
          <DockApp />
        </div>
      </div>
    </div>
  );
}
