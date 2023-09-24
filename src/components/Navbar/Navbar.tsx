import { navRoutes } from "./navLinks";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container_navbar}>
      <ul className={styles.nav_list}>
        {navRoutes.map(({ name, id }) => (
          <li key={name} className={styles.nav_item}>
            <a href={id}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
