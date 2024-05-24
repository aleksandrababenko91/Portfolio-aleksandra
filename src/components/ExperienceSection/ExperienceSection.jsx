"use client";

import AOS from "aos";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { items } from './items';
import styles from './ExperienceSection.module.scss';

export default function ExperienceSection() {

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quad',
      duration: 3000,
    });
  }, []);

  return (
    <section className={styles.containerExperience}>
      <div className={styles.header}>
        <h1>Experience</h1>
      </div>
      <div className={styles.containerItems}>
      {items.map((item, index) => (
        <div  key={index}>
          <ExperienceCard item={item} isOdd={index % 2 !== 0} />
        </div>
      ))}
      </div>
    </section>
  )
}
