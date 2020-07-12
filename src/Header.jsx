import React from "react";
import styles from "./header.module.css";

import { Link, animateScroll as scroll } from "react-scroll";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <Link to="Main" activeClass={styles.active} spy={true} smooth={true} duration={500}>
            Главное
          </Link>
          <Link to="Skills" activeClass={styles.active} spy={true} smooth={true} duration={500}>
            Навыки
          </Link>
          <Link to="projects" activeClass={styles.active} spy={true} smooth={true} duration={500}>
            Проекты
          </Link>
        <Link to="Contacts" activeClass={styles.active} spy={true} smooth={true} duration={500}>
            Контакт
         </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
