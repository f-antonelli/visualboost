import styles from "./balls.module.css";

const itemsSection = [
  "DISEÑO WEB",
  "IDENTIDAD DE MARCA",
  "PASIÓN",
  "CREATIVIDAD SIN LIMITES",
  "VISUAL BOOST",
];

const Balls = () => {
  return (
    <section className={styles.wrapper}>
      <div data-aos="fade-down" className={styles.ball_1}></div>
      <div data-aos="fade-right" className={styles.ball_2}></div>
      <div data-aos="fade-up" className={styles.ball_3}></div>
      <div data-aos="fade-up" className={styles.ball_4}></div>
      <div data-aos="fade-down" className={styles.ball_5}></div>
      <div data-aos="fade-left" className={styles.ball_6}></div>
      <div data-aos="fade-left" className={styles.ball_7}></div>
      <div className={styles.container_balls}>
        <h3>DONDE TU MARCA COBRA VIDA</h3>
        <ul className={styles.list_items}>
          {itemsSection.map((value) => (
            <li>{value}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Balls;
