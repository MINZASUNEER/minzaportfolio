const STATS = [
  { value: '8.48', label: 'CGPA — B.Tech CSE' },
  { value: '3+', label: 'Major Projects Built' },
  { value: '10+', label: 'Technologies Used' },
  { value: '1', label: 'Ongoing Internship' },
]

export function Stats() {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-5 md:mt-24 md:px-8">
      <div className="grid grid-cols-2 divide-y divide-border rounded-2xl border border-border bg-card md:grid-cols-4 md:divide-x md:divide-y-0">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2 p-6 md:p-8">
            <span className="font-display text-4xl leading-none md:text-5xl">{stat.value}</span>
            <span className="text-xs uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
