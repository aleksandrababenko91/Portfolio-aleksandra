import styles from '../HeroSection/HeroSection.module.scss';


export default function HeroCard({item}) {
  const { img, role, name } = item;
  return(
      <div className={styles.cardContainer}>
        <div className={styles.image} >
          <img src={img}  className={styles.img} alt="photo_8"/>
        </div>
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