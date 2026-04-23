import styles from './ProjectCard.module.css'

export default function ProjectCard({
  role,
  title,
  description,
  tech = [],
  demoLink = '#',
  githubLink = '#',
  variant = 'pink',
}) {
  return (
    <article className={styles.card}>
      <div className={`${styles.top} ${styles[variant]}`}></div>

      <div className={styles.content}>
        <p className={styles.role}>{role}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.tags}>
          {tech.map((item) => (
            <span key={item} className={styles.tag}>
              {item}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          <a
            href={demoLink}
            className={styles.primaryBtn}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>

          <a
            href={githubLink}
            className={styles.secondaryBtn}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}
