"use client";

import styles from './HeroSection.module.scss';
import HeroCard from './HeroCard';
import { items } from './items';
import { v4 as uuidv4 } from 'uuid';


export default function HeroSection () {

  return(
    <section className={styles.container}>
       {items.map((item) => {
          return <HeroCard key={uuidv4()} item={item} />;
        })}
    </section>
  )
}