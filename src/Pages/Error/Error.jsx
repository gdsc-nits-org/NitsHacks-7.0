import { Navbar } from "../../Components";
import Button from "./CustomButton";
import styles from "./Error.module.scss";

const Error = () => {
  return (
    <div className={styles.error}>
      <Navbar />
      <img
        src="https://res.cloudinary.com/dmhbmurzw/image/upload/v1728275605/bcc3e1d91add532aefb040cb0356c2db_rrj1ow.webp"
        alt="jediimg"
        className={styles.jedi}
      />
      <p className={styles.errorline}>Error 404</p>
      <p className={styles.find}>
        Find this page, you will not. The force, you will need, but exist, it does not.
      </p>
      <div className={styles.buttonname}>
        <Button name="back to home" ohref="/" />
      </div>
    </div>
  );
};

export default Error;
