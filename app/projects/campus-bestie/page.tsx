import Link from "next/link";

export default function CampusBestie() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f4efe7] text-[#121212]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_top_left,rgba(232,90,31,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(47,111,228,0.12),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.94),rgba(244,239,231,0.98))]" />
        <div className="absolute left-[-4rem] top-[12rem] h-72 w-72 rounded-full bg-[#e85a1f]/10 blur-3xl" />
        <div className="absolute right-[-5rem] top-[20rem] h-80 w-80 rounded-full bg-[#2f6fe4]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8 md:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-black/55 transition-colors hover:text-black"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO PROJECTS
        </Link>
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-28 pt-4 md:px-8 md:pt-8">
        <section className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-black/45">Campus Bestie / live activation</p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.055em] leading-[0.92] text-[#121212] md:text-7xl lg:text-[6rem]">
              Grills, chills,
              <br />
              <span className="text-[#e85a1f]">and campus pull.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/68 md:text-xl">
              I led the Campus Bestie activation as an operations and partnership project, turning a campus event into a structured VIP experience with clear budgets, reliable delivery, and strong audience energy.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
            <div className="overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,#fff8f4_0%,#fff_48%,#f4f8ff_100%)] p-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-black/8 pb-5">
                <img src="/CAMBES.png" alt="Campus Bestie logo" className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl object-contain" />
                <div>
                  <p className="text-[11px] uppercase tracking-widest sm:tracking-[0.34em] text-black/45">Project identity</p>
                  <p className="mt-2 text-xl sm:text-2xl font-semibold tracking-[-0.03em] text-[#121212]">Campus activation with a premium tier</p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#fff1ea] p-4">
                  <p className="text-[11px] uppercase tracking-widest sm:tracking-[0.32em] text-[#e85a1f]">Attendance</p>
                  <p className="mt-2 text-lg sm:text-xl font-semibold text-[#121212]">~224 people</p>
                </div>
                <div className="rounded-2xl bg-[#eef4ff] p-4">
                  <p className="text-[11px] uppercase tracking-widest sm:tracking-[0.32em] text-[#2f6fe4]">Team</p>
                  <p className="mt-2 text-lg sm:text-xl font-semibold text-[#121212]">10+ members</p>
                </div>
                <div className="rounded-2xl bg-[#fff1ea] p-4">
                  <p className="text-[11px] uppercase tracking-widest sm:tracking-[0.32em] text-[#e85a1f]">Budget</p>
                  <p className="mt-2 text-lg sm:text-xl font-semibold text-[#121212]">₦720K managed</p>
                </div>
                <div className="rounded-2xl bg-[#eef4ff] p-4">
                  <p className="text-[11px] uppercase tracking-widest sm:tracking-[0.32em] text-[#2f6fe4]">Revenue</p>
                  <p className="mt-2 text-lg sm:text-xl font-semibold text-[#121212]">₦525K tracked</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-black/10 bg-white p-5 shadow-[0_24px_80px_rgba(17,17,17,0.06)] md:p-8">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.5rem] bg-[#fff7f2] p-5">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#e85a1f]">Role</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#121212]">Execution lead</p>
              <p className="mt-3 text-sm leading-7 text-black/62">I owned the operational details, partner alignment, and attendee experience.</p>
            </div>
            <div className="rounded-[1.5rem] bg-[#f5f8ff] p-5">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#2f6fe4]">Format</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#121212]">VIP campus event</p>
              <p className="mt-3 text-sm leading-7 text-black/62">Designed to feel controlled, elevated, and worth paying for.</p>
            </div>
            <div className="rounded-[1.5rem] bg-[#fff7f2] p-5">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#e85a1f]">Partnership</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#121212]">NACOS collaboration</p>
              <p className="mt-3 text-sm leading-7 text-black/62">Promotion, access, and audience distribution were handled through the chapter.</p>
            </div>
            <div className="rounded-[1.5rem] bg-[#f5f8ff] p-5">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#2f6fe4]">Output</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#121212]">Structured delivery</p>
              <p className="mt-3 text-sm leading-7 text-black/62">Budget control, VIP segmentation, and on-site recovery all stayed intact.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.4em] text-black/45">Context</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#121212]">What the brief required</h2>
            <p className="mt-4 text-base leading-7 text-black/62">
              The project needed more than event promotion. It needed a partnership structure, a clear VIP offer, and a delivery model that could hold up under real campus conditions.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-black/62">
              <li>Set a clear sponsorship and execution agreement with NACOS.</li>
              <li>Designed a VIP tier that felt exclusive but still operationally manageable.</li>
              <li>Protected the brand experience while keeping the event accessible to students.</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-gradient-to-br from-[#fff3ea] to-white p-8 shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
            <p className="text-[11px] uppercase tracking-[0.4em] text-black/45">Execution</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#121212]">How I kept it moving</h2>
            <div className="mt-6 space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#121212]">Financial control</h3>
                <p className="mt-2 text-sm leading-7 text-black/62">I tracked a ₦720K budget, aligned revenue to the plan, and used a structured spend sheet to avoid drift.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#121212]">Crisis response</h3>
                <p className="mt-2 text-sm leading-7 text-black/62">When a last-minute restriction affected a VIP activity, I coordinated with school authorities and resolved it within two hours.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#121212]">Team operations</h3>
                <p className="mt-2 text-sm leading-7 text-black/62">I split the work across 10+ team members and handled catering, access, and on-ground logistics without losing pace.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.8rem] border border-black/10 bg-white p-5 sm:p-7 shadow-sm">
            <h3 className="text-[10px] sm:text-[11px] uppercase tracking-widest sm:tracking-[0.35em] text-[#e85a1f]">Partnership structure</h3>
            <p className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[#121212]">Who handled what</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-black/62">
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <div className="sm:w-32 flex-shrink-0 font-semibold text-[#121212]">NACOS</div>
                <div>Audience access, campus promotion, and student distribution.</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <div className="sm:w-32 flex-shrink-0 font-semibold text-[#121212]">Campus Bestie</div>
                <div>VIP product design, event experience, and revenue structure.</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <div className="sm:w-32 flex-shrink-0 font-semibold text-[#121212]">Shared</div>
                <div>Promotion cadence, day-of coordination, and attendee communication.</div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-black/10 bg-white p-5 sm:p-7 shadow-sm">
            <h3 className="text-[10px] sm:text-[11px] uppercase tracking-widest sm:tracking-[0.35em] text-[#2f6fe4]">Operational stack</h3>
            <p className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[#121212]">The systems behind the event</p>
            <p className="mt-3 text-sm leading-7 text-black/62">
              I used lightweight tools to keep the event moving, especially for budget tracking, task ownership, and team communication.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-black/10 bg-[#fff7f2] px-3 py-1 text-xs sm:text-sm font-medium text-[#7a3414]">Google Sheets</span>
              <span className="rounded-full border border-black/10 bg-[#eef4ff] px-3 py-1 text-xs sm:text-sm font-medium text-[#1f4ea9]">Excel</span>
              <span className="rounded-full border border-black/10 bg-[#fff7f2] px-3 py-1 text-xs sm:text-sm font-medium text-[#7a3414]">Budget control</span>
              <span className="rounded-full border border-black/10 bg-[#eef4ff] px-3 py-1 text-xs sm:text-sm font-medium text-[#1f4ea9]">Timeline planning</span>
              <span className="rounded-full border border-black/10 bg-[#fff7f2] px-3 py-1 text-xs sm:text-sm font-medium text-[#7a3414]">WhatsApp coordination</span>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-black/45">Outcome</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#121212]">Attendance</h3>
              <p className="mt-3 text-sm leading-7 text-black/62">The activation brought in roughly 224 attendees and gave the VIP tier enough presence to feel premium.</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-black/45">Outcome</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#121212]">Financial discipline</h3>
              <p className="mt-3 text-sm leading-7 text-black/62">I balanced ₦525K in revenue against the ₦720K budget and kept the project sustainable rather than chaotic.</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-black/45">Outcome</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#121212]">Growth signal</h3>
              <p className="mt-3 text-sm leading-7 text-black/62">The event created organic social sharing and a follower lift of roughly 200 to 400 on TikTok.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.8rem] border border-[#ffe7dc] bg-[#fff7f2] p-7 shadow-sm">
            <h3 className="text-[11px] uppercase tracking-[0.35em] text-[#e85a1f]">Core strengths</h3>
            <p className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[#121212]">What this project proves</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-black/62">
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[#e85a1f]" />I can structure partnerships that are clear enough to execute under pressure.</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[#e85a1f]" />I can turn a student activation into an experience with pricing, access, and brand control.</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[#e85a1f]" />I can absorb last-minute issues without letting attendee experience collapse.</li>
            </ul>
          </div>

          <div className="rounded-[1.8rem] border border-[#dfe8ff] bg-[#f5f8ff] p-7 shadow-sm">
            <h3 className="text-[11px] uppercase tracking-[0.35em] text-[#2f6fe4]">Project takeaways</h3>
            <p className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[#121212]">The short version</p>
            <p className="mt-4 text-sm leading-7 text-black/62">
              Campus Bestie shows how I approach live projects: start with a partnership model, define the product, keep the numbers honest, and stay calm when the event changes in real time.
            </p>
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
