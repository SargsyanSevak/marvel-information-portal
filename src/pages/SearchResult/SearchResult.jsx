import React from "react";
import "./search-result.css";
import { useParams } from "react-router-dom";
import { charactersData } from "../../assets/data/charactersData";
import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
const SearchResult = () => {
  const { id } = useParams();
  const character = charactersData.find(
    (comics) => comics.id.toString() === id
  );

  const { title, description, imgurl } = character;

  return (
    <div className="SearchResult">
      <HeaderBanner />
      <div className="search-container">
        <div className="img_container">
          <img src={imgurl} alt="" />
        </div>
        <div className="search_description_container">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
