import React from 'react';
import styles from './Cantacts.module.css';
import axios from "axios";

debugger
const form = ("submit", (e) => {
  debugger
  e.preventDefault();
  debugger
  axios.post("http://localhost:3010/submit", {

    // Name: form.querySelector('#Name').value,
    // Email: form.querySelector('#Email').value,
    // message: form.querySelector('#message').value,
  })
    .then(() => { alert('Your message has been send') })
});


function Cantacts() {
  return (
    <div className={styles.cantacts}>
      <div className={styles.container}>
        <div className={styles.myCantact}>Contacts</div>
        <form className={styles.form}>
          <input type='text' placeholder="Name" id='Name'></input>
          <input type='text' size='40px' placeholder="Email" id='Email'></input>
          <textarea rows="10" cols="60" id='message' placeholder="Your message"></textarea>
        </form>
        <button className={styles.send} onClick={form}>Submit</button>
      </div>
    </div >
  );
}

export default Cantacts;