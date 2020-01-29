import React from 'react';
import styles from './header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <a href="" className="link">Main</a>
                    <a href="" className="link">Skills</a>
                    <a href="" className="link">Projects</a>
                    <a href="" className="link">Contacts</a>
                </div>
            </div>
        </div>
    );
}

export default Header;