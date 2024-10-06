import style from "./Home.module.scss";
import { Footer, Event, Navbar } from "../../Components/index";

const Home = () => {
  return (
    <main className={style.home}>
      <Navbar />
      <h1>Home Page</h1>
      <Event />
      <Footer />
    </main>
  );
};

export default Home;
