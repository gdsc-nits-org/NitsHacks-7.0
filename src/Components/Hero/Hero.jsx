import styles from "./Hero.module.scss";

const Radar = () => {
  return (
    <div className={styles.radar}>
      <div className={styles.redLinesCont}>
      </div>
      <div className={styles.yellowLinesCont}>
        <div className={styles.rect1}>
          <div className={styles.rect2}>
            <div className={styles.rect3}>
              <div className={styles.rect4}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DirectionBtn = () => {
  return (
    <button className={styles.DirectionBtn}>
      <img className={styles.img} src="/images/dirbtn.webp" alt="direction button" />
    </button>
  );
}

const Bulb = (props) => {
  if(props.bulb==="green"){
    return (
      <div className={styles.BulbCont}>
        <div className={styles.greenBulb}>
        </div>
      </div>
    );
  } 
  if(props.bulb==="red"){
    return (
      <div className={styles.BulbCont}>
        <div className={styles.redBulb}>
        </div>
      </div>
    );
  }
  if(props.bulb==="blue"){
    return (
      <div className={styles.BulbCont}>
        <div className={styles.blueBulb}>
        </div>
      </div>
    );
  }
  
    return(
      <div className={styles.BulbCont}>
        <div className={styles.greenBulb}>
        </div>
      </div>
    );
   
}

const ControlStation = () => {
  return (
    <div className={styles.ControlStation}>
      <div className={styles.upperRow}>
        <div className={styles.dirbtncont}>
          <DirectionBtn button="left" />
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
  return (
    <div className={styles.hero}>
        <div className={styles.rocketFront}>
          <div className={styles.watchBulbs}>
            <div className={styles.upper}>
              <Bulb bulb="blue" />
              <Bulb bulb="blue" />
            </div>
            <div className={styles.lower}>
              <Bulb blue="red"/>
            </div>
          </div>
          <div className={styles.windshield}>

          </div>
          <div className={styles.ControlStationCont}>
            <div className={styles.lights}>
              <div className={styles.left}>
                <Bulb bulb="green" />
                <Bulb bulb="green" />
              </div>
              <div className={styles.right}>
                <div className={styles.rightChild}>
                  <div className={styles.grandchild1}><Bulb bulb="red" /></div>
                  <div className={styles.grandchild2}>
                    <Bulb bulb="green" />
                    <Bulb bulb="green" />
                    <Bulb bulb="green" />
                  </div>
                </div>
              </div>
            </div>
            <ControlStation />
          </div>
          <div className={styles.rocket}>
            <img src="/images/rocket-cockpit.png" className={styles.cockpit} alt="cockpit" />
          </div>
        </div>
      </div>

  );
};

export default Hero;
