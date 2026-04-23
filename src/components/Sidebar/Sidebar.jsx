import { House, User, BriefcaseBusiness, Layers3, Mail } from 'lucide-react'
import styles from './Sidebar.module.css'

const navItems = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: BriefcaseBusiness },
  { id: 'stack', label: 'Stack', icon: Layers3 },
  { id: 'contact', label: 'Contact', icon: Mail },
]

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.logoBox}>
          <p className={styles.kicker}>Portfolio</p>
          <h2 className={styles.logo}>Daria Kosenko</h2>
          <p className={styles.role}>Frontend / Full-Stack Developer</p>
        </div>

        <nav className={styles.nav}>
          {navItems.map(({ id, label, icon: Icon }) => (
            <a key={id} href={`#${id}`} className={styles.navItem}>
              <span className={styles.icon}>
                <Icon size={20} />
              </span>
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className={styles.bottomCard}>
        <p className={styles.bottomTitle}>Open to work</p>
        <p className={styles.bottomText}>Internship • Junior Role • Frontend Projects</p>
      </div>
    </aside>
  )
}
export default Sidebar
