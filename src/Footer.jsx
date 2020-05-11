import React from 'react';
import styles from './Footer.module.css';
import telegramIcon from './image/telegram.png';
import socialIcon from './image/facebook.png';
import githubIcon from './image/github.png';

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
                <img src={githubIcon} alt=""/>
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