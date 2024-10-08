import { useState } from "react";
import style from "./Home.module.scss";
import { Navbar, Footer, NitsHacks, Tecno } from "../../Components/index";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <main>
      {loaded ? (
        <main className={style.home}>
          <Navbar />
          <div className={style.aboutsec}>
            <NitsHacks />
            <Tecno />
          </div>
          <Footer />
        </main>
      ) : (
        <Loader setLoaded={setLoaded} />
      )}
    </main>
  );
};

export default Home;
