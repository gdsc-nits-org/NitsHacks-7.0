import style from "./Home.module.scss";
import { Navbar, Footer } from "../../Components/index";
import { NitsHacks, Tecno } from "../../Components/About";

const Home = () => {
  return (
    <main className={style.home}>
      <Navbar />
      <h1>Home Page</h1>
      <NitsHacks />
      <Tecno />
      <Footer />
    </main>
  );
};

export default Home;
