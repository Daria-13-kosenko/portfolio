import SectionTitle from '../../components/SectionTitle/SectionTitle'
import styles from './About.module.css'

const highlights = [
  {
    title: 'Responsive UI',
    text: 'I create layouts that work cleanly on desktop, tablet and mobile screens.',
  },
  {
    title: 'API Integration',
    text: 'I connect frontend interfaces with backend endpoints and handle real data flows.',
  },
  {
    title: 'Authentication',
    text: 'I build login and registration flows with protected routes and user state logic.',
  },
  {
    title: 'Problem Solving',
    text: 'I debug routes, deployment issues, UI bugs and improve application structure.',
  },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.left}>
        <SectionTitle
          label="About me"
          title="From learning fast to building real interfaces."
          description="I’m a junior developer with hands-on experience in React, JavaScript, Node.js, Express, MongoDB and REST APIs. I enjoy turning layouts into responsive pages, connecting frontend to backend logic and polishing the user experience."
        />

        <p className={styles.text}>
          I have already built practical training and portfolio projects
          including a full-stack Instagram clone and an e-commerce app. My goal
          is to keep growing through real product work, thoughtful UI decisions
          and strong frontend architecture.
        </p>
      </div>

      <div className={styles.right}>
        {highlights.map((item) => (
          <article key={item.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
