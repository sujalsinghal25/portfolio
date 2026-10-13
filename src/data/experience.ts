import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    role: 'DevOps Intern',
    company: 'Ultimez Technology',
    location: 'Remote',
    period: 'June – July 2026',
    bullets: [
      'Engineered a five-stage Jenkins CI/CD pipeline covering build, test, and deployment with AWS EC2.',
      'Resolved four deployment-blocking issues involving Jenkins GPG signing, Java version compatibility, EC2 SSH security-group rules, and dynamic EC2 IP changes.',
      'Configured an Ubuntu/WSL2 environment with Docker, Jenkins, Terraform, and AWS CLI.',
      'Worked across environment setup, deployment automation, testing, debugging, and delivery.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Xebia',
    location: 'Remote',
    period: 'June – July 2026',
    bullets: [
      'Built five reusable React.js and TypeScript UI components: Cards, Badges, Avatars, Tables, and Empty/Error states.',
      'Collaborated with a four-person engineering team on a shared university-dashboard frontend.',
      'Used design tokens to standardize typography, spacing, and colors and improve component reusability.',
    ],
  },
]
