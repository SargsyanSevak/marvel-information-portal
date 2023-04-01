import React from "react";
import "./ComicsDetails.css";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import { Link, useParams } from "react-router-dom";
import { comicsData } from "../../assets/data/comicsData";

const ComicsDetails = () => {
  const { id } = useParams();

  const comics = comicsData.find((comics) => comics.id.toString() === id);
  console.log(id);
  const { title, description, photo, pagesCount, language, price } = comics;
  return (
    <div className="comics_details">
      <HeaderBanner />
      <div className="comics-details-container">
        <div className="comics-details-img">
          <img src={photo} alt="" />
        </div>

        <div className="comics-details-description">
          <h1>{title}</h1>
          <p>{description}</p>
          <h3>{pagesCount}</h3>
          <h3>{language}</h3>
          <h4>{price}</h4>
        </div>
        <Link to={"/comics"} className="back-to-all">
          Back to all
        </Link>
      </div>
    </div>
  );
};

export default ComicsDetails;
