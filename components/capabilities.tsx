import { Code2, Brain, Server, Database, Binary, Sparkles } from 'lucide-react'

const CAPABILITIES = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Building responsive, end-to-end web apps with React, TypeScript and modern tooling.',
  },
  {
    icon: Brain,
    title: 'AI & LLM Integration',
    description: 'Wiring up generative AI, RAG pipelines and semantic search into real products.',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'Designing FastAPI and Flask services with validation, auth and clean architecture.',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Modeling and querying data across SQL, Supabase, MongoDB and vector stores.',
  },
  {
    icon: Binary,
    title: 'DSA & Problem Solving',
    description: 'Strong foundations in data structures, algorithms and efficient C / C++ / Python.',
  },
  {
    icon: Sparkles,
    title: 'Product Thinking',
    description: 'Turning fuzzy requirements into usable, well-structured software with attention to detail.',
  },
]

export function Capabilities() {
  return (
    <section id="skills" className="mx-auto mt-24 max-w-6xl px-5 md:mt-32 md:px-8">
      <p className="mb-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
        What I Do
      </p>
      <h2 className="mb-10 font-display text-4xl leading-none md:text-6xl">Core Capabilities</h2>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map((cap) => (
          <div key={cap.title} className="flex flex-col gap-3 bg-card p-6 md:p-8">
            <cap.icon className="size-6 text-foreground" strokeWidth={1.5} />
            <h3 className="text-base font-semibold">{cap.title}</h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              {cap.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
