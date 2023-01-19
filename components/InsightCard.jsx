'use client';

import { motion as m } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <m.div variants={fadeIn('up', 'spring', index * 0.35, 1)} className="flex md:flex-row flex-col gap-4">
    <img src={imgUrl} alt="" className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover" />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-16 flex flex-col gap-4 max-w-[650px]">
        <h3 className="font-normal lg:text-4xl text-2xl text-white ">{title}</h3>
        <p className="lg:text-xl text-sm text-secondary-white">{subtitle}</p>
      </div>

      <div className="cursor-pointer lg:flex hidden items-center justify-center w-24 h-24 rounded-full bg-transparent border-[1px] border-white">
        <img src="arrow.svg" alt="Arrow button" className="w-2/5 h-2/5 object-contain" />
      </div>
    </div>
  </m.div>
);

export default InsightCard;
