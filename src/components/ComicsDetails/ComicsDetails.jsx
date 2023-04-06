import React from "react";
import "./ComicsDetails.css";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { ContextValue } from "../MyContext/MyContext";
import Loader from "../Loader/Loader";

const ComicsDetails = () => {
  const { id } = useParams();
  const { comicsData } = useContext(ContextValue);
  const comics = comicsData.find((comics) => comics.id.toString() === id);
 
  return (
    <div className="comics_details">
      <HeaderBanner />
      {comics ? (
        <div className="comics-details-container">
          <div className="comics-details-img">
            <img src={comics.thumbnail.path + ".jpg"} alt="" />
          </div>
          <div className="comics-details-description">
            <h1>{comics.title}</h1>
            <p>{comics.description}</p>
            <h3>{comics.pageCount} pages</h3>
            <h3>Language:{comics.textObjects.language}</h3>
            <div className="comics_price">
              {comics.prices[0].price > 0 ? (
                <span>{comics.prices[0].price}$</span>
              ) : (
                <span>NOT AVAILABLE </span>
              )}
            </div>
          </div>
          <Link to={"/comics"} className="back-to-all">
            Back to all
          </Link>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ComicsDetails;
