import { useState, useEffect } from "react";
import styles from "./Preview.module.scss";

const Preview = ({ setLoaded }) => {
  const [audio] = useState(new Audio("/sound/preview.mp3"));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    audio.volume = 1;
    audio.play();

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 70);

    const timeout = setTimeout(() => {
      setLoaded(true);
      audio.pause();
    }, 7000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [audio, setLoaded]);

  return (
    <div className={styles.container}>
      <div className={styles.glow_container}>
        <div className={styles.text}>
          <h1 className={styles.galactic}>
            entering the <span style={{ color: "#12DEED" }}>galactic</span> grid
          </h1>
          <h1 className={styles.transfer}>
            navigating to <span style={{ color: "white" }}>NITS HACKS 7.0</span>
          </h1>
        </div>
        <div className={styles.insignia}>
          <img
            src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1728374490/nitshacks_logo_17_bggppj.webp"
            alt="nits-hacks"
          />
        </div>
        <div className={styles.upgrading}>
          <h1>Launching...</h1>

          <div className={styles.bar_container}>
            <div className={styles.bar_parent}>
              <div className={styles.bar} style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
