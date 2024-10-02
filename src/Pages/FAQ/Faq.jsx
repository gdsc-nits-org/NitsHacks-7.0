import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Navbar, Footer } from "../../Components/index";
import styles from "./Faq.module.scss";
import datas from "../../assets/faq.json";

const Faq = () => {
  return (
    <div className={styles.FaqParent}>
      <Navbar />
      <h1 className={styles.heading}>Faq</h1>
      <div className={styles.innerCont}>
        {datas.map((data) => (
          <FaqItem key={data.id} question={data.question} answer={data.answer} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.faqItem}>
      <div className={styles.faqQuestion} onClick={toggleOpen}>
        <span className={styles.queText}>{question}</span>
        <span className={`${styles.arrow} ${isOpen ? "open" : ""}`}>
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </div>
      {isOpen && <div className={styles.faqAnswer}>{answer}</div>}
    </div>
  );
};

export default Faq;
