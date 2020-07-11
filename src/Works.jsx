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
            {/*<div className={styles.project}>*/}
            {/*  <div className={styles.projectImg}>*/}
            {/*    <a className={styles.btnShow} href="">*/}
            {/*      Смотреть*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*  <span className={styles.projectTitle}>*/}
            {/*    <a href="https://github.com/ChupaYupa/New">Social Network</a></span>*/}
            {/*  <span className={styles.description}>*/}
            {/*    React + Redux, REST API, SPA*/}
            {/*  </span>*/}
            {/*</div>*/}
            {/*<div className={styles.project}>*/}
            {/*  <div className={styles.projectImg}>*/}
            {/*    <a className={styles.btnShow} href="">*/}
            {/*      Смотреть*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*  <span className={styles.projectTitle}>*/}
            {/*    <a href="https://github.com/ChupaYupa/DogGame">Dog Game</a>*/}
            {/*    </span>*/}
            {/*  <span className={styles.description}>*/}
            {/*    GIT: https://github.com/ChupaYupa/TodoList*/}
            {/*    React + Redux, отработка алгоритмов*/}
            {/*  </span>*/}
            {/*</div>*/}
            {/*<div className={styles.project}>*/}
            {/*  <div className={styles.projectImg}>*/}
            {/*    <a className={styles.btnShow} href="">*/}
            {/*      Смотреть*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*  <span className={styles.projectTitle}>*/}
            {/*    <a href="https://github.com/ChupaYupa/Counter">Super counter</a>*/}
            {/*    </span>*/}
            {/*  <span className={styles.description}>*/}
            {/*    GIT: https://github.com/ChupaYupa/TodoList*/}
            {/*    Уовершенственный счетчик на React Redux*/}
            {/*  </span>*/}
            {/*</div>*/}
            {/*<div className={styles.project}>*/}
            {/*  <div className={styles.projectImg}>*/}
            {/*    <a className={styles.btnShow} href="">*/}
            {/*      Смотреть*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*  <span className={styles.projectTitle}>*/}
            {/*    <a href="https://github.com/ChupaYupa/TodoList">React Todolist</a>*/}
            {/*  </span>*/}
            {/*  <span className={styles.description}>*/}
            {/*    Знаменитый todolist на React с логинизацией*/}
            {/*  </span>*/}
            {/*</div>*/}

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
