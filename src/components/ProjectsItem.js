import React from "react";
import "./ProjectsItem.css";

class ProjectsItem extends React.Component {
  render() {
    return (
      <div className="projects-tile">
        <div className="subject">{this.props.subject}</div>

        <div className="divider"></div>

        <div className="link">{this.props.link}</div>

        <div className="image">
          <img src={this.props.image} alt={this.props.alt} />
          <img src={this.props.image2} alt={this.props.alt2} />
          <img src={this.props.image3} alt={this.props.alt3} />
        </div>
      </div>
    );
  }
}

export default ProjectsItem;
