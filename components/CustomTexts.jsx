'use client';

import { motion as m } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <m.p variants={textContainer} className={`${textStyles} font-normal text-sm text-secondary-white`}>
    {[...title].map((letter, index) => (
      <m.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </m.span>
    ))}
  </m.p>
);

export const TitleText = ({ title, textStyles }) => (
  <m.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-2 font-bold md:text-6xl text-4xl text-white ${textStyles}`}
  >
    {title}
  </m.h2>
);
