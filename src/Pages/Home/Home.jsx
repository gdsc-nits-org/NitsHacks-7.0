import style from "./Home.module.scss";
import { Navbar, Footer, NitsHacks, Tecno } from "../../Components/index";

const Home = () => {
  return (
    <main className={style.home}>
      <Navbar />
      <div className={style.aboutsec}>
        <NitsHacks />
        <Tecno />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
