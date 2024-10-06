import style from "./Home.module.scss";
import { Navbar, Footer, Sponsor } from "../../Components/index";

const Home = () => {
  return (
    <main className={style.home}>
      <Navbar />
      <h1>Home Page</h1>
      <Sponsor />
      <Footer />
    </main>
  );
};

export default Home;
