import style from "./Home.module.scss";
import { Navbar, Footer, NitsHacks, Tecno, Sponsor } from "../../Components/index";
import Event from "../../Components/Event/Event";

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
