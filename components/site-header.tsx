import { ArrowUpRight } from 'lucide-react'

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 md:px-12">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Fathima Minza Suneer home">
          <span className="flex size-8 items-center justify-center rounded-md border border-border bg-card/60 font-display text-sm leading-none text-foreground">
            FM
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            Minza Suneer
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition-all hover:bg-foreground hover:text-background"
        >
          Let&apos;s Talk
          <ArrowUpRight className="size-3" />
        </a>
      </div>
    </header>
  )
}
