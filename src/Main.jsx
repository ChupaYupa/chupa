import React from 'react';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <div className={styles.span}>
          <span>Hello!</span>
          <h1>I am <span>front-end developer</span></h1>

          <p><span>My name is Tamara Makarycheva</span></p>
        </div>
        <div className={styles.item}>
        </div>

      </div>
    </div>
  );
}

export default Main;