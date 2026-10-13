import { Briefcase } from 'lucide-react'
import { experience } from '../data/experience'
import Section from './ui/Section'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Experience">
      <ol className="relative space-y-6 border-l border-zinc-800 pl-6 sm:pl-8">
        {experience.map((item) => (
          <li key={`${item.company}-${item.role}`} className="relative">
            <span
              className="absolute -left-[2.15rem] top-6 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 text-sky-300 sm:-left-[2.65rem]"
              aria-hidden="true"
            >
              <Briefcase size={12} />
            </span>
            <article className="card p-6">
              <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-50">{item.role}</h3>
                  <p className="text-sm text-sky-300">{item.company}</p>
                </div>
                <p className="font-mono text-xs text-zinc-500">
                  {item.location} · {item.period}
                </p>
              </header>
              <ul className="mt-4 space-y-2.5">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                    <span
                      className="mt-2 h-1 w-1 flex-none rounded-full bg-zinc-600"
                      aria-hidden="true"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}
