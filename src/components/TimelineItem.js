import React from "react";
import "./TimelineItem.css";

class TimelineItem extends React.Component {
  render() {
    return (
      <div className="timeline-tile">
        <div className="date">{this.props.date}</div>

        <div className="divider"></div>

        <div className="place">{this.props.place}</div>
        <div className="subject">{this.props.subject}</div>
      </div>
    );
  }
}

export default TimelineItem;
