import { GraduationCap } from 'lucide-react'
import { education } from '../data/profile'
import Section from './ui/Section'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education">
      <article className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-sky-300">
            <GraduationCap size={20} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-zinc-50">{education.degree}</h3>
            <p className="mt-1 text-sm text-zinc-400">{education.school}</p>
          </div>
        </div>
        <dl className="flex gap-8 sm:text-right">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              Years
            </dt>
            <dd className="mt-1 text-sm text-zinc-200">{education.period}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              CGPA
            </dt>
            <dd className="mt-1 text-sm text-zinc-200">{education.cgpa}</dd>
          </div>
        </dl>
      </article>
    </Section>
  )
}
