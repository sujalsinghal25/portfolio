import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  const headingId = `${id}-heading`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-t border-zinc-900 py-14 sm:py-20"
    >
      <div className="container-page">
        <p className="font-mono text-xs uppercase tracking-widest text-sky-300">
          {eyebrow}
        </p>
        <h2
          id={headingId}
          className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
        >
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
