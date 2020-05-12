import React from 'react';
import styles from './Skills.module.css';
import SkillOne from './components/SkillOne';
import reactIcon from "./image/1174949-512.png"
import jsIcon from "./image/4375378-512.png"
import cssIcon from "./image/css.png";


function Skills() {
  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <h2 className={styles.skillsTitle}>My Skills</h2>
        <div className={styles.line}></div>
        <div className={styles.skill}>
          <SkillOne title={"JavaScript"}
                    icon={jsIcon}
                    discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
          <SkillOne title={"CSS"}
                    icon={cssIcon}
                    discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
          <SkillOne title={"React"}
                    icon={reactIcon}
                    discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
        </div>
      </div>

    </div>
  );
}
export default Skills;