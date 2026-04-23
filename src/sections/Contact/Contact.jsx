import SectionTitle from '../../components/SectionTitle/SectionTitle'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.content}>
        <SectionTitle
          label="Contact"
          title="Let’s build something beautiful."
          description="I’m open to internships, junior frontend roles and practical projects where I can grow, contribute and keep building real products."
        />

        <div className={styles.actions}>
          <a
            href="mailto:dasha.milkaaa@gmail.com"
            className={styles.primaryBtn}
          >
            Email Me
          </a>

          <a
            href="https://github.com/Daria-13-kosenko"
            target="_blank"
            rel="noreferrer"
            className={styles.secondaryBtn}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
