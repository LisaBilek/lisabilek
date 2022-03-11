import React from "react";
import ProjectsItem from "./ProjectsItem";
import "./css/Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <div id="Projects">
        <div className="section-title">Projects</div>
        <ul className="projects-elements">
          <ProjectsItem
            subject={
              "Creating this website, a react app to display my portfolio using github pages"
            }
            image={`${process.env.PUBLIC_URL}/assets/images/github.png`}
            alt="github_logo"
            image2={`${process.env.PUBLIC_URL}/assets/images/git.png`}
            alt2="git_logo"
            image3={`${process.env.PUBLIC_URL}/assets/images/react.png`}
            alt3="react_logo"
          />
          <ProjectsItem
            subject={
              "Creating a text adventure game and adapting it to a graphic user interface using Java and JavaFX"
            }
            image={`${process.env.PUBLIC_URL}/assets/images/java.png`}
            alt="java_logo"
            image2={`${process.env.PUBLIC_URL}/assets/images/javafx.png`}
            alt2="javafx_logo"
            image3={`${process.env.PUBLIC_URL}/assets/images/scenebuilder.png`}
            alt3="scenebuilder_logo"
          />
          <ProjectsItem
            subject={
              "Design and creation of a student planner website using HTML, CSS, PHP and an SQL database"
            }
            image={`${process.env.PUBLIC_URL}/assets/images/html css.png`}
            alt="html_css_logo"
            image2={`${process.env.PUBLIC_URL}/assets/images/php.png`}
            alt2="php_logo"
            image3={`${process.env.PUBLIC_URL}/assets/images/mysql.png`}
            alt3="mysql_logo"
          />
          <ProjectsItem
            subject={
              "Creation of a simple arcade mobile game using Unity and C#"
            }
            image={`${process.env.PUBLIC_URL}/assets/images/unity.png`}
            alt="unity_logo"
            image2={`${process.env.PUBLIC_URL}/assets/images/cs.png`}
            alt2="c_sharp_logo"
            image3={`${process.env.PUBLIC_URL}/assets/images/android.png`}
            alt3="android_logo"
          />
        </ul>
      </div>
    );
  }
}

export default Projects;
