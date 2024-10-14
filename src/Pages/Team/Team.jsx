import { useState, useEffect } from "react";
import styles from "./Team.module.scss";
import { Navbar, Footer } from "../../Components/index";
import teamData from "../../assets/team.json";
import Loader from "../../Components/Loader/Loader";
import { DeskTeam, MobTeam } from "./TeamSection";

const Teams = () => {
  const [loaded, setLoaded] = useState(false);
  const coreTeam = teamData.filter((member) => member.role === "Coreteam");
  const convener = teamData.filter((member) => member.role === "Convener");
  const coordinator = teamData.filter((member) => member.role === "Coordinator");
  const techLead = teamData.filter((member) => member.role === "Techlead");
  const tech = teamData.filter((member) => member.role === "Tech");
  const organisers = teamData.filter((member) => member.role === "Organisers");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      {loaded ? (
        <div className={styles.teamsCont}>
          <Navbar />
          <div className={styles.bgPng}>
            <img
              src="/images/teamcover.svg"
              alt="team page background"
              className={styles.coverImg}
            />
          </div>
          {isMobile ? (
            <MobTeam
              convener={convener}
              coordinator={coordinator}
              coreTeam={coreTeam}
              techLead={techLead}
              tech={tech}
              organisers={organisers}
            />
          ) : (
            <DeskTeam
              convener={convener}
              coordinator={coordinator}
              coreTeam={coreTeam}
              techLead={techLead}
              tech={tech}
              organisers={organisers}
            />
          )}

          <Footer />
        </div>
      ) : (
        <Loader setLoaded={setLoaded} />
      )}
    </main>
  );
};

export default Teams;
