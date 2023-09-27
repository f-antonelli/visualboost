import styles from "./balls.module.css";
import { useEffect } from "react";
import AOS from "aos";

const Balls = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section className={styles.container_balls}>
      <div data-aos="fade-down" className={styles.ball_1}></div>
      <div data-aos="fade-right" className={styles.ball_2}></div>
      <div data-aos="fade-up" className={styles.ball_3}></div>
      <div data-aos="fade-up" className={styles.ball_4}></div>
      <div data-aos="fade-down" className={styles.ball_5}></div>
      <div data-aos="fade-left" className={styles.ball_6}></div>
      <div data-aos="fade-left" className={styles.ball_7}></div>
      <h3>DONDE TU MARCA COBRA VIDA</h3>
    </section>
  );
};

export default Balls;
