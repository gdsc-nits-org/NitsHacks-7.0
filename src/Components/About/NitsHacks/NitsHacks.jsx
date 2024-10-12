import styles from "./NitsHacks.module.scss";
const NitsHacks = () => {
  return (
    <div className={styles.nitsParent} id="nitsparent">
      <div className={styles.NitsHacks}>
        <div className={styles.headWrapper}>
          <h1 className={styles.heading}>about nits hacks</h1>
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1728314152/nits-hacks-7.0/lightsaber-underline_czhjdk.svg"
            className={styles.whiteSaber}
            alt="underline"
          />
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
                <img
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1728314165/nits-hacks-7.0/Group_5360_iw4jwj.svg"
                  alt="redsaber"
                  className={styles.redSaber}
                />
              </div>
              <div className={styles.brochure}>
                <a
                  className={styles.btn}
                  href="https://drive.usercontent.google.com/u/0/uc?id=1BRYQ3PIRKCpRqHQmuhdPVkTxIj4ZALKs&export=download"
                  target="blank"
                >
                  <img
                    src="https://media.istockphoto.com/id/844294300/vector/download-icon-isolated-vector.jpg?s=612x612&w=0&k=20&c=VCmvy8uEoTQnt9W0kZzjEBplN_opDkGKF_eQTLfkivs="
                    className={styles.icon}
                    alt="img"
                  />
                  brochure
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
