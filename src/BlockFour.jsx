import React from "react";
import styles from "./BlockFour.module.css";
import Fade from "react-reveal/Fade";
function BlockFour() {
  return (
    <div className={styles.Block}>
      <Fade bottom>
        <div className={styles.wrapper}>
          <div className={styles.FourContainer}>
            <h2 className={styles.story}>Ищу удаленную форму работы </h2>
            <div className={styles.line}></div>
            <a
              href="https://wa.me/89811583126?text=Вакансия"
              className={styles.name}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default BlockFour;
