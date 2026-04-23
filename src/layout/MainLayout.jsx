import Sidebar from '../components/Sidebar/Sidebar'
import MobileNavbar from '../components/MobileNavbar/MobileNavbar'
import styles from './MainLayout.module.css'

function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
      <MobileNavbar />
    </div>
  )
}
export default MainLayout
