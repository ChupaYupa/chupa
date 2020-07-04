import React from "react";
import styles from "./Works.module.css";
import Fade from "react-reveal/Fade";

function Works() {
  return (
    <div className={styles.Block} id="projects">
      <Fade bottom>
        <div className={styles.wrapper}>
          <div className={styles.myWorks}>
            <h2 className={styles.skills}>My Works</h2>
            <div className={styles.line}></div>
          </div>
          <div className={styles.projects}>
            <div className={styles.project}>
              <div className={styles.projectImg}>
                <a className={styles.btnShow} href="">
                  Смотреть
                </a>
              </div>
              <span className={styles.projectTitle}>
                10 tips for drawing with coloured pencils
              </span>
              <span className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
                enim...
              </span>
            </div>
            <div className={styles.project}>
              <div className={styles.projectImg}>
                <a className={styles.btnShow} href="">
                  Смотреть
                </a>
              </div>
              <span className={styles.projectTitle}>
                10 tips for drawing with coloured pencils
              </span>
              <span className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
                enim...
              </span>
            </div>
            <div className={styles.project}>
              <div className={styles.projectImg}>
                <a className={styles.btnShow} href="">
                  Смотреть
                </a>
              </div>
              <span className={styles.projectTitle}>
                10 tips for drawing with coloured pencils
              </span>
              <span className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
                enim...
              </span>
            </div>
            <div className={styles.project}>
              <div className={styles.projectImg}>
                <a className={styles.btnShow} href="">
                  Смотреть
                </a>
              </div>
              <span className={styles.projectTitle}>
                10 tips for drawing with coloured pencils
              </span>
              <span className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
                enim...
              </span>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
export default Works;
