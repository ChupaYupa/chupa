import React from 'react';
import styles from './Cantacts.module.css';
import axios from "axios";

// let name = (event) => (
//   event.currentTarget.value
// );
// let email = (event) => (
//   event.currentTarget.value
// );
// let message = (event) => (
//   event.currentTarget.value
// );



debugger



function Cantacts() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  let changeName = (event) => (
    setName(event.currentTarget.value)
  );
  let changeEmail = (event) => (
    setEmail(event.currentTarget.value)
  );
  let changeMessage = (event) => (
    setMessage(event.currentTarget.value)
  );

  const form = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3010/submit", {
      name, email, message
    })
      .then(() => { alert('Your message has been send') })
  };

  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <h2 className={styles.myCantact}>Contacts</h2>
        <div className={styles.line}></div>

        <form className={styles.form}>
          <input type='text' placeholder="Name" onChange={changeName}></input>
          <input type='text' size='40px' placeholder="Email" onChange={changeEmail}></input>
          <textarea rows="10" cols="60" onChange={changeMessage} placeholder="Your message"></textarea>
        </form>
        <button className={styles.send} onClick={form}>Submit</button>
      </div>
    </div >
  );
}

export default Cantacts;