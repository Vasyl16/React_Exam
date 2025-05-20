import React from 'react';

import 'swiper/swiper-bundle.css';
import { Hero } from '../components/Hero';
import { Movie } from '../components/Movie';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Movie />
    </main>
  );
};
