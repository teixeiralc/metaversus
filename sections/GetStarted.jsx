'use client';

import { motion as m } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';
import styles from '../styles';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <m.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <m.div variants={planetVariants('left')} className={`${styles.flexCenter} flex-1`}>
        <img src="/get-started.png" alt="Get Started" className="w-11/12 h-11/12 object-contain" />
      </m.div>
      <m.div variants={fadeIn('left', 'tween', 0.2, 1)} className="flex-[0.75] flex justify-center flex-col">
        <TypingText title="| How Metaversus Works" />
        <TitleText title="Get started with just a few clicks" />
        <div className="mt-8 flex flex-col max-w-md gap-6">
          {startingFeatures.map((feat, index) => (
            <StartSteps key={feat} num={index + 1} text={feat} />
          ))}
        </div>
      </m.div>
    </m.div>
  </section>
);

export default GetStarted;
