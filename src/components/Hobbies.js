import React from "react";
import HobbiesItem from "./HobbiesItem";
import "./css/Hobbies.css";

class Hobbies extends React.Component {
  render() {
    return (
      <div id="Hobbies">
        <div className="section-title">Hobbies</div>
        <div className="hobbies-elements">
          <HobbiesItem
            subject={"Nature photography, click to visit my instagram gallery"}
            image={`${process.env.PUBLIC_URL}/assets/images/camera.png`}
            alt="camera"
            link="https://www.instagram.com/starrynight_618/"
          />
          <HobbiesItem
            subject={"Learning new languages"}
            image={`${process.env.PUBLIC_URL}/assets/images/question.png`}
            alt="question"
          />
          <HobbiesItem
            subject={"Reading thriller novels / writing short stories"}
            image={`${process.env.PUBLIC_URL}/assets/images/book.png`}
            alt="book"
          />
          <HobbiesItem
            subject={"Pastel and pencil drawing"}
            image={`${process.env.PUBLIC_URL}/assets/images/drawing.png`}
            alt="drawing"
          />
        </div>
      </div>
    );
  }
}

export default Hobbies;
