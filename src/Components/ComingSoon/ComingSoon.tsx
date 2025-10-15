import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { SteppedEase } from "gsap";
import "./ComingSoon.css";
import sponsors from "../../assets/sponsors.json";
import runPikachu from "/images/run-pikachu.gif";
import bikingGirl from "/images/bikingGirl.gif";
import logo from "/images/logo.png";
import cloudMov from "/images/cloudMov.png";
import clouds1 from "/images/clouds1.png";
import grass from "/images/grass.png";

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
          style={{ backgroundImage: `url(${cloudMov})` }}
        ></div>
        <div
          className="background-layer ground"
          style={{ backgroundImage: `url(${grass})` }}
        ></div>
        <div className="comingContainer">
          <img src={clouds1} className="clouds1" alt="clouds" />
          <h1
            className="coming-soon-text"
            style={{ fontFamily: "PokemonFont, Arial, sans-serif" }}
          >
            COMING SOON
          </h1>
          <img src={clouds1} className="clouds1" alt="clouds" />
        </div>
        <div className="center-content">
          <img src={logo} className="logo" alt="logo" />
          <div className="character-container">
            <img className="character-pikachu" src={runPikachu} alt="Pikachu" />
            <img className="character-bike" src={bikingGirl} alt="Character on bike" />
          </div>
        </div>
        <img src={grass} className="staticGrass" alt="grass" />
        <div className="grad-1"></div>
        <div className="grad-2"></div>
        <div className="grad-3"></div>
        <div className="grad-4"></div>
        <div className="grad-5"></div>
      </div>
      <div style={{ height: "1rem", width: "100vw", backgroundColor: "#2E7915" }}></div>
      <div style={{ height: "1rem", width: "100vw", backgroundColor: "#339900" }}></div>
      <div style={{ height: "1rem", width: "100vw", backgroundColor: "#BBDC00" }}></div>
      <div style={{ height: "1rem", width: "100vw", backgroundColor: "#F0E800" }}></div>
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
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={sponsor.img} alt={sponsor.name} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ComingSoon;
