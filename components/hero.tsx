import { ArrowUpRight, Download } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: headline */}
          <div className="order-2 lg:order-1">
            <h1 className="font-display font-bold uppercase text-[18vw] leading-[0.82] tracking-tight sm:text-[14vw] lg:text-[9.5rem]">
              <span className="block">Fathima</span>
              <span className="block">Minza</span>
              <span className="block">Suneer</span>
            </h1>
            <p className="mt-5 font-display uppercase tracking-[0.28em] text-sm text-muted-foreground/70 sm:text-base">
              Software Developer
            </p>

            <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              A Computer Science Engineering student crafting full-stack web apps and AI-powered
              tools with clean code and thoughtful design.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/minza-suneer-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-90"
              >
                View Resume
                <Download className="size-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-secondary"
              >
                Get In Touch
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="relative order-1 lg:order-2">
            <div
              className="pointer-events-none absolute -inset-6 rounded-full border border-border/60"
              aria-hidden="true"
            />
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2rem] border border-border">
              <img
                src="/minza.jpeg"
                alt="Fathima Minza Suneer smiling with arms crossed"
                className="size-full object-cover object-top"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
