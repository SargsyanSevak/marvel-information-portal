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
        <div className="comics_details_container">
          <div className="comics__img__container">
            <img src={comics.thumbnail.path + ".jpg"} alt="" />
          </div>
          <div className="comics__description__container">
            <div className="title_bold_black_22">
              <h4>{comics.title}</h4>
            </div>
            <div className="paragraph_18">
              <p>{comics.description}</p>
            </div>
            <div className="pargraph_18">
              <p>{comics.pageCount > 0 ? comics.pageCount : "No"} pages</p>
            </div>
            <div className="pargraph_18">
              <p>Language:{comics.textObjects.language}</p>
            </div>
            <div className="description_price">
              {comics.prices[0].price > 0 ? (
                <span>{comics.prices[0].price}$</span>
              ) : (
                <span>NOT AVAILABLE </span>
              )}
            </div>
          </div>
          <Link to={"/comics"} className="back_to_all title_bold_18">
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
