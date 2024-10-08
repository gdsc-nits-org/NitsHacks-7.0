import style from "./Home.module.scss";
import { Navbar, Footer, NitsHacks,Event, Tecno, Sponsor, Hero } from "../../Components/index";


const Home = () => {
  return (
    <main className={style.home}>
      <Navbar />
      <Hero/>
      <div className={style.more}>
        <div className={style.aboutsec}>
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
