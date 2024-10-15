import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import style from "./Footer.module.scss";
import Button from "../CustomButton/CustomButton";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <img
          src="https://res.cloudinary.com/dmhbmurzw/image/upload/v1728145561/f11b95bf1b0b9d78cb200c0df87defa4_opezmf.png"
          alt="bg_img"
          className={style.bg}
        />
      </div>
      <div className={style.seconddiv}>
        <section className={style.contact}>
          <div className={style.btn}>
            <Button name="visit Tecnoesis" ohref="https://www.tecnoesis.co.in/" />
          </div>
          <p className={style.connect}>Connect With us:</p>
          <section className={style.socials}>
            <a
              href="https://www.instagram.com/nitshacks?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <FaInstagram className={style.icons} />
            </a>
            <a href="https://www.facebook.com/NITSHacks/" target="_blank">
              <FaFacebook className={style.icons} />
            </a>
            <a href="https://twitter.com/nitshacks" target="_blank">
              <FaXTwitter className={style.icons} />
            </a>
            <a
              href="https://www.linkedin.com/company/nitshacks/posts/?feedView=all"
              target="_blank"
            >
              <FaLinkedin className={style.icons} />
            </a>
          </section>
          <p className={style.contactus}>Contact us</p>
          <a href="mailto:nitshacks.nits@gmail.com" className={style.mailto}>
            <p className={style.mail}>nitshacks.nits@gmail.com</p>
          </a>
        </section>
        <section className={style.logo}>
          <img
            src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1728374490/nitshacks_logo_17_bggppj.webp"
            alt="hacks_logo"
            style={{
              width: "20rem",
              height: "auto",
            }}
          />
        </section>
        <section className={style.map}>
          <p className={style.how}>How to Reach?</p>
          <div className={style.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.6748521054888!2d92.78971797559427!3d24.75771437799646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49dcb63bae9b%3A0x81efa836714a289b!2sNational%20Institute%20of%20Technology%2C%20Silchar!5e1!3m2!1sen!2sin!4v1728143344286!5m2!1sen!2sin"
              className={style.map}
              allowFullScreen=""
              loading="lazy"
              title="nitsilchar"
            ></iframe>
            <div className={style.viewMap}>
              <a
                href="https://www.google.com/maps/place/National+Institute+of+Technology,+Silchar/@24.7577144,92.789718,880m/data=!3m2!1e3!4b1!4m6!3m5!1s0x374e49dcb63bae9b:0x81efa836714a289b!8m2!3d24.7577144!4d92.7922929!16zL20vMDhfMWhk?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className={style.viewMapText}
              >
                View Map
              </a>
            </div>
          </div>
        </section>
      </div>
      <p className={style.gdg}>
        Made by <span className={style.nit}>GDG</span> On Campus NIT Silchar
      </p>
      <div className={style.partition}>
        <div className={style.sqone}></div>
        <hr className={style.lineone} />
        <div className={style.sqtwo}></div>
      </div>
      <p className={style.copy}>
        &copy; copyright 2024, Nits Hacks 7.0, National Institute Of Technology, Silchar
      </p>
    </footer>
  );
};

export default Footer;
