import styles from '../HeroSection/HeroSection.module.scss';
import Image from 'next/image';

export default function HeroCard({item}) {
  const { img, role, name } = item;
  return(
      <div className={styles.cardContainer}>
        <div className={styles.image} >
          <Image src={img} width={200} height={200} alt="photo_8" priority/>
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