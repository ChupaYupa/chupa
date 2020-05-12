import React from 'react';
import styles from './Footer.module.css';
import telegramIcon from './image/iconfinder_social-07_3146784.png';
import socialIcon from './image/vk.png';
import githubIcon from './image/github (2).png';
import gmailIcon from './image/gmail.png';

function Footer() {
  return (
    <div className={styles.block}>
        <div className={styles.wrapper}>
            <div className={styles.iconBlock}>
        <div className={styles.socialIcon}>
            <a href="">
                <img src={telegramIcon} alt=""/>
            </a>
        </div>
            <div className={styles.socialIcon}>
            <a href="">
                <img src={socialIcon} alt=""/>
            </a>
            </div>
            <div className={styles.socialIcon}>
            <a href="">
                <img src={gmailIcon} alt=""/>
            </a>
            </div>
            <div className={styles.socialIcon}>
            <a href="">
                <img src={githubIcon} alt=""/>
            </a>
            </div>
            </div>
        <div className={styles.data}>All rights reserved  ©2019</div>
        </div>
    </div>
  );
}

export default Footer;