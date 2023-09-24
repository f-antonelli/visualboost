import { useEffect, useState } from "react";
import styles from "./hero.module.css";
import AOS from "aos";

const Hero = () => {
  const [isChecked, setisChecked] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
      easing: "ease-in-out",
    });
  }, []);

  const handleClick = () => {
    setisChecked(!isChecked);
  };

  return (
    <div className={styles.wrapper}>
      {isChecked && (
        <>
          <div data-aos="fade-right" className={`${styles.hero_img_1}`}></div>
          <div data-aos="fade-left" className={styles.hero_img_2}></div>
        </>
      )}

      <div className={styles.container_hero}>
        <h1>VISUAL BOOST</h1>
        <h2>CREATIVE SOLUTIONS</h2>
        <div className={styles.container_btn}>
          <p>¡PONETE EN MODO VISUAL!</p>

          <label className={styles.switch}>
            <input onClick={handleClick} type="checkbox" />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Hero;
