import React from "react";
import styles from "./Cantacts.module.css";
import axios from "axios";
import Fade from "react-reveal/Fade";


function Cantacts() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    let changeName = (event) => setName(event.currentTarget.value);
    let changeEmail = (event) => setEmail(event.currentTarget.value);
    let changeMessage = (event) => setMessage(event.currentTarget.value);

    const form = (e) => {
        e.preventDefault();
        axios.post("https://express-js2.herokuapp.com/submit", {
            name,
            email,
            message,
        })
            .then(() => {
                alert("Your message has been send");
            });
    };

    return (
        <div className={styles.block} id="Contacts">
            <Fade bottom>
                <div className={styles.wrapper}>
                    <h2 className={styles.myCantact}>Напишите мне</h2>
                    <div className={styles.line}></div>

                    <form className={styles.form}>
                        <input type="text" placeholder="Name" onChange={changeName} />
                        <input
                            type="text"
                            size="40px"
                            placeholder="Email"
                            onChange={changeEmail}
                        />
                        <textarea
                            rows="10"
                            cols="60"
                            onChange={changeMessage}
                            placeholder="Your message"
                        />
                    </form>
                    <button className={styles.send} onClick={form}>
                        Отправить
                    </button>
                </div>
            </Fade>
        </div>
    );
}

export default Cantacts;
