import React from 'react';
import styles from './Works.module.css';
import blog1 from './image/blog1.jpg';


function Works() {
    return (
        <div className={styles.Block}>
            <div className={styles.wrapper}>
                <div className={styles.myWorks}>
                    <h2 className={styles.skills}>My Works</h2>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.projects}>
                <div className={styles.project}>
                    <div className={styles.projectImg}>
                        <a className={styles.btnShow} href="">Смотреть</a>
                    </div>
                    <span className={styles.projectTitle}>10 tips for drawing with coloured pencils</span>
                    <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...</span>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectImg}>
                        <a className={styles.btnShow} href="">Смотреть</a>
                    </div>
                    <span className={styles.projectTitle}>10 tips for drawing with coloured pencils</span>
                    <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...</span>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectImg}>
                        <a className={styles.btnShow} href="">Смотреть</a>
                    </div>
                    <span className={styles.projectTitle}>10 tips for drawing with coloured pencils</span>
                    <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...</span>
                </div>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.btnShow} href="">Смотреть</a>
                        </div>
                        <span className={styles.projectTitle}>10 tips for drawing with coloured pencils</span>
                        <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...</span>
                    </div>
            </div>
            </div>
        </div>
    );
}
export default Works;