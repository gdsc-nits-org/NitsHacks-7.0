import style from "./Home.module.scss";
import { Footer, Navbar, Event, NitsHacks, Tecno, Sponsor } from "../../Components/index";

const Home = () => {
  return (
    <main className={style.home}>
      <Navbar />
      <div className={style.aboutsec}>
        <NitsHacks />
        <Tecno />
      </div>
      <Event />
      <Sponsor />
      <Footer />
    </main>
  );
};

export default Home;
