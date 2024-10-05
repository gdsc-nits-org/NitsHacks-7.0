import styles from "./Card.module.scss";

const Card = ({ photo, link }) => {
  return (
    <div className={styles.card}>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.linkage}>
        <img src={photo} alt="default" className={styles.cardImage} />
      </a>
    </div>
  );
};

export default Card;
