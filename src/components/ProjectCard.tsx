import { ExternalLink as ExternalLinkIcon } from 'lucide-react'
import type { Project } from '../types'
import ExternalLink from './ui/ExternalLink'
import { GithubIcon } from './ui/icons'
import PipelineFlow from './ui/PipelineFlow'

export default function ProjectCard({ project }: { project: Project }) {
  const titleId = `project-${project.id}`
  return (
    <article
      aria-labelledby={titleId}
      className="card flex h-full min-w-0 flex-1 flex-col p-6 transition-colors hover:border-zinc-700"
    >
      <header>
        {project.badge && (
          <span className="mb-3 inline-block rounded-full border border-zinc-700 px-2.5 py-0.5 text-xs text-zinc-400">
            {project.badge}
          </span>
        )}
        <h3 id={titleId} className="text-lg font-semibold leading-snug text-zinc-50">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-sky-300">{project.tagline}</p>
        {project.note && (
          <p className="mt-2 text-xs leading-relaxed text-zinc-500">{project.note}</p>
        )}
      </header>

      <p className="mt-4 text-sm leading-relaxed text-zinc-400">{project.summary}</p>

      <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          {project.contributionTitle}
        </h4>
        <ul className="mt-3 space-y-2">
          {project.contribution.map((c) => (
            <li key={c} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
              <span
                className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-300"
                aria-hidden="true"
              />
              {c}
            </li>
          ))}
        </ul>
      </div>

      {project.workflow && (
        <div className="mt-5">
          <PipelineFlow label={project.workflow.label} steps={project.workflow.steps} />
        </div>
      )}

      {project.screenshots && project.screenshots.length > 0 && (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {project.screenshots.map((s) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              loading="lazy"
              className="w-full rounded-lg border border-zinc-800"
            />
          ))}
        </div>
      )}

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {project.tech.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        {project.repoUrl ? (
          <ExternalLink
            href={project.repoUrl}
            className="btn-secondary"
            aria-label={`${project.repoLabel ?? 'View on GitHub'}: ${project.name} (opens in a new tab)`}
          >
            <GithubIcon className="h-4 w-4" />
            {project.repoLabel ?? 'View on GitHub'}
          </ExternalLink>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-zinc-700 px-4 py-2.5 text-sm text-zinc-500">
            <GithubIcon className="h-4 w-4" />
            Repository link coming soon
          </span>
        )}
        {project.liveUrl && (
          <ExternalLink
            href={project.liveUrl}
            className="btn-primary"
            aria-label={`Live demo: ${project.name} (opens in a new tab)`}
          >
            <ExternalLinkIcon size={16} aria-hidden="true" />
            Live demo
          </ExternalLink>
        )}
      </div>
    </article>
  )
}
