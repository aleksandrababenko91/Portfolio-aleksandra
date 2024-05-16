import MenuSection from './MenuSection/MenuSection'
import styles from './header.module.scss'

export default function Header () {
  return(
    <header className={styles.header}>
      <div className={styles.menuSections}>
        <MenuSection />
      </div>
    </header>
  )
}