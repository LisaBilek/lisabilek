import "./App.css";
import { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";
import Introduction from "./components/Introduction";
import { Element } from "react-scroll";

class App extends Component {
  state = {
    visible: true,
    activePage: "Introduction",
  };

  render() {
    return (
      <div id="container-wrap">
        <Header></Header>

        <div id="main">
          <Element name="Timeline" className="element">
            <Introduction />
          </Element>

          <Element name="Projects" className="element">
            <Projects />
          </Element>

          <Element name="Timeline" className="element">
            <Timeline />
          </Element>

          <Element name="Skills" className="element">
            <Skills />
          </Element>

          <Element name="Hobbies" className="element">
            <Hobbies />
          </Element>

          <Element name="Contact" className="element">
            <Footer />
          </Element>
        </div>
      </div>
    );
  }
}

export default App;
