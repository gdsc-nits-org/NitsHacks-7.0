import { Link } from "react-router-dom";
import styles from "./Error.module.scss";
import { CustomButton } from "../../Components";

const Error = () => {
  return (
    <div className={styles.error}>
      <img
        src="https://res.cloudinary.com/dmhbmurzw/image/upload/v1728275605/bcc3e1d91add532aefb040cb0356c2db_rrj1ow.webp"
        alt="jediimg"
        className={styles.jedi}
      />
      <p className={styles.errorline}>Error 404</p>
      <p className={styles.find}>
        Find this page, you will not. The force, you will need, but exist, it does not.
      </p>
      <Link to="/">
        <CustomButton name="Back to Home" />
      </Link>
    </div>
  );
};

export default Error;
