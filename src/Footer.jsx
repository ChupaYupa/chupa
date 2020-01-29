import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
        <div className={styles.myName}>Tamara Makarycheva</div>
        <div className={styles.block}>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
            <div className={styles.four}></div>
        </div>
        <div className={styles.data}>All rights reserved  ©2019</div>
        </div>
    </div>
  );
}

export default Footer;