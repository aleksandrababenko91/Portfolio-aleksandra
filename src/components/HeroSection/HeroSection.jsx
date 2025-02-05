"use client";

import styles from './HeroSection.module.scss';
import Image from 'next/image';
import Links from '../shared/Links/Links';

export default function HeroSection () {

  return(
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image priority  src='/images/sasha.jpeg' alt='Hero image' fill sizes = "100%" className={styles.image} /> 
      </div>
      <div className={styles.contentContainer}>
        <Links url="/about">
        <div className={styles.contentCard}>
          <div className={styles.textArea}>About</div>
          <div className={styles.text}>Learn about me and what I've been up to in life</div>
        </div>
        </Links>
        <Links url="/business">
        <div className={styles.contentCard}>
          <div className={styles.textArea}>GitHub/LinkedIn</div>
          <div className={styles.text}>Check my projects on GitHub and follow me in LinkedIn</div>
        </div>
        </Links>
      </div>
    </section>
  )
}