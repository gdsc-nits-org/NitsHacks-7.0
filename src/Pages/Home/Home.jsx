import { useState } from "react";
import style from "./Home.module.scss";
import { Footer } from "../../Components/index";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <main>
      {loaded ? (
        <main className={style.home}>
          <Footer />
        </main>
      ) : (
        <Loader setLoaded={setLoaded} />
      )}
    </main>
  );
};

export default Home;
