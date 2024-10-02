import styles from "./Card.module.scss";
const Card = (props) => {
  return (
    <div className={styles.cardBox}>
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

        <div className={styles.social}>
          {props.fb && (
            <div className={styles.icon}>
              <a href={props.fb} target="_blank" rel="noreferrer">
                <img
                  className={styles.logo}
                  src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705083563/fbpxl_imhsav.svg"
                  alt="facebook"
                />
              </a>
            </div>
          )}

          {props.linkedin && (
            <div className={styles.icon}>
              <a href={props.linkedin} target="_blank" rel="noreferrer">
                <img
                  className={styles.logo}
                  src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705425898/Nits%20hacks%206.0/Teams/nnj4l11tum53qdgmny4v.png"
                  alt="linkedin"
                />
              </a>
            </div>
          )}

          {props.git && (
            <div className={styles.icon}>
              <a href={props.git} target="_blank" rel="noreferrer">
                <img
                  className={styles.logo}
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
                  className={styles.logo}
                  src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705486367/Nits%20hacks%206.0/Teams/lfqewnoiatuujzkelmqk.png"
                  alt=" codeforces"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
