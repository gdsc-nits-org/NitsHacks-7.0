import style from "./Home.module.scss";
import { Navbar, Footer, NitsHacks, Tecno, Event } from "../../Components/index";

const Home = () => {
  return (
    <main className={style.home}>
      <Navbar />
      <div className={style.aboutsec}>
        <NitsHacks />
        <Tecno />
        <Event />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
