import styles from "./Tecno.module.scss";
const NitsHacks = () => {
  return (
    <div className={styles.nitsParent}>
      <div className={styles.NitsHacks}>
        <div className={styles.headWrapper}>
          <h1 className={styles.heading}>ABOUT TECNOESIS</h1>
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1728314152/nits-hacks-7.0/lightsaber-underline_czhjdk.svg"
            className={styles.whiteSaber}
            alt="underline"
          />
        </div>
        {/* <div className={styles.line}>
          <hr className={styles.smallest} />
          <hr className={styles.small} />
          <hr className={styles.large} />
          <hr className={styles.largest} />

        </div> */}
        <div className={styles.main}>
          <p className={styles.p}>
            TECNOESIS is the annual techno-managerial event of NIT Silchar, promising all
            tech geeks the ideal niche of fascinating events, workshops, competitions and
            interactions worth a lifetime. This mega event has left its mark as of the
            most prominent techfests across the country. The cauldron of enthusiasm and
            knowledge attracts various students, presenting the chance to let their minds
            run wild with ideads, fostering the inventors of the future.
          </p>
          <div className={styles.footer}>
            <div className={styles.element}>
              <div className={styles.footer1}>
                <img
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1728316097/nits-hacks-7.0/blueSaber_ceduau.svg"
                  alt="redsaber"
                  className={styles.blueSaber}
                />
              </div>
              <div className={styles.brochure}>
                <a className={styles.btn} href="/download">
                  <img
                    src="https://res.cloudinary.com/dhry5xscm/image/upload/v1728316364/nits-hacks-7.0/earth_1_brhpjt.svg"
                    className={styles.icon}
                    alt="img"
                  />
                  VISIT TECNOESIS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NitsHacks;
