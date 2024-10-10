import style from "./jedi.module.scss";
const Jedi = () => {
  return (
    <div className={style.container}>
      <img
        src="https://res.cloudinary.com/dmhbmurzw/image/upload/v1728145561/f11b95bf1b0b9d78cb200c0df87defa4_opezmf.png"
        alt=""
        className={style.main}
      />
      <div className={style.background}></div>
    </div>
  );
};
export default Jedi;
