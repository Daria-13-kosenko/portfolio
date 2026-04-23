import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.kicker}>Mini Portfolio App</p>

        <h1 className={styles.title}>
          Hi, I’m <span>Daria Kosenko</span>
        </h1>

        <h2 className={styles.subtitle}>
          Frontend / Full-Stack Developer creating soft, modern and responsive
          web experiences
        </h2>

        <p className={styles.description}>
          I build user-friendly interfaces with React, connect frontend to
          backend APIs, and turn ideas into clean, working web applications with
          thoughtful UI and real functionality.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryBtn}>
            View Projects
          </a>

          <a href="#contact" className={styles.secondaryBtn}>
            Contact Me
          </a>
        </div>
      </div>

      <div className={styles.cards}>
        <div className={`${styles.infoCard} ${styles.pinkCard}`}>
          <p className={styles.cardLabel}>Focus</p>
          <h3 className={styles.cardTitle}>Frontend + Full-Stack</h3>
          <p className={styles.cardText}>
            Responsive interfaces, API integration, auth flows, layouts and
            product-style UI.
          </p>
        </div>

        <div className={`${styles.infoCard} ${styles.blueCard}`}>
          <p className={styles.cardLabel}>Based in</p>
          <h3 className={styles.cardTitle}>Germany</h3>
          <p className={styles.cardText}>
            Open to internship, junior roles and practical projects with real
            growth.
          </p>
        </div>

        <div className={`${styles.infoCard} ${styles.greenCard}`}>
          <p className={styles.cardLabel}>Goal</p>
          <h3 className={styles.cardTitle}>Build products, not just pages</h3>
          <p className={styles.cardText}>
            I want to create interfaces that feel polished, useful and ready for
            real users.
          </p>
        </div>
      </div>

      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>
    </section>
  )
}
