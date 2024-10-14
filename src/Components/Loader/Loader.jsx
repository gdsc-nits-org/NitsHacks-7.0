import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import styles from "./Loader.module.scss";
import swordAnimation from "../../assets/lottie/sword.json";

const Loader = ({ setLoaded }) => {
  const lottieRef = useRef(null);
  const [audio] = useState(new Audio("/sound/preview.mp3"));
  const [imageLoaded, setImageLoaded] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);

  useEffect(() => {
    const handleAudioLoad = () => {
      audio.volume = 1;
      setAudioLoaded(true);
      audio.play();
    };

    const handleImageLoad = () => {
      setImageLoaded(true);
    };
    audio.addEventListener("canplaythrough", handleAudioLoad);

    const logoImg = new Image();
    logoImg.src = "/logo/nitshacks_logo.svg";
    logoImg.onload = handleImageLoad;

    return () => {
      audio.removeEventListener("canplaythrough", handleAudioLoad);
    };
  }, [audio]);

  const isLoaded = imageLoaded && audioLoaded;

  return (
    <main>
      {isLoaded ? (
        <div className={styles.loader}>
          <div>
            <img
              className={styles.logo}
              src="/logo/nitshacks_logo.svg"
              alt="nitshacks-logo"
              onLoad={() => setImageLoaded(true)}
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
      ) : (
        <div></div>
      )}
    </main>
  );
};

export default Loader;
