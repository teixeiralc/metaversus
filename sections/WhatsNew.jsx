'use client';

import { motion as m } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';
import styles from '../styles';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <m.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <m.div variants={fadeIn('right', 'tween', 0.2, 1)} className="flex-[0.75] flex justify-center flex-col">
        <TypingText title="| What's new" />
        <TitleText title="What's new about Metaversus?" />
        <div className="mt-12 flex flex-wrap justify-between gap-6">
          {newFeatures.map((feat) => (
            <NewFeatures key={feat.title} {...feat} />
          ))}
        </div>
      </m.div>
      <m.div variants={planetVariants('right')} className={`${styles.flexCenter} flex-1`}>
        <img src="/whats-new.png" alt="What's new" className="w-11/12 h-11/12 object-contain" />
      </m.div>
    </m.div>
  </section>
);

export default WhatsNew;
