import { useState } from "react";
import styles from "./CustomButton.module.scss";

const Button = ({ name, ohref }) => {
  const [audio] = useState(new Audio("/sound/button.wav"));
  const playm = () => {
    audio.volume = 0.5;
    audio.play();
  };
  return (
    <div onMouseEnter={playm} className={styles.button}>
      <a href={ohref} className={styles.backtohome}>
        <div className={styles.top}></div>
        <div className={styles.visited}>{name}</div>
        <div className={styles.last}>
          <div className={styles.ring}>
            <div className={styles.bottblak}></div>
          </div>
          <div className={styles.bott}></div>
        </div>
        <div className={styles.slashcombine}>
          {Array.from({ length: 12 }).map(() => (
            <p className={styles.slashes} key={Math.random().toString()}>
              |
            </p>
          ))}
        </div>
        <div className={styles.popat}>
          <svg
            width="182"
            height="12"
            viewBox="0 0 182 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M175.691 1.86697L180.908 10.7285L1.69163 10.7285L8.32851 1.8702L10.0921 4.34184L10.2744 4.59727H10.5882L172.983 4.59727H173.256L173.438 4.39351L175.691 1.86697Z"
              className={styles.toprect}
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Button;
