/* eslint-disable no-return-assign */
import styles from "./Event.module.scss";
import events from "../../assets/events.json";

const Event = () => {
  return (
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

                <a href={`/event/${event.id}`} className={styles.btn4}>
                  View More
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Event;
