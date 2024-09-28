import styles from "./Team.module.scss";
import { Card } from "../../Components/Teams/index";
import { Navbar, Footer } from "../../Components/index";
// import data from "../../assets/team.json";
const Teams = () => {
  return (
    <div className={styles.teams}>
      <Navbar />
      Teams Page
      {/*
            Map your cards here
            */}
      <Card />
      <Footer />
    </div>
  );
};

export default Teams;
