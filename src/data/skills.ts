import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    icon: 'languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend Development',
    icon: 'frontend',
    items: ['React.js'],
  },
  {
    title: 'Backend Development',
    icon: 'backend',
    items: ['Node.js', 'Express.js', 'Spring Boot', 'RESTful APIs'],
  },
  {
    title: 'Databases and ORM',
    icon: 'database',
    items: ['PostgreSQL', 'MySQL', 'SQL', 'Prisma ORM'],
  },
  {
    title: 'Cloud and DevOps',
    icon: 'cloud',
    items: [
      'AWS EC2',
      'IAM',
      'Security Groups',
      'AWS CLI',
      'Docker',
      'Jenkins',
      'Kubernetes',
      'Terraform',
      'CI/CD',
    ],
  },
  {
    title: 'Developer Tools',
    icon: 'tools',
    items: ['Git', 'GitHub', 'Linux', 'Ubuntu', 'WSL2', 'Maven'],
  },
  {
    title: 'Computer Science Fundamentals',
    icon: 'fundamentals',
    items: [
      'Object-Oriented Programming',
      'Data Structures and Algorithms',
      'DBMS',
      'Debugging',
      'Testing',
      'SDLC',
    ],
  },
  {
    title: 'AI and Developer Tools',
    icon: 'ai',
    items: ['Google Gemini API', 'GitHub Copilot', 'Claude'],
  },
]
