import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import styles from "./Loader.module.scss";
import swordAnimation from "../../assets/lottie/sword.json";

const Loader = ({ setLoaded }) => {
  const lottieRef = useRef(null);
  const [audio] = useState(new Audio("/sound/loading.mp3"));

  useEffect(() => {
    audio.volume = 1;
    audio.play();
  });
  return (
    <div className={styles.loader}>
      <div>
        <img
          className={styles.logo}
          src="/logo/nitshacks_logo.svg"
          alt="nitshacks-logo"
        />
        <Lottie
          className={styles.sword}
          lottieRef={lottieRef}
          onEnterFrame={() => lottieRef.current.setSpeed(0.3)}
          animationData={swordAnimation}
          initialSegment={[0, 22]}
          onComplete={() => {
            setLoaded(true);
            audio.pause();
          }}
          loop={false}
        />
      </div>
    </div>
  );
};

export default Loader;
