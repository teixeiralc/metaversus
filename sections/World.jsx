'use client';

/* eslint-disable react/jsx-wrap-multilines */
import { motion as m } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import styles from '../styles';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <m.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and
            <br className="sm:block hidden" /> invite them to play together in
            <br className="sm:block hidden" /> the same world
          </>
        }
        textStyles="text-center"
      />
      <m.div variants={fadeIn('up', 'tween', 0.3, 1)} className="relative mt-16 flex w-full h-[550px]">
        <img src="/map.png" alt="Map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-2 rounded-[50%] bg-[#5d6680]">
          <img src="people-01.png" alt="" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-2 rounded-[50%] bg-[#5d6680]">
          <img src="people-02.png" alt="" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-2 rounded-[50%] bg-[#5d6680]">
          <img src="people-03.png" alt="" className="w-full h-full" />
        </div>
      </m.div>
    </m.div>
  </section>
);

export default World;
