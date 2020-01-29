import React from 'react';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.containt}>
        <div className={styles.span}>
        <span>Hello!</span>
        <span>My name is Tamara Makarycheva</span>
        <span>I am front-end developer</span>
        </div>
        <div className={styles.item}>
          <img src="https://d2xzmw6cctk25h.cloudfront.net/profession/9/v2_image/medium-574a6d8fddd2ee9d924612af6f3f30f5.png" alt="" />
        </div>
      </div>

    </div>
  );
}

export default Main;