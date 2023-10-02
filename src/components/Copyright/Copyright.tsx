import { socialMedias } from "./socialMedias";
import styles from "./footer.module.css";

const Copyright = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container_footer}>
        <p>Copyright © Visual Boost. | 2023 | Todos los derechos reservados.</p>
        <ul className={styles.social_medias}>
          {socialMedias.map(({ name, img, to }) => (
            <li key={name}>
              <a href={to}>
                <img src={img} alt={name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Copyright;
