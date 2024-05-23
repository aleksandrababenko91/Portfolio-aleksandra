import styles from './HistoryCard.module.scss';

export default function HistoryCard({item, isOdd}) {
  const { position, date, description } = item;
  return (
    <div className={styles.item} data-aos={isOdd ? "fade-left" : "fade-right"}>

       <div className={styles.date}>
         {date}
       </div>
       <div className={styles.position}>
         {position}
       </div>
       <div className={styles.description}>
         {description}
       </div>


    </div>
  )
}