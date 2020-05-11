import React from 'react';
import styles from './BlockFour.module.css';

function BlockFour() {
    return (
        <div className={styles.Block}>
            <div className={styles.wrapper}>
                <div className={styles.FourContainer}>
                    <h2 className={styles.story}>I Am Available For Freelancer</h2>
                    <div className={styles.line}></div>
                    <button className={styles.name}>HERE ME</button>
                </div>
            </div>
        </div>
    );
}

export default BlockFour;