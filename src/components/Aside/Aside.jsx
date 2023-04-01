import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import { ContextValue } from "../MyContext/MyContext";
import SearchBar from "../SearchBar/SearchBar";
import Skeleton from "../Skeleton/Skeleton";
import "./aside.css";
const Aside = () => {
  const { activeCharacter } = useContext(ContextValue);

  return (
    <aside>
      {activeCharacter.length ? (
        <div className="character_body">
          <div className="character_details">
            <div className="container">
              <div className="img_container">
                <img src={activeCharacter[0].imgurl} alt="" />
              </div>
              <div className="title_btns">
                <h4>{activeCharacter[0].title}</h4>
                <div className="btns_group_details">
                  <Link to={`/search/${activeCharacter[0].id}`}>
                  <MyButton title="HOMEPAGE" bg="#9F0013" color="white" />
                  </Link>
                  <MyButton title="WIKI" bg="#5C5C5C" color="white" />
                </div>
              </div>
            </div>
            <div className="description_container">
              <p>{activeCharacter[0].description}</p>
            </div>
            <div className="comics_container">
              <ul className="comics__title">
                Comics :
                {activeCharacter[0].comics.map(function (item, i) {
                  return (
                    <li key={i} className="comics_item_li">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <SearchBar />
        </div>
      ) : (
        <Skeleton />
      )}
    </aside>
  );
};

export default Aside;
