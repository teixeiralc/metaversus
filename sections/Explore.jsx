'use client';

/* eslint-disable react/jsx-wrap-multilines */
import { useState } from 'react';
import { motion as m } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants';
import styles from '../styles';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  return (
    <section className={styles.paddings} id="explore">
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want
              <br className="md:block hidden" /> to explore
            </>
          }
          textStyles="text-center"
        />

        <div className="mt-12 flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard key={world.id} id={world.id} {...world} index={index} active={active} setActive={setActive} />
          ))}
        </div>
      </m.div>
    </section>
  );
};

export default Explore;
