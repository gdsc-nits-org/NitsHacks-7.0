import { useState, useEffect } from "react";
import styles from "./Hero.module.scss";
const Radar = () => {
  return (
    <div className={styles.radar}>
      <div className={styles.redLinesCont}></div>
      <div className={styles.yellowLinesCont}>
        <div className={styles.rect1}>
          <div className={styles.rect2}>
            <div className={styles.rect3}>
              <div className={styles.rect4}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DirectionBtn = (props) => {
  if (props.button === "left") {
    return (
      <button
        className={styles.DirectionBtn}
        onMouseDown={() => props.setLeftflame(1)}
        onMouseUp={() => props.setLeftflame(0.1)}
      >
        <img className={styles.img} src="/images/dirbtn.webp" alt="direction button" />
      </button>
    );
  }

  return (
    <button
      className={styles.DirectionBtn}
      onMouseDown={() => props.setRightflame(1)}
      onMouseUp={() => props.setRightflame(0.1)}
    >
      <img className={styles.img} src="/images/dirbtn.webp" alt="direction button" />
    </button>
  );
};

const Bulb = (props) => {
  if (props.bulb === "green") {
    return (
      <div className={styles.BulbCont}>
        <div className={styles.greenBulb}></div>
      </div>
    );
  }
  if (props.bulb === "red") {
    return (
      <div className={styles.BulbCont}>
        <div className={styles.redBulb}></div>
      </div>
    );
  }
  if (props.bulb === "blue") {
    return (
      <div className={styles.BulbCont}>
        <div className={styles.blueBulb}></div>
      </div>
    );
  }

  return (
    <div className={styles.BulbCont}>
      <div className={styles.greenBulb}></div>
    </div>
  );
};

const ControlStation = (props) => {
  return (
    <div className={styles.ControlStation}>
      <div className={styles.upperRow}>
        <div className={styles.dirbtncont}>
          <DirectionBtn button="left" setLeftflame={props.setLeftflame} />
        </div>
        <div className={styles.radarCont}>
          <Radar />
        </div>
        <div className={styles.dirbtncont}>
          <DirectionBtn button="right" setRightflame={props.setRightflame} />
        </div>
      </div>
      <div className={styles.lowerRow}>
        <button className={styles.proceed}>proceed</button>
      </div>
    </div>
  );
};

const Hero = () => {
  const [rightflame, setRightflame] = useState(0.1);
  const [leftflame, setLeftflame] = useState(0.1);
  const [audio] = useState(new Audio("/sound/landing.mp3"));
  useEffect(() => {
    const handleLandingAudio = () => {
      audio.volume = 1;
      audio.play();
    };
    return () => {
      audio.addEventListener("canplaythrough", handleLandingAudio);
    };
  }, [audio]);
  return (
    <div className={styles.hero}>
      <img
        src="/images/smallrocket.png"
        alt="small rocket"
        className={styles.smallrocket}
      />
      <img src="/images/bigrocket.png" alt="big rocket" className={styles.bigrocket} />
      <div className={styles.welcome}>
        <div className={styles.logoCont}>
          <img src="/logo/nitshacks_logo.svg" alt="logo" className={styles.logo} />
        </div>
        <div className={styles.title}>nits hacks 7.0</div>
        <div className={styles.time}>
          <div className={styles.dates}>
            <span>07</span>.<span>08</span>.<span>09</span>.<span>10</span>
          </div>
          <div className={styles.month}>november</div>
        </div>
      </div>
      <div className={styles.rocketFront}>
        <div className={styles.windshield}>
          <div className={styles.welcome}>
            <div className={styles.logoCont}>
              <img src="/logo/nitshacks_logo.svg" alt="logo" className={styles.logo} />
            </div>
            <div className={styles.title}>nits hacks 7.0</div>
            <div className={styles.time}>
              <div className={styles.dates}>
                <span>07</span>.<span>08</span>.<span>09</span>.<span>10</span>
              </div>
              <div className={styles.month}>november</div>
            </div>
          </div>
          <div className={styles.blaze}>
            <div className={styles.leftBlaze}>
              <img
                src="/images/blazingfire.gif"
                alt="Left fire"
                className={styles.leftfire}
                style={{ opacity: `${leftflame}`, scale: `${leftflame === 1 ? 4 : 1}` }}
              />
            </div>
            <div className={styles.rightBlaze}>
              <img
                src="/images/blazingfire.gif"
                alt="Right fire"
                className={styles.rightfire}
                style={{ opacity: `${rightflame}`, scale: `${rightflame === 1 ? 4 : 1}` }}
              />
            </div>
          </div>
        </div>
        <div className={styles.ControlStationCont}>
          <div className={styles.lights}>
            <div className={styles.left}>
              <Bulb bulb="green" />
              <Bulb bulb="green" />
            </div>
            <div className={styles.right}>
              <div className={styles.rightChild}>
                <div className={styles.grandchild1}>
                  <Bulb bulb="red" />
                </div>
                <div className={styles.grandchild2}>
                  <Bulb bulb="green" />
                  <Bulb bulb="green" />
                  <Bulb bulb="green" />
                </div>
              </div>
            </div>
          </div>
          <ControlStation setLeftflame={setLeftflame} setRightflame={setRightflame} />
        </div>
        <div className={styles.rocket}>
          <img
            src="/images/rocket-cockpit-new.png"
            className={styles.cockpit}
            alt="cockpit"
          />
        </div>
        {/* <div className={styles.deathstarcont}>
          <img src="/images/DeathstarPositon.svg" alt="deathstar" className={styles.deathstar} />
        </div>  */}
      </div>
    </div>
  );
};

export default Hero;
