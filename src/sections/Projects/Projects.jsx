import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import styles from './Projects.module.css'

const projects = [
  {
    role: 'Full-Stack Developer',
    title: 'Instagram Clone',
    description:
      'Built a social media web app with authentication, posts, likes, comments, profile editing, notifications and a responsive user interface.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io'],
    demoLink: 'https://clone-instagram-ww2q.vercel.app',
    githubLink: 'https://github.com/Daria-13-kosenko/clone_instagram',
    variant: 'pink',
  },
  {
    role: 'Frontend Developer',
    title: 'Pet Shop Store',
    description:
      'Created a responsive e-commerce interface with category pages, product cards, cart logic, sales pages and backend API integration.',
    tech: ['React', 'Redux Toolkit', 'REST API', 'CSS Modules'],
    demoLink: 'https://pet-shop-project-ten.vercel.app',
    githubLink: 'https://github.com/Daria-13-kosenko/Pet-Shop-Project',
    variant: 'blue',
  },
  {
    role: 'Frontend Developer',
    title: 'Auth & Registration Project',
    description:
      'Implemented registration and login flows, form validation, localStorage logic and reusable UI states for a clean user experience.',
    tech: ['JavaScript', 'HTML', 'CSS', 'localStorage'],
    demoLink: 'https://auth-hw-six.vercel.app',
    githubLink: 'https://github.com/Daria-13-kosenko/auth_hw',
    variant: 'green',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <SectionTitle
        label="Projects"
        title="Selected work"
        description="A small showcase of interfaces, integrations and full-stack features I have already implemented in real projects."
      />

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
