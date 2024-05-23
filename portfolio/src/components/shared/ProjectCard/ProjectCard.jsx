import styles from './ProjectCard.module.scss';
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard ({item}) {
  const { img, title, description, link, width, height } = item;
  
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <Image 
        className={styles.image}
        src={img}
        width={width}
        height={height}
        alt={title}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <Link
          className={styles.linkRead}
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        > Paina 
        </Link>
      </div>
    </div>

  )
}