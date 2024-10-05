/* eslint-disable no-return-assign */
import styles from "./Card.module.scss";
import events from "../../../assets/events.json";

const Card = () => {
  return (
    <div className={styles.eventCont}>
      <h1 className={styles.heading}>Events </h1>
      <div className={styles.pagebody}>
        {events.map((event) => {
          return (
            <div
              key={event.id}
              className={styles.card}
              onClick={() => (window.location.href = `/event/${event.id}`)}
            >
              <div className={styles.innerCont}>
                <img className={styles.img1} src={event.photo} alt={event} />
                <div className={styles.content}>
                  <div className={styles.rectangle}>
                    <div className={styles.box}>
                      <p className={styles.title}>{event.name}</p>
                    </div>
                  </div>
                  <p className={styles.description2}>{event.desc2}</p>

                  <div className={styles.btn5}>View More!</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
