import styles from "./button.module.scss";
const BackingHome = () => {
  return (
    <div className={styles.button}>
      <a href="/" className={styles.backtohome}>
        <div className={styles.visited}>Back to Home</div>
        <div className={styles.div}></div>
        <div className={styles.divtwo}></div>
        <div className={styles.firstchange}></div>
        <div className={styles.secondchange}></div>
        <div className={styles.thirdchangebox}></div>
        <div className={styles.slashcombine}>
          <p className={styles.slashes}>|</p>
          <p className={styles.slashes}>|</p>
          <p className={styles.slashes}>|</p>
          <p className={styles.slashes}>|</p>
          <p className={styles.slashes}>|</p>
          <p className={styles.slashes}>|</p>
          <p className={styles.slashes}>|</p>
          <p className={styles.slashes}>|</p>
          <p className={styles.slashes}>|</p>
          <p className={styles.slashes}>|</p>
          <p className={styles.slashes}>|</p>
          <p className={styles.slashes}>|</p>
        </div>

        <div className={styles.fourthchange}></div>

        <hr className={styles.aboveline} />
        <hr className={styles.abovelinetwo} />
        <hr className={styles.abovelinethree} />
        <hr className={styles.abovelinefour} />
        <hr className={styles.abovelinefive} />
      </a>
      <div className={styles.vector}></div>
      <div className={styles.vectortwo}></div>
    </div>
  );
};
export default BackingHome;
