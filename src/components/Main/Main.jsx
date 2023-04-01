import "./main.css";
import { charactersData } from "../../assets/data/charactersData";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MyButton from "../MyButton/MyButton";
import { ContextValue } from "../MyContext/MyContext";
const Main = () => {
  const { setActiveCharacter } = useContext(ContextValue);
  const handleFilter = (id) => {
    setActiveCharacter(
      charactersData.filter((character) => character.id === id)
    );
  };
  return (
    <div id="content">
      {charactersData.map((card) => (
        <div className="character_card" key={card.id}
        >
          <img src={card.imgurl} alt="" />
          <Link
            to={"#"}
            className="heading-white m20"
            onClick={() => {
              handleFilter(card.id);
            }}
          >
            {card.title}
          </Link>
        </div>
      ))}
      <div className="load_more">
        <MyButton title="LOAD MORE" color="white" bg="#9F0013" />
      </div>
    </div>
  );
};

export default Main;
