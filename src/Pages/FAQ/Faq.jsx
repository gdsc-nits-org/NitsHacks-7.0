import { Navbar, Footer } from "../../Components/index";
import styles from "./Faq.module.scss";
// import data from "../../assets/faq.json"
const Faq = () => {
  return (
    <div className={styles.FaqParent}>
      <Navbar />
      <h1 className={styles.heading}>Faq</h1>
      <div className={styles.innerCont}>
        {/*
              Write your Code here      
          */}
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
