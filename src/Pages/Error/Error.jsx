import BackingHome from "./BackingHome";
import styles from "./Error.module.scss";

const Error = () => {
  return (
    <div className={styles.error}>
      <img
        src="https://res.cloudinary.com/dmhbmurzw/image/upload/v1728275605/bcc3e1d91add532aefb040cb0356c2db_rrj1ow.png"
        alt="jediimg"
        className={styles.jedi}
      />
      <p className={styles.errorline}>Error 404</p>
      <p className={styles.find}>
        Find this page, you will not. The force, you will need, but exist, it does not.
      </p>
      <BackingHome className="buttonname" />
    </div>
  );
};

export default Error;
