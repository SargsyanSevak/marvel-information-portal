import React from "react";
import "./skeleton.css";
const Skeleton = () => {
  return (
    <div className="skeleton">
      <h4>Please select a character to see information</h4>
      <div className="skeleton_body">
        <div className="top_side">
          <div className="circle">
            <span className="circle"></span>
          </div>
          <div className="item_small"></div>
        </div>
        <div className="bottom_side">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
