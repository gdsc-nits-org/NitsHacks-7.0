import { useParams } from "react-router-dom";
// import data from "../../assets/events.json";
import { Navbar, Footer } from "../../Components";
import styles from "./Event.module.scss";
const Event = () => {
  const { id } = useParams();
  return (
    <div className={styles.event}>
      <Navbar />
      <div className={styles.innerParent}>Event {id}</div>
      <Footer />
    </div>
  );
};

export default Event;
