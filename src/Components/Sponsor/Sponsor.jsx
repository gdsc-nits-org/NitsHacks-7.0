import styles from "./Sponsor.module.scss";
import Card from "./Card/Card";
import sponsors from "../../assets/sponsors.json";

const Sponsor = () => {
  return (
    <div className={styles.sponsor}>
      <h1 className={styles.heading}>Sponsor</h1>
      <div className={styles.innerCont}>
        {sponsors.map((sponsor) => (
          <Card key={sponsor.id} photo={sponsor.photo} link={sponsor.link} />
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
