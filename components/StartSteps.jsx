import styles from '../styles';

const StartSteps = ({ num, text }) => (
  <div className={`${styles.flexCenter} flex-row gap-8`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}>
      <p className="font-bold text-xl text-white">0{num}</p>
    </div>
    <p className="flex-1 text-[#b0b0b0] text-lg">{text}</p>
  </div>
);

export default StartSteps;
