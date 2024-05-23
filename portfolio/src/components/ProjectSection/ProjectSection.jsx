"use client";

import '../ProjectSection/embla.css';
import React from 'react';
import EmblaCarousel from './EmblaCarousel';

const OPTIONS = { align: 'start' };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function ProjectSectiion() {
  return (
    <section >
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
}

if (typeof document !== 'undefined') {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <ProjectSectiion />
      </React.StrictMode>
    );
  }
}
