import { ArrowUpRight, Download, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[calc(100vh-65px)] flex flex-col justify-between overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16"
    >
      {/* Background ambient lighting & cinematic glows */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.05),transparent_75%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-5 sm:px-8 md:px-12">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border/40 pb-5 pt-1">
          <div className="flex items-center gap-3">
            <span className="flex size-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div className="flex flex-col">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
                Creative Portfolio
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/90 sm:text-sm">
                Engineering & Code
              </span>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <span className="block text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted-foreground sm:text-xs">
              MEC Kochi · Class of 2026
            </span>
            <span className="block font-display font-bold uppercase tracking-wider text-foreground text-xl sm:text-2xl md:text-3xl lg:text-[2rem] leading-none drop-shadow-sm">
              Fathima Minza Suneer
            </span>
          </div>
        </div>

        {/* Centerpiece: Side-Aligned, High-Visibility SOFTWARE & DEVELOPER flanking the Photo */}
        <div className="relative my-auto w-full py-6 sm:py-10">
          <div className="grid items-center justify-items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 xl:gap-12">
            {/* Left Side: SOFTWARE (High visibility & crisp alignment) */}
            <div className="w-full text-center lg:text-right">
              <span className="mb-2 hidden lg:inline-block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                Engineering Focus
              </span>
              <h1 className="font-display uppercase tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-[5.25rem] xl:text-[6.75rem] 2xl:text-[7.5rem] leading-[0.88] text-foreground drop-shadow-sm select-none">
                Software
              </h1>
              <p className="mt-2 hidden lg:block text-xs uppercase tracking-[0.2em] text-muted-foreground/80">
                Full-Stack · Systems · AI
              </p>
            </div>

            {/* Central Portrait with Glow Halo and Glass Badges */}
            <div className="relative z-10 mx-auto flex shrink-0 items-center justify-center">
              {/* Ambient Backlight Halo behind the photo */}
              <div
                className="absolute -inset-6 sm:-inset-8 rounded-full bg-gradient-to-tr from-cyan-500/25 via-indigo-500/25 to-purple-500/25 blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Portrait Box */}
              <div className="group relative w-52 sm:w-60 md:w-68 lg:w-72 xl:w-80 aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-card/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-white/30">
                <img
                  src="/minza.jpeg"
                  alt="Fathima Minza Suneer"
                  className="size-full object-cover object-top filter contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
                />
                {/* Soft bottom vignette overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent"
                  aria-hidden="true"
                />

                {/* In-Frame Floating Glass Badge: Tech Focus */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-white/95 backdrop-blur-md shadow-md">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Full-Stack & AI
                </div>
              </div>

              {/* Floating Glass Pill Badge (Right bottom overlap) */}
              <div className="hidden sm:inline-flex absolute -bottom-3 -right-4 lg:-right-6 z-20 items-center gap-2 rounded-2xl border border-border/80 bg-background/90 px-3.5 py-2 shadow-xl backdrop-blur-md">
                <div className="flex size-6 items-center justify-center rounded-lg bg-foreground text-background font-bold text-xs">
                  ⚡
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-foreground">
                    Available for Roles
                  </span>
                  <span className="text-[0.55rem] text-muted-foreground">
                    Open to Opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: DEVELOPER (High visibility & crisp alignment) */}
            <div className="w-full text-center lg:text-left">
              <span className="mb-2 hidden lg:inline-block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                Craft & Architecture
              </span>
              <h1 className="font-display uppercase tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-[5.25rem] xl:text-[6.75rem] 2xl:text-[7.5rem] leading-[0.88] text-foreground/90 drop-shadow-sm select-none">
                Developer
              </h1>
              <p className="mt-2 hidden lg:block text-xs uppercase tracking-[0.2em] text-muted-foreground/80">
                Clean Code · Real Impact
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Dual Columns */}
        <div className="grid gap-6 border-t border-border/40 pt-6 sm:grid-cols-2 sm:items-end sm:gap-10">
          {/* Bottom Left: Bio Description */}
          <div>
            <p className="max-w-md text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm">
              <strong className="font-bold text-foreground">Fathima Minza Suneer</strong> — Computer Science Engineering student at <strong className="font-semibold text-foreground">Model Engineering College, Kochi</strong>. Building full-stack web applications and AI-driven platforms with clean code and modern aesthetics.
            </p>
            <div className="mt-3 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground/80">
              <MapPin className="size-3.5 text-foreground" />
              <span>Kochi, Kerala, India</span>
            </div>
          </div>

          {/* Bottom Right: Action CTAs */}
          <div className="flex flex-wrap items-center justify-start gap-3 sm:justify-end">
            <a
              href="/minza-suneer-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-background transition-all hover:opacity-90 hover:scale-[1.03] active:scale-[0.98] shadow-lg"
            >
              View Resume
              <Download className="size-3.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground backdrop-blur-sm transition-all hover:bg-secondary hover:border-foreground/30 hover:scale-[1.03] active:scale-[0.98]"
            >
              Get In Touch
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
