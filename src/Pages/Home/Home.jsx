import style from "./Home.module.scss";
import { Footer } from "../../Components/index";

const Home = () => {
  return (
    <main className={style.home}>
      <h1>Home Page</h1>
      <Footer />
    </main>
  );
};

export default Home;
