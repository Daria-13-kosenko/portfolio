import SectionTitle from '../../components/SectionTitle/SectionTitle'
import styles from './Stack.module.css'

const stackGroups = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    title: 'State & Routing',
    items: ['Redux Toolkit', 'Context API', 'React Router'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'JWT', 'Multer', 'Axios'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'Vite', 'Figma'],
  },
]

export default function Stack() {
  return (
    <section id="stack" className={styles.stack}>
      <SectionTitle
        label="Stack"
        title="Technologies I work with"
        description="A practical toolkit I use to build responsive interfaces, connect frontend with backend services and create real working applications."
      />

      <div className={styles.grid}>
        {stackGroups.map((group) => (
          <article key={group.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{group.title}</h3>

            <div className={styles.tags}>
              {group.items.map((item) => (
                <span key={item} className={styles.tag}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
