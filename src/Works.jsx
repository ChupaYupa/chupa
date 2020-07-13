import React from "react";
import styles from "./Works.module.css";
import Fade from "react-reveal/Fade";
import Work from "./Work";

function Works(props) {

  return (
    <div className={styles.Block} id="projects">
      <Fade bottom>
        <div className={styles.wrapper}>
          <div className={styles.myWorks}>
            <h2 className={styles.skills}>Мои проекты</h2>
            <div className={styles.line}></div>
          </div>
          <div className={styles.projects}>
            {
              props.state.map(
                  u => <Work state={u}
                                   key={u.id}
                             link={u.link}
                             nameWork={u.nameWork}
                             skill={u.skill}


              />)
            }

          </div>
        </div>
      </Fade>
    </div>
  );
}
export default Works;
