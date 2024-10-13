import { useState } from "react";
import styles from "./Team.module.scss";
import { Card } from "../../Components/Teams/index";
import { Navbar, Footer } from "../../Components/index";
import teamData from "../../assets/team.json";
import Loader from "../../Components/Loader/Loader";

const MemberDetails = (data) => {
  return <Card key={data.id} {...data} />;
};

const Teams = () => {
  const [loaded, setLoaded] = useState(false);
  const coreTeam = teamData.filter((member) => member.role === "Coreteam");
  const convener = teamData.filter((member) => member.role === "Convener");
  const coordinator = teamData.filter((member) => member.role === "Coordinator");
  const techLead = teamData.filter((member) => member.role === "Techlead");
  const tech = teamData.filter((member) => member.role === "Tech");
  const organisers = teamData.filter((member) => member.role === "Organisers");

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

          <div className={styles.page}>
            <div className={styles.teamname}>
              <div className={styles.headingteamsa} id="CORE">
                core team
              </div>{" "}
              <div className={styles.teamname_body}>
                <section className={styles.sec}> {convener.map(MemberDetails)}</section>
                <section className={styles.sec}>
                  {" "}
                  {coordinator.map(MemberDetails)}
                </section>
                <section className={styles.sec}> {coreTeam.map(MemberDetails)}</section>
              </div>
            </div>

            <div className={styles.teamname}>
              <div className={styles.headingteamsa} id="TECH">
                tech team
              </div>{" "}
              <div className={styles.teamname_body}>
                <section className={styles.sec}> {techLead.map(MemberDetails)}</section>
                <section className={styles.sec}> {tech.map(MemberDetails)}</section>
              </div>
            </div>

            <div className={styles.teamname}>
              <div className={styles.headingteamsa} id="ORGANISERS">
                organisers
              </div>{" "}
              <div className={styles.teamname_body}>{organisers.map(MemberDetails)}</div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Loader setLoaded={setLoaded} />
      )}
    </main>
  );
};

export default Teams;
