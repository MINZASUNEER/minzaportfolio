import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const CONTACTS = [
  { icon: Mail, label: 'fathimaminzasuneer.mec@gmail.com', href: 'mailto:fathimaminzasuneer.mec@gmail.com' },
  { icon: Phone, label: '+91 98465 40103', href: 'tel:+919846540103' },
  { icon: MapPin, label: 'Kochi, Kerala, India', href: undefined },
]

const SOCIALS = [
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
]

export function ContactFooter() {
  return (
    <footer id="contact" className="mx-auto mt-24 max-w-6xl px-5 pb-10 md:mt-32 md:px-8">
      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid gap-10 p-8 md:grid-cols-2 md:p-14">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Let&apos;s Connect
            </p>
            <h2 className="text-balance font-display text-5xl leading-[0.9] md:text-7xl">
              Let&apos;s Build
              <br />
              Something
            </h2>
            <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              I&apos;m open to internships and collaborations. Have a project in mind or just want to
              say hi? My inbox is always open.
            </p>

            <a
              href="mailto:fathimaminzasuneer.mec@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-90"
            >
              Say Hello
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <ul className="space-y-4">
              {CONTACTS.map((item) => {
                const content = (
                  <>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border">
                      <item.icon className="size-4" strokeWidth={1.5} />
                    </span>
                    <span className="text-sm text-foreground">{item.label}</span>
                  </>
                )
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {social.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-border px-8 py-5 text-xs text-muted-foreground sm:flex-row md:px-14">
          <span>© 2026 Fathima Minza Suneer. All rights reserved.</span>
          <span className="uppercase tracking-[0.14em]">Computer Science Engineer</span>
        </div>
      </div>
    </footer>
  )
}
