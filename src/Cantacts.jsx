import React, { useState } from "react";
import styles from "./Cantacts.module.css";
import axios from "axios";
import Fade from "react-reveal/Fade";
import emailjs from 'emailjs-com'
import { logDOM } from "@testing-library/react";

function Cantacts() {
    const [info, setInfo] = useState({
        name: "",
        email: "",
        message: ""
    });

    const onHandleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_xz758is', 'template_08gorll', e.target, 'user_2DTXt2HVfemkl62ZUVU3T')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };

    return (
        <div className={styles.block} id="Contacts">
            <Fade bottom>
                <div className={styles.wrapper}>
                    <h2 className={styles.myCantact}>Напишите мне</h2>
                    <div className={styles.line}></div>

                    <form className={styles.form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Name" name={'name'} onChange={onHandleChange} />
                        <input
                            type="text"
                            size="40px"
                            placeholder="Email"
                            onChange={onHandleChange}
                            name={'email'}
                        />
                        <textarea
                            rows="10"
                            cols="60"
                            onChange={onHandleChange}
                            placeholder="Your message"
                            name={'message'}
                        />

                        <button className={styles.send}>
                            Отправить
                        </button>
                    </form>
                </div>
            </Fade>
        </div>
    );
}

export default Cantacts;
