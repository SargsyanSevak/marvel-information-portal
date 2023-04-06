import React from "react";
import "./search-result.css";
import { useParams } from "react-router-dom";
import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
import { useContext } from "react";
import { ContextValue } from "../../components/MyContext/MyContext";
import Loader from "../../components/Loader/Loader";


const SearchResult = () => {
  const { id } = useParams();
  const {charactersData} = useContext(ContextValue)
  const character = charactersData.find(
    (comics) => comics.id.toString() === id
  );
  
  return (
    <div className="SearchResult">
      <HeaderBanner />
    {  
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
      }
    </div>
  );
};

export default SearchResult;
