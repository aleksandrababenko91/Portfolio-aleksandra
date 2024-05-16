import styles from './cvCard.module.scss';

import Link from "next/link";

export default function CvCard({ item }) {

  const downloadPdf = () => {
    window.open(item.url, '_blank');
  };

  const { img, title, text, width, height} = item;

  return (
    <div className={styles.cardStyle}>
      <div className={styles.cardWrapper}>
        <img
          className={styles.svgWrapper}
          src={img}
          width={width}
          height={height}
          alt={title}
          onClick={downloadPdf}
        />
      </div>
      <div className={styles.textCard}>
        <button className={styles.text} onClick={downloadPdf}>{text}</button>
      </div>
    </div>
  );
}