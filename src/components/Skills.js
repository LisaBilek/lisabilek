import React from "react";
import SkillsItem from "./SkillsItem";
import "./css/Skills.css";

class Skills extends React.Component {
  render() {
    return (
      <div id="Skills">
        <div className="section-title">Skills</div>
        <div className="skills-elements">
          <SkillsItem
            subject={"C++ Object Oriented programming "}
            image={`${process.env.PUBLIC_URL}/assets/images/c++.png`}
            alt="c++_logo"
          />
          <SkillsItem
            subject={"Application developement on Android Studio "}
            image={`${process.env.PUBLIC_URL}/assets/images/androids.png`}
            alt="android_studio_logo"
          />
          <SkillsItem
            subject={"Spring Boot backend web developement"}
            image={`${process.env.PUBLIC_URL}/assets/images/spring.png`}
            alt="spring_logo"
          />
          <SkillsItem
            subject={"User Interface Design using Figma "}
            image={`${process.env.PUBLIC_URL}/assets/images/figma.png`}
            alt="figma_logo"
          />
        </div>
      </div>
    );
  }
}

export default Skills;
