import React from "react";
import "./css/Introduction.css";

class Introduction extends React.Component {
  render() {
    return (
      <div id="Introduction">
        <div className="section-title">Welcome stranger!</div>
        <div className="intro-container">
          <div className="intro-image">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/pcProfilePic.png`}
              alt="profile"
            />
          </div>
        </div>
        <div className="intro-container">
          <div className="intro-text">
            You've landed on my small corner of the internet! <br />
            To get to know me better, just keep scolling or choose one of the
            sections in the menu bar to jump into it :)
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
