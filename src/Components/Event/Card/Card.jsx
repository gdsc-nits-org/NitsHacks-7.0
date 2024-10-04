import styles from "./Card.module.scss";
import Event from "../Event";

const Card = () => {
  return (
    <div className={styles.eventCont}>
      <h1 className={styles.heading}>Events </h1>
      <Event />
    </div>
  );
};

export default Card;
