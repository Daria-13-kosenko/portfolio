import styles from './SectionTitle.module.css'

export default function SectionTitle({ label, title, description }) {
  return (
    <div className={styles.wrapper}>
      {label && <p className={styles.label}>{label}</p>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}
