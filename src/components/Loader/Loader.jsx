import React from "react";
import { FadeLoader } from "react-spinners";
import "./loader.css";

const Loader = () => {
  
  return (
    <div className="sweet-loading">
        <FadeLoader color="#08449e" radius={'50%'} width={'30px'} height={'30px'} margin={40}  cssOverride={{display:'flex'}}/>
    </div>
  );
};

export default Loader;
