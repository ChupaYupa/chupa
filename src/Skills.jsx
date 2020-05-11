import React from 'react';
import styles from './Skills.module.css';
import SkillOne from './components/SkillOne';

function Skills() {
  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <h2 className={styles.skillsTitle}>My Skills</h2>
        <div className={styles.line}></div>
        <div className={styles.skill}>
          <SkillOne title={"JavaScript"} discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
          <SkillOne title={"CSS"} discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
          <SkillOne title={"React"} discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
        </div>
      </div>

    </div>
  );
}
export default Skills;