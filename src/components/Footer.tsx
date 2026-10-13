import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, and
          Tailwind CSS.
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 rounded-md text-zinc-400 hover:text-sky-300"
        >
          Back to top
          <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
