import style from "./Home.module.scss";
import { Footer, Sponsor } from "../../Components/index";

const Home = () => {
  return (
    <main className={style.home}>
      <h1>Home Page</h1>
      <Sponsor />
      <Footer />
    </main>
  );
};

export default Home;
