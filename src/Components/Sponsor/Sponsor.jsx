import styles from "./Sponsor.module.scss";
import Card from "./Card/Card";
import sponsors from "../../assets/sponsors.json";

const Sponsor = () => {
  return (
    <div className={styles.sponsor} id="sponsors">
      <h1 className={styles.heading}>Sponsor</h1>
      <div className={styles.innerCont}>
        {sponsors.map((sponsor) => (
          <Card key={sponsor.id} photo={sponsor.img} link={sponsor.uri} />
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
