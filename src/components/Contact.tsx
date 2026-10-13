import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import Section from './ui/Section'
import ExternalLink from './ui/ExternalLink'
import { GithubIcon, LinkedinIcon } from './ui/icons'

const cardClass =
  'card group flex items-center justify-between gap-4 p-5 transition-colors hover:border-zinc-600'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <p className="max-w-xl text-base leading-relaxed text-zinc-400">
        I am open to software developer and SDE fresher opportunities. The quickest way to
        reach me is by email, or you can find me on LinkedIn and GitHub.
      </p>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        <li>
          <a href={`mailto:${profile.email}`} className={cardClass}>
            <span className="flex items-center gap-3">
              <Mail size={20} className="text-sky-300" aria-hidden="true" />
              <span>
                <span className="block text-xs text-zinc-500">Email</span>
                <span className="block break-all text-sm text-zinc-100">{profile.email}</span>
              </span>
            </span>
            <ArrowUpRight
              size={16}
              className="flex-none text-zinc-600 transition-colors group-hover:text-sky-300"
              aria-hidden="true"
            />
          </a>
        </li>
        <li>
          <ExternalLink
            href={profile.linkedin}
            className={cardClass}
            aria-label="LinkedIn: sujal-singhal (opens in a new tab)"
          >
            <span className="flex items-center gap-3">
              <LinkedinIcon className="h-5 w-5 text-sky-300" />
              <span>
                <span className="block text-xs text-zinc-500">LinkedIn</span>
                <span className="block text-sm text-zinc-100">in/sujal-singhal</span>
              </span>
            </span>
            <ArrowUpRight
              size={16}
              className="flex-none text-zinc-600 transition-colors group-hover:text-sky-300"
              aria-hidden="true"
            />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            href={profile.github}
            className={cardClass}
            aria-label="GitHub: sujalsinghal25 (opens in a new tab)"
          >
            <span className="flex items-center gap-3">
              <GithubIcon className="h-5 w-5 text-sky-300" />
              <span>
                <span className="block text-xs text-zinc-500">GitHub</span>
                <span className="block text-sm text-zinc-100">sujalsinghal25</span>
              </span>
            </span>
            <ArrowUpRight
              size={16}
              className="flex-none text-zinc-600 transition-colors group-hover:text-sky-300"
              aria-hidden="true"
            />
          </ExternalLink>
        </li>
      </ul>
    </Section>
  )
}
