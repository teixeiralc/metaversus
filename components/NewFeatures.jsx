import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}>
      <img src={imgUrl} alt="" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h3 className="mt-6 font-bold text-2xl text-white">{title}</h3>
    <p className="flex-1 mt-4 text-lg text-[#b0b0b0]">{subtitle}</p>
  </div>
);

export default NewFeatures;
