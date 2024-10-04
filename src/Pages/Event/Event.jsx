import { Link, useParams } from "react-router-dom";
import data from "../../assets/events.json";
import { Footer, Navbar } from "../../Components";
import styles from "./Event.module.scss";

const Event = () => {
  const { id } = useParams();
  return (
    <div className={styles.event}>
      <Navbar />
      <div className={styles.innerParent}>
        <div className={styles.eventInfo}>
          <div className={styles.boxContainer}>
            <div className={styles.box1}>
              <div className={styles.imgList}>
                <img
                  className={styles.backImg}
                  src="https://res.cloudinary.com/dtt4ftdrw/image/upload/v1727799482/Event_bg_fth8hr.png"
                  alt="img1"
                />

                <div className={styles.images}>
                  <img
                    className={styles.bot1}
                    src="https://res.cloudinary.com/dtt4ftdrw/image/upload/v1727804005/yoda_pdb5v4.png"
                    alt="im1"
                  />
                  <img
                    className={styles.bot2}
                    src="https://res.cloudinary.com/dtt4ftdrw/image/upload/v1727799326/Death_vader_it5m5h.png"
                    alt="im2"
                  />
                  <img
                    className={styles.bot3}
                    src="https://res.cloudinary.com/dtt4ftdrw/image/upload/v1727802329/storm_trooper_kgn7no.png"
                    alt="im3"
                  />
                  <h1 className={styles.title}>{data[id - 1].name}</h1>
                </div>
              </div>

              <p className={styles.description}>{data[id - 1].desc}</p>
              <p className={styles.description1}>{data[id - 1].desc1}</p>

              <div className={styles.buttons}>
                <a href={data[id - 1].gform} className={styles.btn1}>
                  REGISTER NOW!
                  <div className={styles.dottedBorder}></div>
                </a>

                <a href={data[id - 1].problem_statements} className={styles.btn2}>
                  PROBLEM STATEMENTS
                </a>

                <Link to="/" className={styles.btn3}>
                  BACK TO HOME
                  <div className={styles.dottedBorder}></div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.event_poster}>
            <img className={styles.poster} src={data[id - 1].photo} alt="POSTER" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Event;
