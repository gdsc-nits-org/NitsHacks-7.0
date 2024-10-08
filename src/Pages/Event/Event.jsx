import { useParams } from "react-router-dom";
import { useState } from "react";
import { Navbar, Footer } from "../../Components";
import data from "../../assets/events.json";
import styles from "./Event.module.scss";
import Button from "../Error/CustomButton";
import Loader from "../../Components/Loader/Loader";
const Event = () => {
  const { id } = useParams();
  const info = data[id - 1];
  const [loaded, setLoaded] = useState(false);
  return loaded ? (
    <div>
      <Navbar />
      <section className={styles.innerParent}>
        <div className={styles.infoParent}>
          <img src="/images/starchar.png" alt="starwar characters" />
          <div className={styles.info}>
            <h1>{info.name}</h1>
            <div className={styles.mobileimg}>
              <div
                className={styles.eImg}
                style={{
                  backgroundImage: `url("${info.photo}")`,
                }}
              ></div>
            </div>
            {info.bigdesc.split("\n").map((value) => (
              <p>{value}</p>
            ))}
            <div className={styles.buttons}>
              <Button name="register now" ohref={info.gform} />
              <Button name="back to home" ohref="/" />
            </div>
          </div>
        </div>
        <div
          className={styles.eventImage}
          style={{
            backgroundImage: `url("${info.photo}")`,
          }}
        ></div>
      </section>
      <Footer />
    </div>
  ) : (
    <Loader setLoaded={setLoaded} />
  );
};

export default Event;
