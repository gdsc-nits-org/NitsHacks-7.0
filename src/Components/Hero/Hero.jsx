import styles from "./Hero.module.scss";
import { useRef,useEffect } from "react";

const Radar=()=>{
  return(
    <div className={styles.radar}>
      
    </div>
  );
}

const DirectionBtn=(props)=>{
  return(
    <button className={styles.DirectionBtn}>
      <img className={styles.img} src="/images/dirbtn.webp"/>
    </button>
  );
}

const ControlStation=()=>{
  return(
    <div className={styles.ControlStation}>
      <div className={styles.upperRow}>
        <div className={styles.dirbtncont}>
          <DirectionBtn button="left"/>
        </div>
        <div className={styles.radarCont}>
          <Radar />
        </div>
        <div className={styles.dirbtncont}>
          <DirectionBtn button="right" />
        </div>
      </div>
      <div className={styles.lowerRow}>
        <button className={styles.proceed}>
          proceed
        </button>
      </div>
    </div>
  );
}

const Hero = () => {
  return( 
    <>
      <div className={styles.hero}>
        <div className={styles.rocketFront}>
          <div className={styles.windshield}>

          </div>
          <div className={styles.ControlStationCont}>
            <ControlStation/>
          </div>
          <div className={styles.rocket}>
            <img src="/images/rocket-cockpit.png" className={styles.cockpit}/>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default Hero;
