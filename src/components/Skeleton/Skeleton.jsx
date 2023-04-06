import React from "react";
import "./skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonAnim = () => {
  return (
    <div className="skeleton">
      <h4>Please select a character to see information</h4>
      <SkeletonTheme>
        <div className="skeleton-body">
          <div className="sksleton-circle">
            <Skeleton circle width={"40px"} height={"40px"} />
          </div>
          <div className="skeleton-item">
            <Skeleton height={"20px"} />
          </div>
        </div>
        <Skeleton height={"35px"} style={{margin:'10px 0px'}}/>
        <Skeleton height={"35px"} style={{margin:'10px 0px'}}/>
        <Skeleton height={"35px"} style={{margin:'10px 0px'}}/>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonAnim;
