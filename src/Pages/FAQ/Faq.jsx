import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import styles from "./Faq.module.scss";
import datas from "../../assets/faq.json";
import { Navbar, Footer } from "../../Components/index";

const Faq = () => {
  return (
    <div className={styles.FaqParent}>
      <Navbar />
      <div className={styles.bgPng}>
        <img
          src="/images/faqcover.svg"
          alt="team page background"
          className={styles.coverImg}
        />
      </div>
      <h1 className={styles.heading}>Faq</h1>
      <div className={styles.innerContHolder}>
        <div className={styles.innerCont}>
          {datas.map((data) => (
            <FaqItem key={data.id} question={data.question} answer={data.answer} />
          ))}
        </div>
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
          <FaAngleDown
            style={{
              transform: `rotateZ(${isOpen ? 180 : 0}deg)`,
              transition: "ease 200ms",
            }}
          />
        </span>
      </div>
      {isOpen && <div className={styles.faqAnswer}>{answer}</div>}
    </div>
  );
};

export default Faq;
