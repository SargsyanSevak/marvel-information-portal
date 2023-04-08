import "./main.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ContextValue } from "../MyContext/MyContext";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
const itemsPerRow = 9;

const Main = () => {
  const [next, setNext] = useState(itemsPerRow);
  const { setActiveCharacter } = useContext(ContextValue);
  const { charactersData } = useContext(ContextValue);
  const handleFilter = (id) => {
    setActiveCharacter(
      charactersData.filter((character) => character.id === id)
    );
  };
  const handleMoreImage = () => {
    setNext(next + 3);
  };
  return (
    <div id="content">
      {charactersData.length ? (
        <>
          {charactersData.slice(0, next)?.map((card) => (
            <div className="character_card" key={card.id}>
              <img src={card.thumbnail.path + ".jpg"} alt="" />
              <Link
                to={"#"}
                className="title_bold_22 m20"
                onClick={() => {
                  handleFilter(card.id);
                }}
              >
                {card.name}
              </Link>
            </div>
          ))}
          {next < charactersData?.length && (
            <div className="load_more">
              <Button appearance={"red"} onClick={handleMoreImage}>
                LOAD MORE
              </Button>
            </div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Main;
