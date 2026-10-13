export const profile = {
  name: 'Sujal Singhal',
  role: 'Software Developer',
  headline: 'Software Developer',
  tagline:
    'Computer Science student building software applications, backend APIs, and automated cloud deployment workflows.',
  email: 'singhalsujal25@gmail.com',
  linkedin: 'https://linkedin.com/in/sujal-singhal',
  github: 'https://github.com/sujalsinghal25',
  /** The resume button only renders if this file exists in /public at build time. */
  resumePath: '/Sujal_Singhal_Resume.pdf',
} as const

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const

export const about = {
  paragraphs: [
    'I am a Computer Science and Engineering student at UPES, Dehradun, graduating in 2027. I like building software that is reliable and easy to maintain, and I enjoy the problem-solving that goes with it.',
    'Most of my work sits on the backend: REST APIs with Node.js and Express, data models in PostgreSQL with Prisma ORM, and integrations such as the Google Gemini API. On the frontend I work with React and TypeScript, most recently building reusable components for a shared design-system module during my internship at Xebia.',
    'I also care about how software ships. I have built a Jenkins CI/CD pipeline that deploys to AWS EC2, worked with Docker, and hold the AWS Certified Solutions Architect – Associate certification.',
  ],
  focus: [
    'Backend APIs and database development',
    'Full-stack work with React and TypeScript',
    'CI/CD automation and AWS deployment',
    'Data structures, algorithms, and debugging',
  ],
}

export const education = {
  degree: 'B.Tech, Computer Science and Engineering',
  school: 'University of Petroleum and Energy Studies (UPES), Dehradun',
  period: '2023 – 2027',
  cgpa: '7.44 / 10',
}

export const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    detail: 'SAA-C03 · Score 845/1000',
    date: 'August 2026',
    kind: 'certification' as const,
  },
  {
    title: '50-day LeetCode coding streak',
    detail: 'Consistent data structures and algorithms practice',
    date: '',
    kind: 'achievement' as const,
  },
]
