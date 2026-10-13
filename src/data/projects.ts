import type { Project } from '../types'

/**
 * Project content lives here, separate from the presentation components.
 *
 * Three distinct projects:
 *  1. Automated Web App Deployment with Jenkins & AWS  (Ultimez internship, repo: my-cicd-app)
 *  2. Level Up Education                                (college team project)
 *  3. Cloud-Native CI/CD Deployment Platform            (separate project, repo link pending)
 *
 * To update a project later:
 *  - Repo link:   set `repoUrl: 'https://github.com/...'`. For project 3 this replaces the
 *                 "Repository link coming soon" label with a real button.
 *  - Live demo:   set `liveUrl: 'https://...'`  -> a "Live demo" button appears.
 *  - Screenshots: drop images in /public/screenshots and add
 *                 `screenshots: [{ src: '/screenshots/home.png', alt: 'Home page' }]`.
 *
 * Technology lists contain only items confirmed by the repository README, the resume,
 * or your own project documentation.
 */
export const projects: Project[] = [
  {
    id: 'jenkins-aws-deployment',
    name: 'Automated Web App Deployment with Jenkins & AWS',
    tagline: 'Ultimez Technology · DevOps internship project',
    badge: 'Internship Project',
    summary:
      'Implemented a CI/CD workflow that automates delivery of a Node.js/Express web app, combining Jenkins pipeline configuration, Docker-based packaging, and AWS EC2 deployment.',
    contributionTitle: 'My contribution',
    contribution: [
      'Jenkins pipeline configuration and CI/CD automation.',
      'Docker-based application packaging.',
      'AWS EC2 deployment.',
      'Troubleshooting build and deployment issues.',
      'Automating the application delivery workflow.',
    ],
    // Verified against the repository README.
    tech: [
      'Jenkins',
      'Docker',
      'AWS EC2',
      'Node.js',
      'Express.js',
      'Nginx',
      'PM2',
      'Git',
      'GitHub',
    ],
    repoUrl: 'https://github.com/sujalsinghal25/my-cicd-app',
    workflow: {
      label: 'Conceptual workflow',
      steps: [
        'Code Push',
        'Jenkins Pipeline',
        'Build and Test',
        'Docker Packaging',
        'AWS EC2 Deployment',
      ],
    },
  },
  {
    id: 'level-up-education',
    name: 'Level Up Education',
    tagline: 'AI-Powered Student Practice Platform',
    badge: 'Team Project',
    note: 'Built by a college team. The areas below are my individual contributions, not the whole platform.',
    summary:
      'Contributed to a collaborative education platform focused on AI-driven student practice, working on backend functionality, API integration, database development, and Gemini-powered features.',
    contributionTitle: 'My contribution',
    contribution: [
      'Backend development.',
      'API development and integration.',
      'PostgreSQL database functionality.',
      'Prisma ORM and schema management.',
      'Google Gemini API integration.',
    ],
    tech: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Express.js',
      'PostgreSQL',
      'Prisma ORM',
      'Google Gemini API',
    ],
    repoUrl:
      'https://github.com/pallavbharti/LevelUpEducation-AI-Driven-Practice-Platform',
    repoLabel: 'View team repository',
  },
  {
    id: 'cloud-native-cicd',
    name: 'Cloud-Native CI/CD Deployment Platform',
    tagline: 'Containerized deployment workflow on Kubernetes and AWS',
    badge: 'DevOps Project',
    summary:
      'Built a cloud-native deployment workflow for a Spring Boot REST API, covering containerization, CI/CD automation, infrastructure provisioning, and deployment.',
    contributionTitle: 'My contribution',
    contribution: [
      'Containerized a Spring Boot REST API with Docker.',
      'Automated Maven build, test, and image creation in a Jenkins pipeline.',
      'Deployed to Kubernetes using Deployments, Services, ConfigMaps, Secrets, and health checks.',
      'Provisioned AWS infrastructure with Terraform.',
    ],
    tech: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'Maven',
      'Docker',
      'Jenkins',
      'Kubernetes',
      'Terraform',
      'AWS',
    ],
    // repoUrl intentionally omitted until the repository link is confirmed.
  },
]
