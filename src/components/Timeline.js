import React from "react";
import TimelineItem from "./TimelineItem";
import "./css/Timeline.css";

class Timeline extends React.Component {
  render() {
    return (
      <div id="Timeline">
        <div className="section-title"> Timeline </div>
        <ul className="timeline-elements">
          <TimelineItem
            date={"2021/2022 (Present)"}
            place={"University of Poiters, France"}
            subject={
              "Master's degree in computer science, specialized in software design and development"
            }
          />
          <TimelineItem
            date={"2020/2021"}
            place={"University of Poiters, France"}
            subject={"Bachelor's degree in computer science"}
          />
          <TimelineItem
            date={"2017/2020"}
            place={"University of Tizi Ouzou, Algeria"}
            subject={"Bachelor's degree in computer science"}
          />
        </ul>
      </div>
    );
  }
}

export default Timeline;
