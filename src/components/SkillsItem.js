import React from "react";
import "./css/SkillsItem.css";

class SkillsItem extends React.Component {
  render() {
    return (
      <div className="skills-tile">
        <div className="subject">{this.props.subject}</div>

        <div className="divider"></div>

        <div className="link">{this.props.link}</div>

        <div className="image">
          <img src={this.props.image} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default SkillsItem;
