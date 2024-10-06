import { useRef } from "react";
import Lottie from "lottie-react";
import styles from "./Loader.module.scss";
import swordAnimation from "../../assets/lottie/sword.json";

const Loader = ({ setLoaded }) => {
  const lottieRef = useRef(null);
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
          }}
          loop={false}
        />
      </div>
    </div>
  );
};

export default Loader;
