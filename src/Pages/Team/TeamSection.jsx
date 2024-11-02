import { Carousel } from "../../Components";
import { Card } from "../../Components/Teams/index";
import styles from "./Team.module.scss";

const MemberDetails = (data) => {
  return <Card key={data.id} {...data} />;
};
const DeskTeam = ({
  faculty,
  convener,
  coordinator,
  coreTeam,
  techLead,
  tech,
  organisers,
  volunteers,
  setter,
}) => {
  return (
    <div className={styles.page}>
      <div className={styles.teamname}>
        <div className={styles.headingteamsa} id="CORE">
          core team
        </div>{" "}
        <div className={styles.teamname_body}>
          <section className={styles.sec}> {faculty.map(MemberDetails)}</section>
          <section className={styles.sec}> {convener.map(MemberDetails)}</section>
          <section className={styles.sec}> {coordinator.map(MemberDetails)}</section>
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
          <section className={styles.sec}> {setter.map(MemberDetails)}</section>
        </div>
      </div>

      <div className={styles.teamname}>
        <div className={styles.headingteamsa} id="ORGANISERS">
          organisers
        </div>{" "}
        <div className={styles.teamname_body}>{organisers.map(MemberDetails)}</div>
      </div>

      <div className={styles.teamname}>
        <div className={styles.headingteamsa} id="VOLUNTEERS">
          volunteers
        </div>{" "}
        <div className={styles.teamname_body}>{volunteers.map(MemberDetails)}</div>
      </div>
    </div>
  );
};

const MobTeam = ({
  faculty,
  convener,
  coordinator,
  coreTeam,
  techLead,
  tech,
  organisers,
  volunteers,
  setter,
}) => {
  return (
    <div className={styles.page2}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <p>CORE</p>
        </div>
        <div className={styles.Events}>
          <Carousel>{faculty.map(MemberDetails)}</Carousel>
        </div>
        <div className={styles.Events}>
          <Carousel>{convener.map(MemberDetails)}</Carousel>
        </div>
        <div className={styles.Events}>
          <Carousel>{coordinator.map(MemberDetails)}</Carousel>
        </div>
        <div className={styles.Events}>
          <Carousel>{coreTeam.map(MemberDetails)}</Carousel>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <p>TECH</p>
        </div>
        <div className={styles.Events}>
          <Carousel>{techLead.map(MemberDetails)}</Carousel>
        </div>
        <div className={styles.Events}>
          <Carousel>{tech.map(MemberDetails)}</Carousel>
        </div>
        <div className={styles.Events}>
          <Carousel>{setter.map(MemberDetails)}</Carousel>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <p>ORGANISERS</p>
        </div>
        <div className={styles.Events}>
          <Carousel>{organisers.map(MemberDetails)}</Carousel>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <p>volunteers</p>
        </div>
        <div className={styles.Events}>
          <Carousel>{volunteers.map(MemberDetails)}</Carousel>
        </div>
      </div>
    </div>
  );
};

export { DeskTeam, MobTeam };
