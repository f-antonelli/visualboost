import styles from "./history.module.css";
import { historyItems } from "./data";

const History = () => {
  return (
    <section className={styles.wrapper}>
      <div id="services" className={styles.container_history}>
        <h3>Nuestra historia,</h3>
        <div className={styles.history_content}>
          <div className={styles.history_left}>
            <p>
              Somos un grupo de jóvenes diseñadores y programadores, nos encanta
              desafiar los límites y crear soluciones únicas para nuestros
              clientes. Somos creativos y por sobre todas las cosas, amamos lo
              que hacemos. Somos más que un equipo de trabajo, somos una
              comunidad de amigos comprometidos con el éxito de nuestros
              clientes. Nos apoyamos mutuamente y nos divertimos juntos en el
              camino.
            </p>
          </div>
          <div className={styles.history_right}>
            {historyItems.map(({ title, description }) => (
              <div key={title} className={styles.history_item}>
                <p>
                  <span>{title}</span>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.img_left}></div>
      <div className={styles.img_right}></div>
      <div className={styles.ball_1}></div>
      <div className={styles.ball_2}></div>
      <div className={styles.ball_3}></div>
      <div className={styles.ball_4}></div>
      <div className={styles.ball_5}></div>
      <div className={styles.ball_6}></div>
      <div className={styles.ball_7}></div>
      <div className={styles.ball_8}></div>
    </section>
  );
};

export default History;
