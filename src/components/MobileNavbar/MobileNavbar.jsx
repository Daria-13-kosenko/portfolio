import { House, User, BriefcaseBusiness, Layers3, Mail } from 'lucide-react'
import styles from './MobileNavbar.module.css'

const navItems = [
  { id: 'home', icon: House, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'projects', icon: BriefcaseBusiness, label: 'Projects' },
  { id: 'stack', icon: Layers3, label: 'Stack' },
  { id: 'contact', icon: Mail, label: 'Contact' },
]

export default function MobileNavbar() {
  return (
    <nav className={styles.mobileNavbar}>
      {navItems.map(({ id, icon: Icon, label }) => (
        <a key={id} href={`#${id}`} className={styles.navItem} aria-label={label}>
          <Icon size={20} />
        </a>
      ))}
    </nav>
  )
}