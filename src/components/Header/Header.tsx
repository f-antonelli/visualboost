import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container_header}>
        <div className={styles.box_img}>
          <img src={logo} alt="logo" />
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
