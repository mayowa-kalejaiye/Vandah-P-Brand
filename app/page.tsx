"use client";

import Image from "next/image";
import Link from "next/link";
import { DockApp } from "@/components/Dock";
import { FlipWords } from "@/components/FlipWords";
import Logomarquee from "@/components/Logomarquee";
import ThreeDCard from "@/components/ThreeDCard";
import { motion } from "framer-motion";

const heroMetrics = [
  { label: "Programs launched", value: "12+" },
  { label: "Domains bridged", value: "3" },
  { label: "Execution style", value: "Calm + precise" },
];

const capabilities = [
  {
    title: "Fintech project management",
    description:
      "Turning product goals, roadmap pressure, and stakeholder complexity into a clear delivery plan.",
  },
  {
    title: "Web3 operations",
    description:
      "Structuring communities, launch workflows, and execution systems that hold up under growth.",
  },
  {
    title: "Cross-functional alignment",
    description:
      "Keeping leadership, product, design, and operations synchronized around what ships next.",
  },
  {
    title: "Brand and narrative clarity",
    description:
      "Making the work legible, credible, and easier to trust at a glance.",
  },
];

const projectCards = [
  {
    href: "/projects/campus-bestie",
    badgeLeft: "Event ops",
    badgeRight: "₦720K budget",
    title: "Campus Bestie: Grills & Chills",
    description:
      "A high-energy campus activation shaped by planning discipline, partner coordination, and a tightly managed VIP experience.",
    // warm-cream gradient that complements the site's background and lets blue logos pop
    accent: "from-[#fff6ef] via-[#fff1e6] to-[#fff9f3]",
    textTone: "text-[#121212]",
    textSoftTone: "text-black/62",
    badgeTone: "text-[#e85a1f]",
    logoTone: "border-black/10 bg-white/98",
    logoSize: "h-20 w-20",
    logoRow: [
      { src: "/CAMBES.png", alt: "Campus Bestie logo" },
      { src: "/nacos.png", alt: "NACOS logo" },
    ],
  },
  {
    href: "/projects/gonative",
    badgeLeft: "Web3 strategy",
    badgeRight: "Sui ecosystem",
    title: "GoNative",
    description:
      "A Web3 growth case study focused on community activation, clearer onboarding, and stronger ecosystem positioning.",
    // layered blue gradient that sits with the site's cream background but reads distinct
    accent: "from-[#08203a] via-[#1b4f8f] to-[#2f6fe4]",
    textTone: "text-white",
    textSoftTone: "text-white/74",
    badgeTone: "text-white/78",
    logoRow: [{ src: "/native.jpeg", alt: "GoNative logo" }],
    logoSize: "h-20 w-20",
  },
];

const pillars = [
  {
    title: "Launch coordination",
    text: "Managing timelines, stakeholders, and handoffs so the work ships on time.",
  },
  {
    title: "Budget control",
    text: "Keeping spend, scope, and delivery aligned without letting details drift.",
  },
  {
    title: "Community growth",
    text: "Turning events, campaigns, and user engagement into measurable momentum.",
  },
];

const subtleReveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f4efe7] text-[#121212]">
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatSlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -12px, 0);
          }
        }

        @keyframes driftWide {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(16px);
          }
        }

        .animate-fade-up {
          animation: fadeUp 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }

        .animate-drift-wide {
          animation: driftWide 10s ease-in-out infinite;
        }

        .fade-delay-50 {
          animation-delay: 50ms;
          opacity: 0;
        }

        .fade-delay-120 {
          animation-delay: 120ms;
          opacity: 0;
        }

        .fade-delay-200 {
          animation-delay: 200ms;
          opacity: 0;
        }

        .fade-delay-260 {
          animation-delay: 260ms;
          opacity: 0;
        }

        .fade-delay-340 {
          animation-delay: 340ms;
          opacity: 0;
        }

        .fade-delay-400 {
          animation-delay: 400ms;
          opacity: 0;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(215,122,43,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(22,72,133,0.16),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.88),rgba(244,239,231,0.96))]" />
        <div className="absolute left-[-6rem] top-[10rem] h-72 w-72 rounded-full bg-[#d97a2b]/12 blur-3xl" />
        <div className="absolute right-[-4rem] top-[24rem] h-80 w-80 rounded-full bg-[#0f3c6f]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(0,0,0,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.7)_1px,transparent_1px)] [background-size:96px_96px]" />
      </div>

      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 pb-6 pt-6 md:px-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-black/45">Victory Abu</p>
            <p className="mt-2 text-sm text-black/60">Fintech PM, Web3 operator, systems thinker.</p>
          </div>
          <div className="hidden items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-black/70 shadow-sm backdrop-blur md:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Selective consulting availability</span>
          </div>
        </header>

        <main>
          <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-10 md:grid-cols-[1.06fr_0.94fr] md:px-8 md:pb-28 md:pt-14">
            <div className="flex flex-col justify-center">
              <div className="fade-delay-50 animate-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm text-black/70 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#d97a2b]" />
                <span className="text-[10px] uppercase tracking-[0.32em]">Fintech x Web3 x Operations</span>
              </div>

              <h1 className="fade-delay-120 animate-fade-up mt-6 max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-[#121212] md:text-7xl lg:text-[6rem]">
                Building the systems behind ambitious financial products and communities.
              </h1>

              <p className="fade-delay-200 animate-fade-up mt-6 max-w-2xl text-lg leading-8 text-black/68 md:text-xl">
                  I help teams move with more clarity, better structure, and stronger execution.
                  This homepage reflects my work more directly with cleaner hierarchy and a sharper portfolio story.
              </p>

              <div className="fade-delay-260 animate-fade-up mt-5 flex flex-wrap items-center gap-3 text-sm text-black/65">
                <span className="rounded-full border border-black/10 bg-white/75 px-3 py-2 shadow-sm">
                  Focused on
                </span>
                <span className="text-black/45"> </span>
                <FlipWords
                  words={[
                    "fintech programs",
                    "Web3 launches",
                    "operations systems",
                    "stakeholder alignment",
                  ]}
                  duration={2800}
                  className="rounded-full border border-black/10 bg-white/75 px-3 py-2 font-medium text-[#9a4a1a] shadow-sm"
                />
              </div>

              <div className="fade-delay-340 animate-fade-up mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#projects"
                  className="rounded-full bg-[#121212] px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  View selected work
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border border-black/15 bg-white/80 px-6 py-3 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Read the story
                </Link>
              </div>

              <div className="fade-delay-400 animate-fade-up mt-10 grid gap-4 sm:grid-cols-3">
                {heroMetrics.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
                    className="rounded-3xl border border-black/8 bg-white/75 p-4 shadow-sm backdrop-blur"
                  >
                    <p className="text-sm font-medium text-black/45">{item.label}</p>
                    <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[#121212]">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-[#d97a2b]/15 blur-3xl animate-float-slow" />
              <div className="absolute -right-4 bottom-12 h-24 w-24 rounded-full bg-[#1f4d88]/15 blur-3xl animate-drift-wide" />

              <ThreeDCard
                className="relative"
                maxRotation={6}
                glowOpacity={0.16}
                shadowBlur={36}
                parallaxOffset={24}
                transitionDuration="0.5s"
              >
                <div className="overflow-hidden rounded-[2rem] border border-white/50 bg-[#f8f5ef] p-4 shadow-[0_28px_90px_rgba(17,17,17,0.12)]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#e7e0d7]">
                    <Image
                      src="/Vandah2.png"
                      alt="Victory Abu portrait"
                      fill
                      priority
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-black/8 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="text-[11px] uppercase tracking-[0.34em] text-white/75">Victory Abu</p>
                      <p className="mt-2 max-w-sm text-2xl font-semibold leading-tight text-white">
                        Fintech project manager and Web3 strategist focused on execution.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white px-4 py-4 shadow-sm">
                      <p className="text-[11px] uppercase tracking-[0.32em] text-black/45">Primary role</p>
                      <p className="mt-2 text-base font-medium text-black/85">Fintech Project Manager</p>
                    </div>
                    <div className="rounded-2xl bg-white px-4 py-4 shadow-sm">
                      <p className="text-[11px] uppercase tracking-[0.32em] text-black/45">Working style</p>
                      <p className="mt-2 text-base font-medium text-black/85">Structured, fast, calm</p>
                    </div>
                  </div>
                </div>
              </ThreeDCard>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
            <div className="flex flex-col gap-4 pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-black/45">Proof of work</p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#121212] md:text-4xl">
                  Work that moves products forward.
                </p>
              </div>
                <p className="max-w-xl text-sm leading-6 text-black/60">
                  Logos show who I've worked with — the work is what matters.
                </p>
            </div>
            <motion.div
              {...subtleReveal}
              className="rounded-[2rem] border border-black/8 bg-white/75 p-3 shadow-[0_20px_80px_rgba(17,17,17,0.08)] backdrop-blur"
            >
              <Logomarquee />
            </motion.div>
          </section>

          <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                {...subtleReveal}
                className="rounded-[2rem] border border-black/10 bg-[#121212] p-8 text-white shadow-[0_30px_120px_rgba(0,0,0,0.18)]"
              >
                <p className="text-[11px] uppercase tracking-[0.4em] text-white/45">What I do</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Programs launched. Teams aligned. Outcomes tracked.</h2>
                <p className="mt-4 leading-7 text-white/72">
                  This portfolio shows the kind of work I actually handle: fintech project coordination, Web3 community operations,
                  campus activations, and the systems that keep moving parts from slipping.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {pillars.map((pillar) => (
                    <span
                      key={pillar.title}
                      className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/82"
                    >
                      {pillar.title}
                    </span>
                  ))}
                </div>
              </motion.div>

              <div className="grid gap-4 md:grid-cols-2">
                {capabilities.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
                    className="rounded-[1.6rem] border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur"
                  >
                    <p className="text-[11px] uppercase tracking-[0.35em] text-black/45">Capability</p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#121212]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-black/62">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Anchor for Dock: Explore My Work */}
          <div id="explore-my-work" />

          <section id="projects" className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-black/45">Selected work</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#121212] md:text-4xl">
                  Selected projects.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-black/60">
                Each project is framed to show the brief, the role, and the result without forcing you to dig for the point.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {projectCards.map((project, index) => (
                <Link key={project.title} href={project.href} className="group block">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
                  >
                    <ThreeDCard className="mb-4" maxRotation={12} glowOpacity={0.22} shadowBlur={34}>
                      <div
                        className={`relative flex h-[28rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br ${project.accent} p-8 border border-white/10`}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_36%)]" />
                        <div className={`relative z-10 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.35em] ${project.badgeTone ?? "text-white/70"}`}>
                          <span>{project.badgeLeft}</span>
                          <span>{project.badgeRight}</span>
                        </div>

                        <div className="relative z-10 mt-auto flex flex-col gap-6">
                          <div>
                            <h3 className={`text-3xl font-semibold tracking-[-0.04em] md:text-4xl ${project.textTone ?? "text-white"}`}>
                              {project.title}
                            </h3>
                            <p className={`mt-4 max-w-xl text-sm leading-7 ${project.textSoftTone ?? "text-white/74"}`}>{project.description}</p>
                          </div>

                          <div className="flex flex-wrap gap-3">
                            {project.logoRow.map((logo) => (
                              <div
                                key={logo.alt}
                                className={`flex ${project.logoSize ?? "h-14 w-14"} items-center justify-center rounded-2xl border p-2 backdrop-blur ${project.logoTone ?? (project.textTone === "text-[#121212]" ? "border-black/10 bg-white/80" : "border-white/12 bg-white/10")}`}
                              >
                                <img src={logo.src} alt={logo.alt} className="h-full w-full object-contain" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </ThreeDCard>
                    <div className="flex items-center justify-between px-1">
                      <span className="text-lg font-medium text-[#121212]">Open project</span>
                      <span className="text-sm text-black/45 transition-transform duration-200 group-hover:translate-x-1">
                        View details
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 pb-28 md:px-8">
            <motion.div
              {...subtleReveal}
              className="rounded-[2rem] border border-black/10 bg-gradient-to-r from-[#efe7db] to-[#f8f4ee] p-8 md:p-12"
            >
              <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.4em] text-black/45">Let's work together</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#121212] md:text-5xl">
                    Need a strategist who can bring order, clarity, and momentum?
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-black/68">
                    If you&apos;re building a fintech or Web3 product and need someone to shape the plan, coordinate execution, and make the work easier to trust, let&apos;s talk.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <a
                    href="mailto:Or%20realvandah@gmail.com"
                    className="rounded-full bg-[#121212] px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Email me
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abu-victory-479993326/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black/15 bg-white/80 px-6 py-3 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    LinkedIn profile
                  </a>
                </div>
              </div>
            </motion.div>
          </section>
        </main>

        <div className="fixed bottom-6 left-0 right-0 z-20 flex justify-center px-4">
          <DockApp />
        </div>
      </div>
    </div>
  );
}
