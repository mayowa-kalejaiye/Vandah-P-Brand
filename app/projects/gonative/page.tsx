"use client";

import Link from "next/link";

export default function GoNative() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f4efe7] text-[#121212]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top_left,rgba(47,111,228,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(215,122,43,0.12),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.92),rgba(244,239,231,0.98))]" />
        <div className="absolute left-[-5rem] top-[9rem] h-72 w-72 rounded-full bg-[#2f6fe4]/10 blur-3xl" />
        <div className="absolute right-[-5rem] top-[24rem] h-80 w-80 rounded-full bg-[#d97a2b]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8 md:px-8">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-black/55 transition-colors hover:text-black">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO PROJECTS
        </Link>
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-28 pt-4 md:px-8 md:pt-8">
        <section className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-black/45">GoNative / Sui ecosystem</p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.055em] leading-[0.92] text-[#121212] md:text-7xl lg:text-[6rem]">
              Bitcoin yield <br />
              <span className="text-[#2f6fe4]">on Sui.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/68 md:text-xl">
              I served as Community Manager with project-level ownership across growth initiatives, coordinating campaigns that turned technical milestones into audience growth and product adoption.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
            <div className="overflow-hidden rounded-[1.5rem] bg-[#f7f9fc] p-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-black/8 pb-5">
                <img src="/native.jpeg" alt="GoNative logo" className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl object-cover" />
                <div>
                  <p className="text-[11px] uppercase tracking-widest sm:tracking-[0.34em] text-black/45">Project identity</p>
                  <p className="mt-2 text-xl sm:text-2xl font-semibold tracking-[-0.03em] text-[#121212]">Community and yield strategy</p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#eef4ff] p-4">
                  <p className="text-[11px] uppercase tracking-widest sm:tracking-[0.32em] text-[#2f6fe4]">Ecosystem</p>
                  <p className="mt-2 text-lg sm:text-xl font-semibold text-[#121212]">Sui / BTC</p>
                </div>
                <div className="rounded-2xl bg-[#eef4ff] p-4">
                  <p className="text-[11px] uppercase tracking-widest sm:tracking-[0.32em] text-[#2f6fe4]">Role</p>
                  <p className="mt-2 text-lg sm:text-xl font-semibold text-[#121212]">Ops & Growth</p>
                </div>
                <div className="rounded-2xl bg-[#eef4ff] p-4">
                  <p className="text-[11px] uppercase tracking-widest sm:tracking-[0.32em] text-[#2f6fe4]">Vertical</p>
                  <p className="mt-2 text-lg sm:text-xl font-semibold text-[#121212]">Web3 DeFi</p>
                </div>
                <div className="rounded-2xl bg-[#eef4ff] p-4">
                  <p className="text-[11px] uppercase tracking-widest sm:tracking-[0.32em] text-[#2f6fe4]">Focus</p>
                  <p className="mt-2 text-lg sm:text-xl font-semibold text-[#121212]">Engagement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.4em] text-black/45">Context</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#121212]">What I handled</h2>
            <p className="mt-4 text-base leading-7 text-black/62">
              GoNative is a Bitcoin yield platform built on the Sui blockchain, focused on yield generation, community growth, and product adoption. My responsibilities overlapped heavily with project management, community operations, and campaign execution.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-gradient-to-br from-[#eef6ff] to-white p-8 text-[#121212] shadow-[0_24px_80px_rgba(17,17,17,0.12)]">
            <p className="text-[11px] uppercase tracking-[0.4em] text-black/45">Impact focus</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#121212]">Why it mattered</h2>
            <p className="mt-4 text-base leading-7 text-[#121212]/80">
              I organized growth systems, leveraged the community as a distribution channel, and translated technical milestones into actionable campaigns that supported product adoption.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.8rem] border border-black/10 bg-white p-7 shadow-sm">
            <h3 className="text-[11px] uppercase tracking-[0.35em] text-[#2f6fe4]">Community growth campaign</h3>
            <p className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[#121212]">Writing contest activation</p>
            <p className="mt-3 text-sm leading-7 text-black/62">
              I coordinated a community-driven writing campaign to increase brand visibility and drive engagement within the ecosystem.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-black/62">
              <li>Structured participant interaction and campaign flow.</li>
              <li>Built a support funnel to keep user acquisition smooth.</li>
              <li>Strengthened GoNative&apos;s brand presence in the wider Web3 community.</li>
            </ul>
          </div>

          <div className="rounded-[1.8rem] border border-black/10 bg-white p-7 shadow-sm">
            <h3 className="text-[11px] uppercase tracking-[0.35em] text-[#2f6fe4]">Sales support</h3>
            <p className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[#121212]">NFT participation support</p>
            <p className="mt-3 text-sm leading-7 text-black/62">
              I supported critical NFT sales initiatives through community engagement, structured communication, and campaign coordination.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-black/62">
              <li>Clarified NFT utility during the awareness phase.</li>
              <li>Managed real-time communication between the core team and potential buyers.</li>
              <li>Drove participation that supported the protocol&apos;s revenue goals.</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-black/45">Strategic value</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#121212]">Execution</h3>
              <p className="mt-3 text-sm leading-7 text-black/62">I ran growth campaigns and handled front-line user mitigation.</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-black/45">Strategic value</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#121212]">Web3 ops</h3>
              <p className="mt-3 text-sm leading-7 text-black/62">I used the community as a product distribution channel in a decentralized environment.</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-black/45">Strategic value</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#121212]">Delivery style</h3>
              <p className="mt-3 text-sm leading-7 text-black/62">I connected campaign planning, communication, and adoption into one workflow.</p>
            </div>
          </div>
        </section>

        <div className="mt-12 flex justify-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-6 py-3 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5 shadow-sm"
          >
            ← Back to projects
          </Link>
        </div>
      </main>
    </div>
  );
}
