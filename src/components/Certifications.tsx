import { Award, Flame } from 'lucide-react'
import { certifications } from '../data/profile'
import Section from './ui/Section'

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title="Certifications and achievements"
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => {
          const Icon = c.kind === 'certification' ? Award : Flame
          return (
            <li key={c.title} className="card flex items-start gap-4 p-5">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-sky-300">
                <Icon size={18} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-zinc-50">{c.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{c.detail}</p>
                {c.date && <p className="mt-2 font-mono text-xs text-zinc-500">{c.date}</p>}
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
