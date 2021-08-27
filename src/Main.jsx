import React from "react";
import styles from "./Main.module.css";
// import Avatar from "./image/Avatar2.jpg"

function Main() {
  return (
    <div className={styles.block} id="Main">
      <div className={styles.wrapper}>
        <div className={styles.span}>
          <span>Здравствуй гость!</span>
          <h1>
            Я<span> React-разработчик</span>
          </h1>

          <p>
            <span>Меня зовут Тамара, я занимаюсь React-разработкой год.
              Использую стек технологий React + Redux. Переодически практикую и нативный JS.Также вертку, использование flexbox, bootstrap 4 и других современных технологий.
              Люблю изучать новое, развиваться в своей профессии</span>
          </p>
        </div>
        <div className={styles.item}></div>
      </div>
    </div>
  );
}

export default Main;
