import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.starwar}>
        <img
          src="https://res.cloudinary.com/dmhbmurzw/image/upload/v1728145561/f11b95bf1b0b9d78cb200c0df87defa4_opezmf.png"
          alt=""
          className={styles.starwarimg}
        />
        <div className={styles.background}></div>
      </div>
      <section>
        <div
          style={{
            display: "grid",
          }}
        >
          <a href="https://tecnoesis.co.in/" className={styles.visittecno}>
            <div className={styles.visited}>VISIT TECNOESIS</div>
            <div className={styles.div}></div>
            <div className={styles.divtwo}></div>
            <div className={styles.firstchange}></div>
            <div className={styles.secondchange}></div>
            <div className={styles.thirdchangebox}></div>
            <div className={styles.slashcombine}>
              <p className={styles.slashes}>|</p>
              <p className={styles.slashes}>|</p>
              <p className={styles.slashes}>|</p>
              <p className={styles.slashes}>|</p>
              <p className={styles.slashes}>|</p>
              <p className={styles.slashes}>|</p>
              <p className={styles.slashes}>|</p>
              <p className={styles.slashes}>|</p>
              <p className={styles.slashes}>|</p>
              <p className={styles.slashes}>|</p>
              <p className={styles.slashes}>|</p>
              <p className={styles.slashes}>|</p>
            </div>
            <div className={styles.fourthchange}></div>
            <hr className={styles.aboveline} />
            <hr className={styles.abovelinetwo} />
            <hr className={styles.abovelinethree} />
            <hr className={styles.abovelinefour} />
            <hr className={styles.abovelinefive} />
          </a>
          <div className={styles.vector}></div>
          <div className={styles.vectortwo}></div>
          <div>
            <p className={styles.connect}>CoNNECT WiTH uS :</p>
          </div>
          <div className={styles.icons}>
            <a href="https://www.instagram.com/nitshacks/" aria-label="insta">
              <FaInstagram
                style={{
                  color: "white",
                  fontSize: "47px",
                }}
              />
            </a>
            <a href="https://www.facebook.com/NITSHacks/" aria-label="facebook">
              <FaFacebook
                style={{
                  color: "white",
                  fontSize: "45px",
                }}
              />
            </a>
            <a
              href="https://x.com/nitshacks?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor&prefetchTimestamp=1728219191965"
              aria-label="twitter"
            >
              <FaTwitter
                style={{
                  color: "white",
                  fontSize: "45px",
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/nitshacks?originalSubdomain=in"
              aria-label="linkedin"
            >
              <FaLinkedin
                style={{
                  color: "white",
                  fontSize: "45px",
                }}
              />
            </a>
          </div>
          <div>
            <p className={styles.contact}>contact us</p>
          </div>
          <div>
            <p className={styles.mail}>nitshacks.nits@gmail.com</p>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
          }}
        >
          <img
            src="https://res.cloudinary.com/dmhbmurzw/image/upload/v1728137912/Group_13_1_1_12_1_xp9yev.svg"
            alt=""
            style={{
              width: "200px",
              height: "auto",
              filter: `drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.6)) 
           drop-shadow(0px 0px 40px rgba(255, 255, 255, 0.4))`,
              position: "absolute",
              left: "600px",
              top: "710px",
            }}
          />
        </div>
        <div>
          <p
            style={{
              color: "white",
              fontWeight: "600",
              position: "absolute",
              top: "670px",
              right: "250px",
            }}
          >
            How to Reach ?
          </p>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.6748521054888!2d92.78971797559427!3d24.75771437799646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49dcb63bae9b%3A0x81efa836714a289b!2sNational%20Institute%20of%20Technology%2C%20Silchar!5e1!3m2!1sen!2sin!4v1728143344286!5m2!1sen!2sin"
            className={styles.map}
            allowFullScreen=""
            loading="lazy"
            title="nitsilchar"
          ></iframe>
          <div className={styles.viewMap}>
            <a
              href="https://www.google.com/maps/place/National+Institute+of+Technology,+Silchar/@24.7577144,92.789718,880m/data=!3m2!1e3!4b1!4m6!3m5!1s0x374e49dcb63bae9b:0x81efa836714a289b!8m2!3d24.7577144!4d92.7922929!16zL20vMDhfMWhk?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewMapText}
            >
              View Map
            </a>
          </div>
        </div>
      </section>
      <div className={styles.oncampus}>
        <p className={styles.made}>
          Made by <span className={styles.gdg}> GDG </span>On Campus NIT Silchar
        </p>
      </div>
      <hr className={styles.line} />
      <div className={styles.oncampus}>
        <p className={styles.copy}>
          &copy; Copyright 2024, Nits Hacks 7.0, National Institute of Technology, Silchar
        </p>
      </div>
      <div className={styles.design1}></div>
      <div className={styles.design2}></div>
    </div>
  );
};

export default Footer;
