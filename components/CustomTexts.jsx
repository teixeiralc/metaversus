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

export const TitleText = ({ title, textStyles }) => <h2>Title Text</h2>;
