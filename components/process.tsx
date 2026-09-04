const STEPS = [
  { no: '01', title: 'Understand', detail: 'Digging into the problem, users and real constraints.' },
  { no: '02', title: 'Plan', detail: 'Turning insights into a clear structure and data model.' },
  { no: '03', title: 'Build', detail: 'Writing clean, maintainable code across the stack.' },
  { no: '04', title: 'Test', detail: 'Validating logic, edge cases and safety before shipping.' },
  { no: '05', title: 'Ship', detail: 'Deploying, refining and iterating on real feedback.' },
]

export function Process() {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-5 md:mt-32 md:px-8">
      <p className="mb-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">How I Work</p>
      <h2 className="mb-10 font-display text-4xl leading-none md:text-6xl">My Process</h2>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-5">
        {STEPS.map((step) => (
          <div key={step.no} className="flex flex-col gap-3 bg-card p-6">
            <span className="font-display text-2xl text-muted-foreground/50">{step.no}</span>
            <h3 className="text-base font-semibold">{step.title}</h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              {step.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
