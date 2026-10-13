import { about } from '../data/profile'
import Section from './ui/Section'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="About me">
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-zinc-400">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="card self-start p-6">
          <h3 className="text-sm font-semibold text-zinc-100">Focus areas</h3>
          <ul className="mt-4 space-y-3">
            {about.focus.map((f) => (
              <li key={f} className="flex gap-3 text-sm text-zinc-400">
                <span
                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-300"
                  aria-hidden="true"
                />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
