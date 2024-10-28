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
      "https://res.cloudinary.com/dmezugavw/image/upload/v1729651552/gama_a7xwlj.jpg",
    name: "Gamaliel Das",
    role: "Webflow Developer @Spendflo",
    data: "Webflow Specialist | Smart India Hackathon 2022 Winner | TNSI Innovation Award 2019 & 2021 Winner | SIH 2023, SIH 2024 Evaluator | 150k+ Digital Followers",
  };
  const UIUXJudges = [
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dmezugavw/image/upload/v1729652525/janef_jhinc8.jpg",
      name: "Janefrances Christopher",
      role: "Founder @Mentorix Mentorship",
      data: "Founder of Mentorix Mentorship | UI/UX Design Mentor | LinkedIn Top Coaching & Mentorship Voice",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dmezugavw/image/upload/v1729652531/urvashi_ppemcw.jpg",
      name: "Urvashi Kaushik",
      role: "UI/UX Designer @Hybreed.co",
      data: "2 Times Young Jury at IIT Delhi Design Challenge | 45k+ Design Community | LinkedIn Top User Experience Voice",
    },
  ];
  return (
    <section className={styles.section} id="judges">
      <h1 className={styles.heading}>our judges</h1>
      <div className={styles.SWjudge}>
        <div className={styles.gridContainer}>
          <Card
            image={SWJudge.image}
            name={SWJudge.name}
            role={SWJudge.role}
            data={SWJudge.data.split("|")}
          />
          {UIUXJudges.map((judge) => {
            const dataList = judge.data.split("|");
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
