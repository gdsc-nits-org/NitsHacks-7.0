import React, { useState } from "react";
import styles from "./Carausel.module.scss";

const MAX_VISIBILITY = 3;
// const AUTOPLAY_INTERVAL = 3000;

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  // useEffect(() => {
  //   const autoplay = setInterval(() => {
  //     setActive((prevActive) => (prevActive + 1) % count);
  //   }, AUTOPLAY_INTERVAL);
  //   return () => clearInterval(autoplay);
  // }, [count]);

  return (
    <div className={styles.carouselCont}>
      <div className={styles.carousel}>
        {active > 0 && (
          <button className={styles.left} onClick={() => setActive((i) => i - 1)}>
            &lt;
          </button>
        )}
        {React.Children.map(children, (child, i) => (
          <div
            className={styles.cardContainer}
            style={{
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
              zIndex: `${i === active ? 5 : 0}`,
            }}
          >
            {child}
          </div>
        ))}
        {active < count - 1 && (
          <button className={styles.right} onClick={() => setActive((i) => i + 1)}>
            &gt;
          </button>
        )}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={`${styles.bubbleCont}`}>
          {React.Children.map(children, (child, i) => (
            <div
              className={i === active ? `${styles.active}` : `${styles.inactive}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
