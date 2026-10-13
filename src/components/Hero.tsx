import { ArrowRight, Download, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import ExternalLink from './ui/ExternalLink'
import { GithubIcon, LinkedinIcon } from './ui/icons'

const glance = [
  'B.Tech Computer Science and Engineering, UPES Dehradun (2027)',
  'Backend APIs, databases, and full-stack development',
  'Jenkins, Docker, and AWS deployment workflows',
  'AWS Certified Solutions Architect – Associate',
]

export default function Hero() {
  return (
    <section id="top" className="pb-10 pt-28 sm:pb-14 sm:pt-32">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="animate-fade-up">
          <p className="font-mono text-sm text-sky-300">Hi, I&apos;m</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
            {profile.name} <span className="text-zinc-500">—</span>{' '}
            <span className="bg-gradient-to-r from-sky-200 to-violet-300 bg-clip-text text-transparent">
              {profile.headline}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={16} aria-hidden="true" />
              Contact Me
            </a>
            {__HAS_RESUME__ && (
              <a href={profile.resumePath} download className="btn-secondary">
                <Download size={16} aria-hidden="true" />
                Resume
              </a>
            )}
          </div>

          <div className="mt-6 flex items-center gap-2">
            <ExternalLink
              href={profile.github}
              aria-label="GitHub profile (opens in a new tab)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-100"
            >
              <GithubIcon className="h-5 w-5" />
            </ExternalLink>
            <ExternalLink
              href={profile.linkedin}
              aria-label="LinkedIn profile (opens in a new tab)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-100"
            >
              <LinkedinIcon className="h-5 w-5" />
            </ExternalLink>
          </div>
        </div>

        <aside
          aria-label="At a glance"
          className="card animate-fade-up p-6"
          style={{ animationDelay: '120ms' }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            At a glance
          </p>
          <ul className="mt-4 space-y-3">
            {glance.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                <span
                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-300"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
