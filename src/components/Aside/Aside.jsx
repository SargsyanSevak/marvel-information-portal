import React, { useContext } from "react";
import Button from "../Button/Button";
import { ContextValue } from "../MyContext/MyContext";
import SearchBar from "../SearchBar/SearchBar";
import SkeletonAnim from "../Skeleton/Skeleton";
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
                <img src={activeCharacter[0].thumbnail.path + ".jpg"} alt="" />
              </div>
              <div className="title_btns">
                <h4 className="title_bold_black_22">
                  {activeCharacter[0].name}
                </h4>
                <div className="btns_group_details">
                  <Button
                    appearance={"red"}
                    href={`/search/${activeCharacter[0].id}`}
                  >
                    HOMEPAGE
                  </Button>
                  <Button>WIKI</Button>
                </div>
              </div>
            </div>
            <div className="description_container">
              <p className="title_14">
                {activeCharacter[0].comics.description}
              </p>
            </div>
            <div className="comics_container">
              <ul className="title_bold_18">
                Comics :
                {activeCharacter[0].comics.items.map(function (item, i) {
                  return (
                    <li key={i} className="comics_item_li title_14">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <SearchBar />
        </div>
      ) : (
        <SkeletonAnim />
      )}
    </aside>
  );
};

export default Aside;
