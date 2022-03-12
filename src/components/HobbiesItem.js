import React from "react";
import "./css/HobbiesItem.css";

class HobbiesItem extends React.Component {
  render() {
    return (
      <div className="hobbies-tile">
        <a href={this.props.link}>
          <div className="subject">{this.props.subject}</div>
          <div className="divider"></div>
          <div className="image">
            <img src={this.props.image} alt={this.props.alt} />
          </div>
        </a>
      </div>
    );
  }
}

export default HobbiesItem;
