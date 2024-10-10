import style from "./Button.module.scss";
const Button = () => {
  return (
    <div className={style.button}>
      <a href="/" className={style.backtohome}>
        <div className={style.visited}>Visit Tecnoesis</div>
        <div className={style.div}></div>
        <div className={style.divtwo}></div>
        <div className={style.firstchange}></div>
        <div className={style.secondchange}></div>
        <div className={style.thirdchangebox}></div>
        <div className={style.slashcombine}>
          <p className={style.slashes}>|</p>
          <p className={style.slashes}>|</p>
          <p className={style.slashes}>|</p>
          <p className={style.slashes}>|</p>
          <p className={style.slashes}>|</p>
          <p className={style.slashes}>|</p>
          <p className={style.slashes}>|</p>
          <p className={style.slashes}>|</p>
          <p className={style.slashes}>|</p>
          <p className={style.slashes}>|</p>
          <p className={style.slashes}>|</p>
          <p className={style.slashes}>|</p>
        </div>
        <div className={style.fourthchange}></div>
        <hr className={style.aboveline} />
        <hr className={style.abovelinetwo} />
        <hr className={style.abovelinethree} />
        <hr className={style.abovelinefour} />
        <hr className={style.abovelinefive} />
      </a>
      <div className={style.vector}></div>
      <div className={style.vectortwo}></div>
    </div>
  );
};
export default Button;
