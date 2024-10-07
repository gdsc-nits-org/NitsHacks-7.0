import styles from "./NitsHacks.module.scss";
const NitsHacks = () => {
  return (
    <div className={styles.nitsParent}>
      <div className={styles.NitsHacks}>
        <h1 className={styles.heading}>ABOUT NITS HACKS</h1>
        <div className={styles.line}>
          <hr className={styles.smallest} />
          <hr className={styles.small} />
          <hr className={styles.large} />
          <hr className={styles.largest} />
        </div>
        <div className={styles.main}>
          <p className={styles.p}>
            NITS HACKS is a distinguished hackathon hosted by NIT Silchar, recognized as
            one of the top events in northeastern India. This dynamic platform brings
            together tech enthusiasts, encouraging collaboration and highlighting their
            problem-solving expertise. Beyond just a competition, NITS HACKS focuses on
            cultivating essential soft skills for newcomers while offering valuable
            technical learning experiences for aspiring students. Participants tackle
            real-world challenges, guiding them in designing and developing innovative
            technology projects from scratch. The event not only celebrates innovation.
            but also helps shape the future generation of tech leaders.
          </p>
          <div className={styles.footer}>
            <div className={styles.element}>
              <div className={styles.footer1}>
                <hr className={styles.line1} />
                <hr className={styles.line2} />
              </div>
              <div className={styles.brochure}>
                <a className={styles.btn} href="/download">
                  <img
                    src="https://media.istockphoto.com/id/844294300/vector/download-icon-isolated-vector.jpg?s=612x612&w=0&k=20&c=VCmvy8uEoTQnt9W0kZzjEBplN_opDkGKF_eQTLfkivs="
                    className={styles.icon}
                    alt="img"
                  />
                  BROCHURE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NitsHacks;
