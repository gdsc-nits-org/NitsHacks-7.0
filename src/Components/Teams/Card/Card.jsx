import { useState } from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const [audio] = useState(new Audio("/sound/teamcard.wav"));
  const playm = () => {
    audio.volume = 0.5;
    audio.play();
  };
  return (
    <div onMouseEnter={playm} className={styles.cardBox}>
      <div className={styles.topLeftLine}></div>
      <div className={styles.bottomLeftLine}></div>
      <div className={styles.bottomRightLine}></div>
      <div className={styles.card}>
        <div className={styles.box}>
          <img className={styles.img} src={props.img} alt="members" loading="lazy" />
        </div>
        <div className={styles.content}>
          <p className={styles.name}>{props.name}</p>
          {props.designation && <p className={styles.designation}>{props.designation}</p>}
        </div>
        <div className={styles.glowbox}>
          <div className={styles.social}>
            {props.fb && (
              <div className={styles.icon}>
                <a href={props.fb} target="_blank" rel="noreferrer">
                  <img
                    className={`${styles.logo} ${styles.fbImg}`}
                    src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1728845141/Vector_xj7xds.png"
                    alt="facebook"
                  />
                </a>
              </div>
            )}

            {props.linkedin && (
              <div className={styles.icon}>
                <a href={props.linkedin} target="_blank" rel="noreferrer">
                  <img
                    className={`${styles.logo} ${styles.linkedinImg}`}
                    src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1728845141/ld_nrmndl.png"
                    alt="linkedin"
                  />
                </a>
              </div>
            )}

            {props.git && (
              <div className={styles.icon}>
                <a href={props.git} target="_blank" rel="noreferrer">
                  <img
                    className={`${styles.logo} ${styles.gitImg}`}
                    src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705429562/Nits%20hacks%206.0/Teams/lavkmin5prqostnlukqh.png"
                    alt=" github"
                  />
                </a>
              </div>
            )}

            {props.cf && (
              <div className={styles.icon}>
                <a href={props.cf} target="_blank" rel="noreferrer">
                  <img
                    className={`${styles.logo} ${styles.cfImg}`}
                    src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705486367/Nits%20hacks%206.0/Teams/lfqewnoiatuujzkelmqk.png"
                    alt=" codeforces"
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
