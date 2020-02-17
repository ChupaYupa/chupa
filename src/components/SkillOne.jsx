import React from 'react';
import styles from './SkillOne.module.css';

function SkillOne() {
    return (
        <div className={styles.skill}>
            <img className={styles.img} src="https://dmitro.pro/wp-content/uploads/2018/03/js-logo.png" />
            <div className={styles.span}>Описание навыка</div>
        </div>
    );
}

export default SkillOne;