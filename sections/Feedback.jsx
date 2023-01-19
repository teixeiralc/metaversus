'use client';

import { motion as m } from 'framer-motion';
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion';
import styles from '../styles';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <m.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row gap-6 flex-col`}
    >
      <m.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative shadow-lg"
      >
        <div className="feedback-gradient" />
        <div className="z-10">
          <h4 className="font-bold sm:text-3xl text-2xl text-white">Samantha</h4>
          <p className="mt-2 sm:text-lg text-xs text-secondary-white">Founder Metaverus</p>
        </div>
        <p className="mt-6 sm:text-[1.25rem] text-[1.125rem] text-white z-10 leading-[1.8]">
          “With the development of today's technology, metaverse is very useful for today's work, or can be called web
          3.0. by using metaverse you can use it as anything”
        </p>
      </m.div>

      <m.div variants={fadeIn('left', 'tween', 0.2, 1)} className="relative flex-1 flex justify-center items-center">
        <img
          src="/planet-09.png"
          alt=""
          className="w-full lg:h-[500px] h-auto min-h-[210px] object-cover rounded-[40px] shadow-lg"
        />

        <m.div variants={zoomIn(0.4, 0.75)} className="lg:block hidden absolute -left-[10%] top-[10%]">
          <img src="/stamp.png" alt="" className="cursor-pointer w-[155px] h-[155px] object-contain" />
        </m.div>
      </m.div>
    </m.div>
  </section>
);

export default Feedback;
