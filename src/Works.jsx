import React from 'react';
import styles from './Works.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



const myIcon = {
    width: '200px',
    height: '50px'
}
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
                            <FontAwesomeIcon style={myIcon} icon={faReact} />
                        </div>
                        <div className={styles.content}>Description</div>
                    </div>
                    <div className={styles.panelTwo}>
                        <div className={styles.step2}>
                            <FontAwesomeIcon style={myIcon} icon={faEnvelope} />
                        </div>
                        <div className={styles.content}>Description</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Works;