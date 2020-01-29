import React from 'react';
import styles from './Cantacts.module.css';

function Cantacts() {
  return (
    <div className={styles.cantacts}>
      <div className={styles.container}>
        <div className={styles.myCantact}>Contacts</div>
        <form className={styles.form}>
          <input></input>
          <input></input>
          <textarea></textarea>
        </form>
        <div className={styles.send}>Submit</div>
      </div>
    </div>
  );
}

export default Cantacts;