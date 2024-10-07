import styles from "./Tecno.module.scss";
const Tecno = () => {
  return (
    <div className={styles.Tecno}>
      <h1 className={styles.heading}>ABOUT TECHNOESIS</h1>
      <div className={styles.line}>
        <hr className={styles.smallest} />
        <hr className={styles.small} />
        <hr className={styles.large} />
        <hr className={styles.largest} />
      </div>
      <div className={styles.main}>
        <p className={styles.p}>
          TECNOESIS is the annual techno-managerial event of NIT Silchar, promising all
          tech geeks the ideal niche of fascinating events, workshops, competitions and
          interactions worth a lifetime. This mega event has left its mark as of the most
          prominent techfests across the country. The cauldron of enthusiasm and knowledge
          attracts various students, presenting the chance to let their minds run wild
          with ideads, fostering the inventors of the future.
        </p>

        <div className={styles.footer}>
          <div className={styles.element}>
            <div className={styles.footer1}>
              <hr className={styles.line1} />
              <hr className={styles.line2} />
            </div>

            <div className={styles.brochure}>
              <a className={styles.btn} href="https://tecnoesis.co.in/">
                Visit Technoesis
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tecno;
