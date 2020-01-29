import React from 'react';
import styles from './Skills.module.css';
import SkillOne from './components/SkillOne';

function Skills() {
  return (
    <div className={styles.works}>
        <div className={styles.containt}>
            <div className={styles.skills}>My Skills</div>
            <div className={styles.skill}>
            <SkillOne />
            <SkillOne />
            <SkillOne />
            </div>
        </div>
        
    </div>
  );
}
export default Skills;