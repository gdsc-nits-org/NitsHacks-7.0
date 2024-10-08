import { useParams } from "react-router-dom";
import { useState } from "react";
import { Navbar, Footer, Button } from "../../Components";
import data from "../../assets/events.json";
import styles from "./Event.module.scss";
import Loader from "../../Components/Loader/Loader";
const Event = () => {
  const { id } = useParams();
  const info = data[id - 1];
  const [loaded, setLoaded] = useState(false);
  return loaded ? (
    <div className={styles.event}>
      <Navbar />
      <div className={styles.event_parent}>
        <div className={styles.left}>
          <div className={styles.top}>
            <div className={styles.images}>
              <img
                className={styles.bot1}
                src="https://res.cloudinary.com/dtt4ftdrw/image/upload/v1727804005/yoda_pdb5v4.webp"
                alt="im1"
              />
              <img
                className={styles.bot2}
                src="https://res.cloudinary.com/dtt4ftdrw/image/upload/v1727799326/Death_vader_it5m5h.webp"
                alt="im2"
              />
              <img
                className={styles.bot3}
                src="https://res.cloudinary.com/dtt4ftdrw/image/upload/v1727802329/storm_trooper_kgn7no.png"
                alt="im3"
              />
            </div>
          </div>
          <div className={styles.middle}>
            <h1 className={styles.title}>{info.name}</h1>
            <img className={styles.poster_mob} src={info.photo} alt="POSTER" />
            <div className={styles.desc}>
              {info.bigdesc.split("\n").map((value) => (
                <p>{value}</p>
              ))}
            </div>
          </div>
          <div className={styles.bottom}>
            <Button name="register now" ohref={info.gform} />
            <Button name="back to home" ohref="/" />
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.poster} src={info.photo} alt="POSTER" />
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader setLoaded={setLoaded} />
  );
};

export default Event;
