import MenuSection from './MenuSection/MenuSection'
import styles from './header.module.scss';
import Links from '../Links/Links';

export default function Header () {
  return(
    <header className={styles.header}>
      <div className={styles.menuSections}>
        <Links url="/">Aleksandra Babenko</Links>
      </div>
    </header>
  )
}