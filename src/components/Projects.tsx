import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Section from './ui/Section'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Projects">
      <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          // On tablet (2 columns) the odd third card spans the full row so the grid stays balanced.
          <li key={p.id} className="flex md:max-xl:last:col-span-2">
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
