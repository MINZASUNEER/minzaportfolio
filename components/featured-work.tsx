import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    title: 'AI Text-to-SQL Assistant',
    type: 'Individual Project',
    tag: 'AI · Full-Stack',
    description:
      'Converts natural language into executable SQL using Google Gemini, with a RAG pipeline (ChromaDB + Sentence Transformers) for schema retrieval, a FastAPI backend with SQL safety validation, and a React frontend.',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Gemini', 'RAG', 'ChromaDB'],
  },
  {
    title: 'Disaster Management & Resource Allocation',
    type: 'Team Project · 4 Members',
    tag: 'Full-Stack Platform',
    description:
      'A disaster relief coordination platform with real-time tracking of victim requests, volunteer assignments, and resource distribution, plus role-based dashboards for transparent response monitoring.',
    stack: ['React', 'Tailwind CSS', 'Supabase', 'HTML'],
  },
  {
    title: 'AI Handwritten Answer Evaluation',
    type: 'Team Project · 3 Members',
    tag: 'AI · OCR',
    description:
      'Semi-automated answer evaluation that digitizes handwritten scripts via OCR and grades descriptive responses with Generative AI, giving mark suggestions with justifications and secure role-based access.',
    stack: ['React', 'Flask', 'MongoDB', 'OCR', 'Gemini 2.0', 'JWT'],
  },
]

export function FeaturedWork() {
  return (
    <section id="work" className="mx-auto mt-24 max-w-6xl px-5 md:mt-32 md:px-8">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Selected Projects
          </p>
          <h2 className="font-display text-4xl leading-none md:text-6xl">Featured Work</h2>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-secondary"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <span className="rounded-full border border-border px-3 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                {project.tag}
              </span>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border transition-colors group-hover:bg-foreground group-hover:text-background">
                <ArrowUpRight className="size-4" />
              </span>
            </div>

            <h3 className="text-balance text-xl font-semibold leading-tight">{project.title}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {project.type}
            </p>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-muted px-2 py-1 text-[0.7rem] text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
