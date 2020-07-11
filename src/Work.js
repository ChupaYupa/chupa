import styles from "./Works.module.css";
import React from "react";
import Works from "./Works";


function Work (props) {


        return (
            <div className={styles.project}>
                <div className={styles.projectImg}>
                    <a className={styles.btnShow} href={props.state.link}>
                        Смотреть
                    </a>
                </div>
                <span className={styles.projectTitle}><a href={props.state.link}>{props.state.nameWork}</a></span>
                <span className={styles.description}>
                {props.state.skill}
              </span>
            </div>);
}

export default Work;