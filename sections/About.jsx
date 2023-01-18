'use client';

import { motion as m } from 'framer-motion';
import { TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import styles from '../styles';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <m.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <m.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-2 sm:text-[1.875rem] text-[1.2rem] lg:text-center text-start text-secondary-white max-w-[1000px] lg:leading-[1.8] leading-[1.4]"
      >
        <span className="font-bold text-white">Metaverse</span> is a new thing in the future, where you can enjoy the
        virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this
        is really the <span className="font-bold text-white">madness of the metaverse</span> of today, using only{' '}
        <span className="font-bold text-white">VR</span> devices you can easily{' '}
        <span className="font-bold text-white">explore</span> the metaverse world you want, turn your dreams into
        reality. Let's explore the madness of the metaverse by scrolling down
      </m.p>
      <m.img
        src="/arrow-down.svg"
        alt="arrow down"
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="w-[18px] h-7 object-contain mt-7"
      />
    </m.div>
  </section>
);

export default About;
