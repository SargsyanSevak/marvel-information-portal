import React from "react";

import "./random-characters.css";
import mjolnir from "../../assets/image/mjolnir.png";
import shield from "../../assets/image/shield.png";
import Button from "../Button/Button";

const RandomCharacters = () => {
  return (
    <div className="random__characters">
      <div className="random-characters-left">
        <div className="img_container">
          <img
            src="https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=397&ch=397"
            alt=""
          />
        </div>
        <div className="description_container">
          <div className="title">
            <h4 className="title_bold_black_22">THOR</h4>
          </div>
          <div className="description">
            <p className="paragraph_14">
              As the Norse God of thunder and lightning, Thor wields one of the
              greatest weapons ever made, the enchanted hammer Mjolnir. While
              others have described Thor as an over-muscled, oafish imbecile,
              he's quite smart and compassionate...
            </p>
          </div>
          <div className="btn_group">
            <Button appearance="red" href={"#"}>
              Homepage
            </Button>
            <Button appearance="gray" href={"#"}>
              Wiki
            </Button>
          </div>
        </div>
      </div>
      <div className="random-characters-right">
        <div className="random-characters-right-description">
          <div className="title">
            <p className="paragraph_bold_24">
              Random character for today! Do you want to get to know him better?
            </p>
          </div>
          <div className="description">
            <p className="paragraph_bold_24">Or choose another one</p>
          </div>
          <div className="btn_group">
            <Button appearance={"red"}>TRY IT</Button>
          </div>
        </div>
        <div className="random-characters-right-images">
            <img src={mjolnir} alt="" className="mjolnir"/>
            <img src={shield} alt="" className="shield"/>
        </div>
      </div>
    </div>
  );
};

export default RandomCharacters;
