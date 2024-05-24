import styles from '../HeroSection/HeroSection.module.scss';

export default function HeroCard({item}) {
  const { img, role, name } = item;
  return(
      <div className={styles.cardContainer}>
      <img className={styles.image} src={img}  />
      <div className={styles.text}>
        <div className={styles.name}>
          {name}
        </div>
        <div className={styles.role}>
          {role}
        </div>
      </div>
    </div>

  )
}