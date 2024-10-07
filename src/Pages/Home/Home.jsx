import style from "./Home.module.scss";
import { Footer } from "../../Components/index";
import Event from "../Event/Event";

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
