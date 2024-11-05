import styles from "./Speaker.module.scss";

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

const Speaker = () => {
  const speakers = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dmezugavw/image/upload/v1729997061/kamlesh_epoa9x.jpg",
      name: "Kamlesh Nagware",
      role: "Co-Founder @ FSV Capital",
      data: "TEDx Speaker|Blockchain TOP VOICE | Co-chair of the IEEE Blockchain Initiative|Former Blockchain Consultant at IBM",
    },
  ];
  return (
    <section className={styles.section} id="speakers">
      <h1 className={styles.heading}>our speaker</h1>
      <div className={styles.SWjudge}>
        <div className={styles.gridContainer}>
          {speakers.map((speaker) => {
            const dataList = speaker.data.split("|");
            return (
              <Card
                key={speaker.id}
                image={speaker.image}
                name={speaker.name}
                role={speaker.role}
                data={dataList}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Speaker;
