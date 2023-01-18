'use client';

import { motion as m } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings}`}>
    <m.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <m.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </m.h1>
        <m.div variants={textVariant(1.2)} className="flex justify-center items-center">
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </m.div>
      </div>

      <m.div variants={slideIn('right', 'tween', 0.2, 1)} className="relative w-full md:-mt-5 -mt-3">
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-8" />
        <img
          src="/cover.png"
          alt=""
          className="w-full sm:h-[500px] h-[300px] object-cover rounded-tl-[140px] z-10 relative"
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-16 -mt-12 pr-10 relative z-10">
            <img
              src="/stamp.png"
              alt="Explore"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </m.div>
    </m.div>
  </section>
);

export default Hero;
