import React from "react";
import { useEffect } from "react";
import { gsap } from 'gsap'
import { SteppedEase } from "gsap";
import './landing.css';
import sponsors from './assets/sponsors.json';
import runPikachu from './assets/images/run-pikachu.gif';
import bikingGirl from './assets/images/bikingGirl.gif';
import logo from './assets/images/logo.png';
import cloudMov from "./assets/images/cloudMov.png";
import clouds1 from "./assets/images/clouds1.png";
import grass from "./assets/images/grass.png";

gsap.registerPlugin(SteppedEase);

const Home = () => {
  useEffect(() => {
    gsap.to('.background-layer.ground', {
      backgroundPosition: '-2048px 0',
      ease: 'none',
      duration: 20,
      repeat: -1
    });
    gsap.to(".background-layer.clouds-bg", {
      backgroundPosition: "-2048px 0",
      ease: "none",
      duration: 40,
      repeat: -1,
    });

  }, []);
  return (
    <>
      <div className="blueBg">
        <div
          className="background-layer clouds-bg"
          style={{ backgroundImage: `url(${cloudMov})` }}
        ></div>
        <div          
          className="background-layer ground"
          style={{ backgroundImage: `url(${grass})` }}
        >
        </div>
        <div className="comingContainer">
          <img src={clouds1} className="clouds1" />
          <h1 className="coming-soon-text" style={{ fontFamily: 'PokemonFont, Arial, sans-serif' }}>COMING SOON</h1>
          <img src={clouds1} className="clouds1" />
        </div>
        <div className="center-content">

        <img src={logo} className="logo" />
          <div className="character-container">
            <img
              className="character-pikachu"
              src={runPikachu}
              alt="Pikachu"
            />
            <img
              className="character-bike"
              src={bikingGirl}
              alt="Character on bike"
            />
          </div>
        </div>

      </div>

        <img src={grass} className="staticGrass"/>


      <div className="grad-1"></div>
      <div className="grad-2"></div>
      <div className="grad-3"></div>
      <div className="grad-4"></div>
      <div className="grad-5"></div>
      <div class="FooterContent"> Past Sponsors</div>

     <div className="footer">
        <section className="sponsor-section">
         
          <div className="carousel">
            <div className="carousel-track">
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <a key={index} href={sponsor.uri} target="_blank" rel="noopener noreferrer">
                  <img src={sponsor.img} alt={sponsor.name} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
