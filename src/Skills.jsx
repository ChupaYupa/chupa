import React from "react";
import styles from "./Skills.module.css";
import SkillOne from "./components/SkillOne";
import htmlIcon from "./image/Html.png";
import cssIcon from "./image/css.png";
import jsIcon from "./image/4375378-512.png";
import reactIcon from "./image/1174949-512.png";
import reduxIcon from "./image/redux.png";
import bootstrapIcon from "./image/Boot.png";
import NodeJSIcon from "./image/Node.png";
import Fade from "react-reveal/Fade";

function Skills() {
  return (
    <div className={styles.block} id="Skills">
      <Fade bottom>
        <div className={styles.wrapper}>
          <h2 className={styles.skillsTitle}>My Skills</h2>
          <div className={styles.line}></div>
          <div className={styles.skill}>
            <SkillOne title={"HTML"} icon={htmlIcon} />
            <SkillOne title={"CSS"} icon={cssIcon} />
            <SkillOne title={"JavaScript"} icon={jsIcon} />
            <SkillOne title={"React"} icon={reactIcon} />
            <SkillOne title={"Redux"} icon={reduxIcon} />
            <SkillOne title={"bootstrap"} icon={bootstrapIcon} />
            <SkillOne title={"NodeJS"} icon={NodeJSIcon} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
export default Skills;
