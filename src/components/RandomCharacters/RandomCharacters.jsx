import React, { useContext, useEffect, useState } from "react";

import "./random-characters.css";
import mjolnir from "../../assets/image/mjolnir.png";
import shield from "../../assets/image/shield.png";
import Button from "../Button/Button";
import { ContextValue } from "../MyContext/MyContext";
import Loader from "../Loader/Loader";

const RandomCharacters = () => {
  const { charactersData } = useContext(ContextValue);
  const [item, setItem] = useState([]);

  const getRandomElement = async () => {
    let rand = await charactersData[
      Math.floor(Math.random() * charactersData.length)
    ];
    setItem(rand);
  };

  useEffect(() => {
    getRandomElement();
  }, [charactersData]);

  return (
    <div className="random__characters">
      <div className="random-characters-left">
        {!Array.isArray(item) ? (
          <>
            <div className="img_container">
              <img src={item?.thumbnail.path + ".jpg"} alt="" />
            </div>
            <div className="description_container">
              <div className="title">
                <h4 className="title_bold_black_22">{item?.name}</h4>
              </div>
              <div className="description">
                <p className="paragraph_14">{item?.description}</p>
              </div>
              <div className="btn_group">
                <Button appearance="red" href={`/search/${item?.id}`}>
                  Homepage
                </Button>
                <Button appearance="gray" href={"#"}>
                  Wiki
                </Button>
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
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
            <Button
              appearance={"red"}
              onClick={() => getRandomElement(charactersData)}
            >
              TRY IT
            </Button>
          </div>
        </div>
        <div className="random-characters-right-images">
          <img src={mjolnir} alt="" className="mjolnir" />
          <img src={shield} alt="" className="shield" />
        </div>
      </div>
    </div>
  );
};

export default RandomCharacters;
