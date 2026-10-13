export interface Project {
  id: string
  name: string
  tagline: string
  /** Category / ownership badge next to the title, e.g. "Team Project". */
  badge?: string
  /** Optional one-line clarification shown under the tagline (e.g. team attribution). */
  note?: string
  summary: string
  contributionTitle: string
  contribution: string[]
  /** Only list technologies verified against the repository, resume, or project documentation. */
  tech: string[]
  /**
   * Repository URL. Leave undefined until a confirmed URL exists; the card then shows a
   * non-clickable "Repository link coming soon" label instead of a button.
   */
  repoUrl?: string
  /** Label for the repository button. */
  repoLabel?: string
  /** Add later: a "Live demo" button appears automatically when set. */
  liveUrl?: string
  /** Add later: screenshots appear automatically when the list is non-empty. */
  screenshots?: { src: string; alt: string }[]
  /** Optional pipeline/architecture illustration. */
  workflow?: { label: string; steps: string[] }
}

export interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export type SkillIcon =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'database'
  | 'cloud'
  | 'tools'
  | 'fundamentals'
  | 'ai'

export interface SkillGroup {
  title: string
  icon: SkillIcon
  items: string[]
}
