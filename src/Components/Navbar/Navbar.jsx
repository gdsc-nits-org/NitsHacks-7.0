import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [hamOpen, setHamOpen] = useState(false);
  const [audio] = useState(new Audio("/sound/button.wav"));
  const navigate = useNavigate();
  const currPage = window.location.pathname.split("/")[1];
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.split("#")[1];
      const element = document.getElementById(id);
      const headerOffset = 200;
      const bodyRect = document.body.getBoundingClientRect().top;
      if (element) {
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  useEffect(() => {
    const navMap = new Map([
      ["", 0],
      ["event", 1],
      ["faq", 2],
      ["team", 4],
    ]);
    const curr = navMap.get(currPage);
    const links = document.querySelectorAll(`.${styles.deskNav}`);
    const underscores = document.querySelectorAll(".underscore");
    const latches = document.querySelectorAll(".latch");
    links.forEach((linksm, niggdex) => {
      linksm.classList.remove(styles.hovereffect);
      underscores.item(niggdex).classList.remove(styles.hoverUnder);
      latches.item(niggdex).classList.remove(styles.glow);
    });
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
  }, [location.pathname, currPage]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.bar}>
        <div className={styles.bigScn}>
          <div className={styles.logo}>
            <a href="/">
              <img src="/logo/nitshacks_logo.svg" height={40} width={100} alt="logo" />
            </a>
          </div>
          <div className={styles.pages}>
            <div>
              <button
                className={styles.deskNav}
                onClick={() => {
                  if (location.pathname !== "/") {
                    navigate("/");
                  } else {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }
                }}
                onMouseOver={() => {
                  audio.play();
                }}
                onFocus={() => audio.play()}
                onBlur={() => audio.pause()}
              >
                <p>Home</p>
                <img alt="glow" src="/images/underscore.svg" className="underscore" />
              </button>
            </div>
            <div>
              <button
                className={styles.deskNav}
                onClick={() => {
                  navigate("/#events");
                }}
                onMouseOver={() => {
                  audio.play();
                }}
                onFocus={() => audio.play()}
                onBlur={() => audio.pause()}
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
                onMouseOver={() => {
                  audio.play();
                }}
                onFocus={() => audio.play()}
                onBlur={() => audio.pause()}
              >
                <p>Faq</p>
                <img alt="glow" src="/images/underscore.svg" className="underscore" />
              </button>
            </div>
            <div>
              <button
                className={styles.deskNav}
                onClick={() => {
                  navigate("/#sponsors");
                }}
                onMouseOver={() => {
                  audio.play();
                }}
                onFocus={() => audio.play()}
                onBlur={() => audio.pause()}
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
                onMouseOver={() => {
                  audio.play();
                }}
                onFocus={() => audio.play()}
                onBlur={() => audio.pause()}
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
              <img src="/logo/nitshacks_logo.svg" alt="logo" />
            </a>
          </div>
          <button
            onClick={() => {
              audio.play();
              setHamOpen(!hamOpen);
            }}
            className={`${styles.ham} ${hamOpen ? styles.open : ""}`}
          >
            <img alt="glow" src="/images/hamber.svg" className="" />
            <img alt="glow" src="/images/hamber.svg" className="" />
            <img alt="glow" src="/images/hamber.svg" className="" />
          </button>
        </div>
      </div>
      <section className={`${styles.mobileView} ${hamOpen ? styles.open : ""}`}>
        <Latch ham={hamOpen} setHam={setHamOpen} link="/">
          Home
        </Latch>
        <Latch ham={hamOpen} setHam={setHamOpen} link="/#events">
          Events
        </Latch>
        <Latch ham={hamOpen} setHam={setHamOpen} link="/faq">
          Faq
        </Latch>
        <Latch ham={hamOpen} setHam={setHamOpen} link="/#sponsors">
          Sponsors
        </Latch>
        <Latch ham={hamOpen} setHam={setHamOpen} link="/team">
          Team
        </Latch>
      </section>
    </nav>
  );
};

export default Navbar;

const Latch = ({ children, link, setHam, ham }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [audio] = useState(new Audio("/sound/button.wav"));

  return (
    <button
      className="navbut"
      style={ham ? { position: "relative", zIndex: "100", cursor: "pointer" } : {}}
      onClick={() => {
        audio.play();
        setHam(false);
        if (link === "/" && location.pathname === "/") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          navigate(link);
        }
      }}
    >
      <p style={{ color: "#494949" }} className="latch">
        {children}
      </p>
      <span className={styles.latch}></span>
    </button>
  );
};
