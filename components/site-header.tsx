import { ArrowUpRight } from 'lucide-react'

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Fathima Minza Suneer home">
          <span className="flex size-9 items-center justify-center rounded-md border border-border font-display text-lg leading-none">
            FM
          </span>
          <span className="hidden text-xs uppercase leading-tight tracking-[0.18em] text-muted-foreground sm:block">
            Fathima Minza
            <br />
            Suneer
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-background transition-opacity hover:opacity-90"
        >
          Let&apos;s Talk
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </header>
  )
}
