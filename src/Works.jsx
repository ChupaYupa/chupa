import React from 'react';
import styles from './Works.module.css';

function Works() {
    return (
        <div className={styles.works}>
            <div className={styles.container}>
                <div className={styles.myWorks}>
                    <span>My Works</span>
                </div>
                <div className={styles.panel}>
                    <div className={styles.panelOne}>
                        <div className={styles.step1}>
                        <button>look</button>
                        </div>
                        <div className={styles.content}>Description</div>
                    </div>
                    <div className={styles.panelTwo}>
                        <div className={styles.step2}>
                        <button>look</button>
                        </div>
                        <div className={styles.content}>Description</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Works;