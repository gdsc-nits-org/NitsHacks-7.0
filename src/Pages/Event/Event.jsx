import { Link, useParams } from "react-router-dom";
import data from "../../assets/events.json";
import { Footer, Navbar, CustomButton } from "../../Components";
import styles from "./Event.module.scss";

const Event = () => {
  const { id } = useParams();
  return (
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
            <h1 className={styles.title}>{data[id - 1].name}</h1>
            <img className={styles.poster_mob} src={data[id - 1].photo} alt="POSTER" />
            <div className={styles.desc}>
              <p className={styles.description}>{data[id - 1].desc}</p>
              <p className={styles.description}>{data[id - 1].desc1}</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <Link to="/">
              <CustomButton name="Back To Home" />
            </Link>
            <CustomButton name="Register Now" />
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.poster} src={data[id - 1].photo} alt="POSTER" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Event;
