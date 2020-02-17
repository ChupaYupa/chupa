import React from 'react';
import styles from './BlockFour.module.css';

function BlockFour() {
    return (
        <div className={styles.BlockFour}>
            <div className={styles.container}>
                <div className={styles.FourContainer}>
                    <div className={styles.story}>Distant work</div>
                    <button className={styles.name}>sign on</button>
                </div>
            </div>
        </div>
    );
}

export default BlockFour;