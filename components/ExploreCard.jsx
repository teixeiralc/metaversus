'use client';

import { motion as m } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import styles from '../styles';

const ExploreCard = ({ id, imgUrl, title, index, active, setActive }) => (
  <m.div
    key={id}
    variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
    className={`${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } relative flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-300 ease-out-flex cursor-pointer`}
    onClick={() => setActive(id)}
  >
    <img src={imgUrl} alt={title} className="absolute w-full h-full object-cover rounded-3xl" />
    {active !== id ? (
      <h3 className="font-semibold sm:text-2xl text-lg text-white absolute z-0 lg:bottom-20 lg:-rotate-90 lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-3xl">
        <div className={`${styles.flexCenter} w-16 h-16 rounded-3xl glassmorphism mb-4`}>
          <img src="/headset.svg" className="w-1/2 h-1/2 object-contain" />
        </div>
        <p className="text-base text-white uppercase">Enter the Metaverse</p>
        <h2 className="mt-6 font-semibold sm:text-3xl text-2xl text-white">{title}</h2>
      </div>
    )}
  </m.div>
);

export default ExploreCard;
