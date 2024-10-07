import styles from "./Card.module.scss";

const Card = ({ photo, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <a href={link} target="_blank" rel="noreferrer">
            <img src={photo} className={styles.img} alt="logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
