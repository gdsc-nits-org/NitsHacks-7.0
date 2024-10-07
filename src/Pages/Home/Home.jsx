import style from "./Home.module.scss";
import { Footer, Event } from "../../Components/index";

const Home = () => {
  return (
    <main className={style.home}>
      <h1>Home Page</h1>
      <Event />
      <Footer />
    </main>
  );
};

export default Home;
