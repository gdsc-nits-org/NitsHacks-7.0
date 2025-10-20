import "./Sponsor.css";
import sponsors from "../../../assets/sponsors.json";

const Sponsor = () => {
  return (
    <section className="sponsor-section">
      <h2
        className="sponsor-title"
        style={{ fontFamily: "PokemonFont, Arial, sans-serif" }}
      >
        PREVIOUS SPONSORS
      </h2>
      <div className="carousel">
        <div className="carousel-track">
          {" "}
          {[...sponsors, ...sponsors].map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.uri}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={sponsor.img} alt={sponsor.name} />{" "}
            </a>
          ))}{" "}
        </div>
      </div>
    </section>
  );
};
export default Sponsor;
