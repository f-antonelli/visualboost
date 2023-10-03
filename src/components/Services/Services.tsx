import styles from "./services.module.css";
import { services } from "./data";

const Services = () => {
  return (
    <section className={styles.wrapper}>
      <div
        data-aos="fade-right"
        data-aos-delay="1000"
        className={styles.img_left}
      ></div>
      <div
        data-aos="fade-left"
        data-aos-delay="1000"
        className={styles.img_right}
      ></div>
      <div id="services" className={styles.container_services}>
        <h3 className={styles.services_title}>Servicios</h3>
        <div className={styles.services_list}>
          {services.map(({ title, description, buttonName }) => (
            <div key={title} className={styles.services_item}>
              <h4>{title}</h4>
              <p>{description}</p>
              <button>{buttonName}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
