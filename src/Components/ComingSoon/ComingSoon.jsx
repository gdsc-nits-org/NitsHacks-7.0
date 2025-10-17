import React, { useEffect } from "react";
import { gsap, SteppedEase } from "gsap";
import "./ComingSoonStyle.css";
import sponsors from "../../assets/sponsors.json";

gsap.registerPlugin(SteppedEase);

const ComingSoon = () => {
  useEffect(() => {
    gsap.to(".background-layer.ground", {
      backgroundPositionX: "-2048px",
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    gsap.to(".background-layer.clouds-bg", {
      backgroundPositionX: "-2048px",
      ease: "none",
      duration: 40,
      repeat: -1,
    });
  }, []);

  return (
    <section id="coming-soon">
      <div className="blueBg">
        <div
          className="background-layer clouds-bg"
          style={{ backgroundImage: "url('/images/cloudMov.png')" }}
        ></div>
        <div
          className="background-layer ground"
          style={{ backgroundImage: "url('/images/grass.png')" }}
        ></div>

        <div className="comingContainer">
          <img src="/images/clouds1.png" className="clouds1" id="cloud1" alt="clouds" />
          <h1
            className="coming-soon-text"
            style={{ fontFamily: "PokemonFont, Arial, sans-serif" }}
          >
            COMING SOON
          </h1>
          <img src="/images/clouds1.png" className="clouds1" id="cloud2" alt="clouds" />
        </div>

        <div className="center-content">
          <img src="/images/logo.png" className="logo" alt="logo" />
          <div className="character-container">
            <img
              className="character-pikachu"
              src="/images/run-pikachu.gif"
              alt="Pikachu"
            />
            <img
              className="character-bike"
              src="/images/bikingGirl.gif"
              alt="Character on bike"
            />
          </div>
        </div>

        <img src="/images/grass.png" className="staticGrass" alt="grass" />

        <div className="grad-1"></div>
        <div className="grad-2"></div>
        <div className="grad-3"></div>
        <div className="grad-4"></div>
        <div className="grad-5"></div>
      </div>

      <div className="lines" style={{ backgroundColor: "#2E7915" }}></div>
      <div className="lines" style={{ backgroundColor: "#339900" }}></div>
      <div className="lines" style={{ backgroundColor: "#BBDC00" }}></div>
      <div className="lines" style={{ backgroundColor: "#F0E800" }}></div>

      <div className="footer">
        <section className="sponsor-section">
          <h2
            className="sponsor-title"
            style={{ fontFamily: "PokemonFont, Arial, sans-serif" }}
          >
            PREVIOUS SPONSORS
          </h2>
          <div className="carousel">
            <div className="carousel-track">
              {" "}
              {[...sponsors, ...sponsors].map((sponsor) => (
                <a
                  key={sponsor.id}
                  href={sponsor.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img src={sponsor.img} alt={sponsor.name} />{" "}
                </a>
              ))}{" "}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ComingSoon;
