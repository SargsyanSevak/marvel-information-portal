import React from "react";
import "./header-banner.css";
import avenger from "../../assets/image/Avengers.png";
import avengerBanner from "../../assets/image/Avengers logo.png";
const HeaderBanner = () => {
  return (
    <div className="header_banner">
      <div className="left_side">
        <img src={avenger} alt="" />
        <h4>
          New comics every week! <br />
          Stay tuned!
        </h4>
      </div>
      <img src={avengerBanner} alt="" className="right_banner" />
    </div>
  );
};

export default HeaderBanner;
