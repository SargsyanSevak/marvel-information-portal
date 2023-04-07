import React from "react";
import "./search-result.css";
import { useParams } from "react-router-dom";
import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
import { useContext } from "react";
import { ContextValue } from "../../components/MyContext/MyContext";
import Loader from "../../components/Loader/Loader";

const SearchResult = () => {
  const { id } = useParams();
  const { charactersData } = useContext(ContextValue);
  const character = charactersData.find(
    (comics) => comics.id.toString() === id
  );

  return (
    <div className="SearchResult">
      <HeaderBanner />

      {character ? (
        <div className="search__result__container">
          <div className="search__result__image">
            <img src={character.thumbnail.path + ".jpg"} alt="" />
          </div>
          <div className="search__result__description">
            <div className="title_bold_black_22">
              <h4>{character.name}</h4>
            </div>
            <div className="paragraph_18">
              <p>
                {character.description
                  ? character.description
                  : "Description not found"}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}

      {/* {  
    character ?
    <div className="search-container">
        <div className="img_container">
          <img src={character.thumbnail.path+'.jpg'} alt="" />
        </div>
        <div className="search_description_container">
          <h3>{character.name}</h3>
          <p>{character.description}</p>
        </div>
      </div> : <Loader/>
      } */}
    </div>
  );
};

export default SearchResult;
