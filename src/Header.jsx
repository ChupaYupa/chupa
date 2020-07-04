import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <a href="#Main" className="link">
            Main
          </a>
          <a href="#Skills" className="link">
            Skills
          </a>
          <a href="#projects" className="link">
            Projects
          </a>
          <a href="#Contacts" className="link">
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
