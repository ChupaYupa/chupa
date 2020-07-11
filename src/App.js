import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Skills from "./Skills";
import Works from "./Works";
import BlockFour from "./BlockFour";
import Cantacts from "./Cantacts";
import Footer from "./Footer";
import Particles from "react-particles-js";



const particOpt = {
  particles: {
    number: {
      value: 20, //кол-во частиц
      density: {
        //плотность
        enable: true,
        value_area: 1500, //чем ниже, тем кучнее
      },
    },
    color: {
      value: "#ffffff", //цвет
    },
    shape: {
      type: "triangle", //форма частиц
      stroke: {
        width: 0,
        color: "#000000", //цвет
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.3, //прозрачность
      random: true, //рандомная прозрачность если true
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1, //минимальное значение
        sync: false,
      },
    },
    size: {
      value: 10, //размеры
      random: true, //рандом размера
      anim: {
        enable: false,
        speed: 80, //скорость
        size_min: 0.1, //минимальный размер
        sync: false,
      },
    },
    line_linked: {
      //линии между частиц
      enable: true,
      distance: 300, //дистанция
      color: "#c5c5c5", //цвет
      opacity: 0.2, //прозрачность
      width: 1, //толщина
    },
    move: {
      //опции движения
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    //опции интерактивности
    detect_on: "canvas",
    events: {
      onhover: {
        //при наведении
        enable: false,
        mode: "repulse",
      },
      onclick: {
        //при клике
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 800,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 800,
        size: 80,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state  = [
      {id: 1, nameWork: "Social Network", skill: "React + Redux, REST API, SPA", link:"https://github.com/ChupaYupa/New"},
      {id: 2, nameWork: "Dog Game", skill: "React + Redux, отработка алгоритмов",link:"https://github.com/ChupaYupa/DogGame"},
      {id: 3, nameWork: "Super counter", skill: "Уовершенственный счетчик на React Redux",link:"https://github.com/ChupaYupa/Counter"},
      {id: 3, nameWork: "React Todolist", skill: "Знаменитый todolist на React с логинизацией",link:"https://github.com/ChupaYupa/TodoList"}
    ]
  }


  render() {

    return (
        <div className="App">
          <Particles className="particles" params={particOpt}/>
          <Header/>
           <Main/>
          <Skills/>
          <Works state={this.state}
              id={this.state.id}
          />
          <BlockFour/>
          <Cantacts/>
          <Footer/>
        </div>
    );
  }
}

export default App;
