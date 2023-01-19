'use client';

import { motion as m } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <m.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-6xl text-5xl text-white">Enter the Metaverse</h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-3 hover:scale-105 transition-all duration-300"
        >
          <img src="/headset.svg" alt="" className="w-[24px] h-[24px] object-contain" />
          <span className="text-base text-white uppercase tracking-wider">ENTER THE METAVERSE</span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-12 h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h5 className="upercase font-extrabold text-2xl text-white uppercase">Metaversus</h5>
          <p className="text-sm text-white opacity-50">Copyright © 2021 - 2023 Metaversus. All rights reserved.</p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-6 h-6 object-contain cursor-pointer hover:scale-110 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </m.footer>
);

export default Footer;
