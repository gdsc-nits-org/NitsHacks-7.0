import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  const [hamOpen, setHamOpen] = useState(false);
  const navigate = useNavigate();
  const currPage = window.location.pathname;
  useEffect(() => {
    const navMap = new Map([
      ["/", 0],
      ["/faq", 2],
      ["/team", 4],
    ]);

    const curr = navMap.get(currPage);
    const links = document.querySelectorAll(`.${styles.deskNav}`);
    const underscores = document.querySelectorAll(".underscore");
    const latches = document.querySelectorAll(".latch");

    links.item(curr).classList.add(styles.hovereffect);
    underscores.item(curr).classList.add(styles.hoverUnder);
    latches.item(curr).classList.add(styles.glow);
    links.forEach((link, index) => {
      link.addEventListener("mouseleave", () => {
        links.forEach((linksm, niggdex) => {
          linksm.classList.remove(styles.hovereffect);
          underscores.item(niggdex).classList.remove(styles.hoverUnder);
        });
        links.item(curr).classList.add(styles.hovereffect);
        underscores.item(curr).classList.add(styles.hoverUnder);
      });
      link.addEventListener("mouseenter", () => {
        link.classList.add(styles.hovereffect);
        underscores.item(index).classList.add(styles.hoverUnder);
        links.forEach((linksm, niggdex) => {
          if (niggdex !== index) {
            linksm.classList.remove(styles.hovereffect);
            underscores.item(niggdex).classList.remove(styles.hoverUnder);
          }
        });
      });
    });
  }, [currPage]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.bigScn}>
        <div className={styles.logo}>
          <a href="/">
            <img src="/logo/logo.svg" height={40} width={100} alt="logo" />
          </a>
        </div>
        <div className={styles.pages}>
          <div>
            <button
              className={styles.deskNav}
              onClick={() => {
                navigate("/");
              }}
            >
              <p>Hom;</p>
              <img alt="glow" src="/images/underscore.svg" className="underscore" />
            </button>
          </div>
          <div>
            <button
              className={styles.deskNav}
              onClick={() => {
                navigate("/");
              }}
            >
              <p>events</p>
              <img alt="glow" src="/images/underscore.svg" className="underscore" />
            </button>
          </div>
          <div>
            <button
              className={styles.deskNav}
              onClick={() => {
                navigate("/faq");
              }}
            >
              <p>Faq</p>
              <img alt="glow" src="/images/underscore.svg" className="underscore" />
            </button>
          </div>
          <div>
            <button
              className={styles.deskNav}
              onClick={() => {
                navigate("/");
              }}
            >
              <p>SponsorS</p>
              <img alt="glow" src="/images/underscore.svg" className="underscore" />
            </button>
          </div>
          <div>
            <button
              className={styles.deskNav}
              onClick={() => {
                navigate("/team");
              }}
            >
              <p>team</p>
              <img alt="glow" src="/images/underscore.svg" className="underscore" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.smallScn}>
        <div className={styles.logo}>
          <a href="/">
            <img src="/logo/logo.svg" alt="logo" />
          </a>
        </div>
        <button
          onClick={() => {
            setHamOpen(!hamOpen);
          }}
          className={`${styles.ham} ${hamOpen ? styles.open : ""}`}
        >
          <img alt="glow" src="/images/hamber.svg" className="" />
          <img alt="glow" src="/images/hamber.svg" className="" />
          <img alt="glow" src="/images/hamber.svg" className="" />
        </button>
      </div>
      <section className={`${styles.mobileView} ${hamOpen ? styles.open : ""}`}>
        <Latch link="/">Home</Latch>
        <Latch link="/#events">Events</Latch>
        <Latch link="/faq">Faq</Latch>
        <Latch link="/#sponsors">Sponsors</Latch>
        <Latch link="/team">Team</Latch>
      </section>
    </nav>
  );
};

export default Navbar;

const Latch = ({ children, link }) => {
  return (
    <a href={link}>
      <p style={{ color: "#494949" }} className="latch">
        {children}
      </p>
      <span className={styles.latch}></span>
    </a>
  );
};
