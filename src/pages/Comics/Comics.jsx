import React from "react";
import "./comics.css";
import { comicsData } from "../../assets/data/comicsData";
import { Link } from "react-router-dom";
import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
import MyButton from "../../components/MyButton/MyButton";
const Comics = () => {
  return (
    <div className="comics">
      <HeaderBanner />
      <div className="films_container">
        {comicsData.map(function (item, i) {
          return (
            <div className="comics_card" key={i}>
              <img src={item.photo} alt="" />
              <Link to={`/comics/${item.id}`} className="comics_title">
                {item.title}
              </Link>
              <span className="comics_price">{item.price}</span>
            </div>
          );
        })}
      </div>

      <div className="load_more_comics">
        <MyButton title="LOAD MORE" color="white" bg="#9F0013" />
      </div>
    </div>
  );
};

export default Comics;
