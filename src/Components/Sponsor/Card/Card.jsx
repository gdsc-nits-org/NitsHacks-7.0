import styles from "./Card.module.scss";

const Card = ({ photo, link, SponsorType }) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <a href={link} target="_blank" rel="noreferrer">
              <img src={photo} className={styles.im} alt="logo" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.sponsorHeading}>{SponsorType}</div>
    </div>
  );
};

export default Card;
