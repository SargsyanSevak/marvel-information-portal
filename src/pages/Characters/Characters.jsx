import React from "react";
import Aside from "../../components/Aside/Aside";
import asidePhoto from "../../assets/image/asidePhoto.png";
import Main from "../../components/Main/Main";
import RandomCharacters from "../../components/RandomCharacters/RandomCharacters";


const Characters = () => {
  return (
    <div>
      <RandomCharacters />
      <section id="flexContainer">
        <Main />
        <Aside />
        <img src={asidePhoto} alt="" className="aside-photo" />
      </section>
    </div>
  );
};

export default Characters;
