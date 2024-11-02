import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Event.module.scss";
import data from "../../assets/events.json";

const Event = () => {
  const navigate = useNavigate();
  const [audio] = useState(new Audio("/sound/button.wav"));
  return (
    <main className={styles.contain}>
      <h1 className={styles.heading}>events</h1>
      <div className={styles.events} id="events">
        {data.map((marvel) => (
          <div
            className={styles.event}
            style={{ backgroundImage: `url(${marvel.photo})` }}
            onClick={() => {
              audio.volume = 0.7;
              audio.play();

              navigate(`/event/${marvel.id}`);
            }}
          >
            <div className={styles.detailshadow}>
              <div className={styles.details}>
                <h1>{marvel.name}</h1>
                <p>{marvel.desc}</p>
                <button>
                  <img src="/images/smearth.svg" alt="small earth" />
                  VIEW MORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Event;
