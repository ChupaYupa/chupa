import React from 'react';
import styles from './SkillOne.module.css';

function SkillOne(props) {
    return (
        <div className={styles.skill}>
        <div className={styles.icon}>
            <img src={props.icon}/>
        </div>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.span}>{props.discription}</span>
        </div>
    );
}

export default SkillOne;