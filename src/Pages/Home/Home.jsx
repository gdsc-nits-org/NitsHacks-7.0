import { useState, useEffect } from "react";
import style from "./Home.module.scss";
import {
  Navbar,
  Footer,
  NitsHacks,
  Event,
  Tecno,
  Sponsor,
  Hero,
} from "../../Components/index";

const Home = () => {
  const [audio] = useState(new Audio("/sound/landing.mp3"));
  useEffect(() => {
    audio.volume = 1;
    audio.play();
  });
  return (
    <main className={style.home}>
      <Navbar />
      <Hero />
      <div className={style.more}>
        <div className={style.aboutsec} id="about">
          <NitsHacks />
          <Tecno />
        </div>
        <Event />
        <Sponsor />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
