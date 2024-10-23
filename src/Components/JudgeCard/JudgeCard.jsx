import styles from "./JudgeCard.module.scss";

const Card = ({ image, name, role, data }) => {
  return (
    <div className={styles.flip_card}>
      <div className={styles.flip_card_front}>
        <div className={styles.flip_card_inner}>
          <img src={image} className={styles.speaker_image} alt={name} />
          <h1 className={styles.name}>{name}</h1>
          <h2 className={styles.role}>{role}</h2>
        </div>
      </div>
      <div className={styles.flip_card_back}>
        <div className={styles.flip_card_inner}>
          <ul className={styles.data}>
            {data.map((info) => (
              <li key={image}>{info}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const JudgeCard = () => {
  const SWJudge = {
    id: 1,
    image:
      "https://res.cloudinary.com/dnuhxx8aa/image/upload/v1705826342/utkarsh_ekhwgs.webp",
    name: "Utkarsh Gupta",
    role: "SDE @Graviton",
    data: "AIR 1 @Google Kickstart; Ex AIR 1 @Codeforces; Grandmaster @Codeforces; 7 Star on CodeChef; ICPC '21 World Finalist",
  };
  const UIUXJudges = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dnuhxx8aa/image/upload/v1705826342/utkarsh_ekhwgs.webp",
      name: "Utkarsh Gupta",
      role: "SDE @Graviton",
      data: "AIR 1 @Google Kickstart; Ex AIR 1 @Codeforces; Grandmaster @Codeforces; 7 Star on CodeChef; ICPC '21 World Finalist",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dnuhxx8aa/image/upload/v1705826158/harsh_mu4xlo.webp",
      name: "Harsh Mishra",
      role: "Open Source Engineer @LocalStack",
      data: "Google Summer of Code '21; Google Season of Docs '21; AWS Community Builder; Open Source Contributor @moja global",
    },
  ];
  return (
    <section className={styles.section} id="speakers">
      <h1 className={styles.heading}>our judges</h1>
      <div className={styles.SWjudge}>
        <div
          className={styles.gridContainer}
          style={{ position: "relative", left: "25%" }}
        >
          <Card
            image={SWJudge.image}
            name={SWJudge.name}
            role={SWJudge.role}
            data={SWJudge.data.split(";")}
          />
          {UIUXJudges.map((judge) => {
          const dataList = judge.data.split(";");
          return (
            <Card
              key={judge.id}
              image={judge.image}
              name={judge.name}
              role={judge.role}
              data={dataList}
            />
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default JudgeCard;
