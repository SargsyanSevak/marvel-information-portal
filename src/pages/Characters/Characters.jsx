import React from "react";
import Aside from "../../components/Aside/Aside";
import asidePhoto from "../../assets/image/asidePhoto.png";
import Main from "../../components/Main/Main";
import RandomCharacter from "../../components/RandomCharacter/RandomCharacter";

const Characters = () => {
  return (
    <div>
      <RandomCharacter />
      <section id="flexContainer">
        <Main />
        <Aside />
        <img src={asidePhoto} alt="" className="aside-photo" />
      </section>
    </div>
  );
};

export default Characters;
