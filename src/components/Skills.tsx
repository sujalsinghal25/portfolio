import {
  Braces,
  Cloud,
  Database,
  GraduationCap,
  LayoutTemplate,
  Server,
  Sparkles,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { skillGroups } from '../data/skills'
import type { SkillIcon } from '../types'
import Section from './ui/Section'

const icons: Record<SkillIcon, LucideIcon> = {
  languages: Braces,
  frontend: LayoutTemplate,
  backend: Server,
  database: Database,
  cloud: Cloud,
  tools: Wrench,
  fundamentals: GraduationCap,
  ai: Sparkles,
}

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon]
          return (
            <div
              key={group.title}
              className="card p-5 transition-colors hover:border-zinc-700"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-sky-300">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h3 className="text-sm font-semibold text-zinc-100">{group.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
