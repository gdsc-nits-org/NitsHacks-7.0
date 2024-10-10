import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./Testimonial.module.scss";
import testimonials from "../../assets/testimonials.json";

const Testimonial = () => {
  const handleClick = (id) => {
    window.location.href = `/testimonial/${id}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.testHeading}>TESTIMONIALS</div>
      <Marquee speed={50} direction="left" pauseOnHover gradient={false}>
        <div className={styles.box_container}>
          {testimonials.map((testimonial) => {
            return (
              <div
                key={testimonial.id}
                className={styles.card}
                onClick={() => handleClick(testimonial.id)}
              >
                <div className={styles.contentBox}>
                  <div className={styles.content1}>
                    <img
                      className={styles.profileImage}
                      src={testimonial.image}
                      alt="profileImage"
                    />

                    <div className={styles.info}>
                      <div className={styles.profileName}>{testimonial.name}</div>
                      <div className={styles.about}>{testimonial.about}</div>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.content2}>
                    <div className={styles.aboutInfo}>
                      <span className={styles.apostropheLeft}>&ldquo;</span>
                      {testimonial.desc}
                      <span className={styles.apostropheRight}>&ldquo;</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonial;
