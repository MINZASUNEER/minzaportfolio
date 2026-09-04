import { GraduationCap, Award, Briefcase } from 'lucide-react'

const TOOLS = [
  'Python',
  'C',
  'C++',
  'TypeScript',
  'React.js',
  'FastAPI',
  'Flask',
  'SQL',
  'HTML',
  'Tailwind CSS',
  'Supabase',
  'MongoDB',
  'ChromaDB',
  'Flutter / Dart',
]

const TIMELINE = [
  {
    icon: Briefcase,
    title: 'Intern — Groop Games',
    meta: 'Ongoing',
    detail:
      'Developing a high-performance trick-taking puzzle game with a dual-solver architecture (DDS + Dart Minimax) for sub-millisecond solutions. Flutter, Dart, C++ (FFI), SQLite.',
  },
  {
    icon: GraduationCap,
    title: 'B.Tech in Computer Science Engineering',
    meta: 'Govt. Model Engineering College, Kochi (KTU) · 2027',
    detail: 'CGPA 8.48. Higher Secondary: 98.3% (2021). SSLC: 100% (2019).',
  },
  {
    icon: Award,
    title: 'Data Science for Engineers',
    meta: 'NPTEL · IIT Madras',
    detail: 'Certification covering the fundamentals of data science and analytics for engineers.',
  },
]

export function ToolsEducation() {
  return (
    <section id="about" className="mx-auto mt-24 max-w-6xl px-5 md:mt-32 md:px-8">
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Tools */}
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <p className="mb-6 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Tools &amp; Technologies
          </p>
          <ul className="flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground"
              >
                {tool}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-pretty text-sm leading-relaxed text-muted-foreground">
            Beyond code, I care about communication, teamwork and problem solving — and off-screen
            you&apos;ll find me reading or doing henna art.
          </p>
        </div>

        {/* Timeline */}
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <p className="mb-6 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Experience &amp; Education
          </p>
          <ol className="space-y-6">
            {TIMELINE.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border">
                  <item.icon className="size-4" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-base font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.1em] text-muted-foreground">
                    {item.meta}
                  </p>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
