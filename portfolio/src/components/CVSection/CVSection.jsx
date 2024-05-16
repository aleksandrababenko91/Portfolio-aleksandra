"use client";

import CvCard from "./CvCard/CvCard";
import styles from "./cvSection.module.scss";
import { items } from "./items";
import { v4 as uuidv4 } from 'uuid';

export default function CVSection() {

  return (
    <section className={styles.mainContainer}>
      <div className={styles.centerContainer}>
      <div className={styles.text}>
        <p>{items.title}</p>
      </div>
      <div className={styles.cardContainer}>
        {items.map((item) => {
          return <CvCard key={uuidv4()} item={item} />;
        })}
      </div>
      </div>
    </section>
  );
}