import React, { useState } from "react";
import "./comics.css";
import { Link } from "react-router-dom";
import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
import { useContext } from "react";
import { ContextValue } from "../../components/MyContext/MyContext";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
const itemsPerRow = 12;

const Comics = () => {
  const [next, setNext] = useState(itemsPerRow);
  const { comicsData } = useContext(ContextValue);

  const handleMoreImage = () => {
    setNext(next + 12);
  };
  return (
    <div className="comics">
      <HeaderBanner />
      {comicsData.length ? (
        <div className="films_container">
          {comicsData.slice(0, next)?.map(function (item, i) {
            return (
              <div className="comics_card" key={i}>
                <img src={item.thumbnail.path + ".jpg"} alt="" />
                <Link to={`/comics/${item.id}`} className="comics_title">
                  {item.title}
                </Link>
                <div className="comics_price">
                  {item.prices[0].price > 0 ? (
                    <span>{item.prices[0].price}$</span>
                  ) : (
                    <span>NOT AVAILABLE </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
      {next < comicsData?.length && (
        <div className="load_more_comics">
          <Button appearance={'red'} onClick={handleMoreImage}>LOAD MORE</Button>
        </div>
      )}
    </div>
  );
};

export default Comics;
