import React from "react";
import "./randomCharacter.css";
import thor from "../../assets/image/thor.png";
import MyButton from "../MyButton/MyButton";
import mjolnir from "../../assets/image/mjolnir.png";
import shield from "../../assets/image/shield.png";
import MyButtonGray from "../MyButtonGray/MyButtonGray";
const RandomCharacter = () => {
  return (
    <div className="random-character-container">
      <div className="character_item">
        <div className="img_container">
          <img src={thor} alt="" className="thor" />
        </div>
        <div className="description">
          <h3 className="heading-black">THOR</h3>
          <p className="paragraph">
            As the Norse God of thunder and lightning, Thor wields one of the
            greatest weapons ever made, the enchanted hammer Mjolnir. While
            others have described Thor as an over-muscled, oafish imbecile, he's
            quite smart and compassionate...
          </p>
          <div className="btn_group">
            <MyButton title="HOMEPAGE" bg="#9F0013" color="white" />
            <MyButton title="WIKI" bg="#5C5C5C" color="white" />
          </div>
        </div>
      </div>
      <div className="random_character">
        <p className="paragraph">
          Random character for today!
          <br />
          Do you want to get to know him better?
          <br />
          <br />
          Or choose another one
        </p>
        <MyButtonGray title="TRY IT" bg="#9F0013" color="white" />
        <img src={mjolnir} alt="" className="mjolnir" />
        <img src={shield} alt="" className="shield" />
      </div>
    </div>
  );
};

export default RandomCharacter;
