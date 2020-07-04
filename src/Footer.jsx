import React from "react";
import styles from "./Footer.module.css";
import telegramIcon from "./image/iconfinder_social-07_3146784.png";
import socialIcon from "./image/vk.png";
import githubIcon from "./image/github (2).png";
import gmailIcon from "./image/gmail.png";
import Fade from "react-reveal/Fade";
function Footer() {
  return (
    <div className={styles.block}>
      <Fade bottom>
        <div className={styles.wrapper}>
          <div className={styles.iconBlock}>
            <div className={styles.socialIcon}>
              <a href="tg://resolve?domain=Tom4ick">
                <img src={telegramIcon} alt="" />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a href="https://vk.com/ltom4ikl">
                <img src={socialIcon} alt="" />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a href="mailto:docsperj@gmail.com">
                <img src={gmailIcon} alt="" />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a href="https://github.com/ChupaYupa/chupa">
                <img src={githubIcon} alt="" />
              </a>
            </div>
          </div>
          <div className={styles.data}>All rights reserved ©2019</div>
        </div>
      </Fade>
    </div>
  );
}

export default Footer;
