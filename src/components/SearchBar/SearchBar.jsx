import React, { useState } from "react";
import { useContext } from "react";
import Button from "../Button/Button";
import { ContextValue } from "../MyContext/MyContext";

import "./search-bar.css";
const SearchBar = () => {
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState("");
  const [findedResult, setFindedResult] = useState([]);
  const [error, setError] = useState(false);
  const [toPage, setToPage] = useState(false);
  const { charactersData } = useContext(ContextValue);
  const handleSearch = () => {
    if (value === "") {
      setError(true);
      setAlert("This field is required");
    } else {
      let getCharacter = charactersData.find((character) =>
        character.name.toLowerCase().includes(value.toLowerCase())
      );
      if (getCharacter) {
        setError(false);
        setToPage(true);
        setAlert(`There is! Visit ${getCharacter.name} page?`);
        setFindedResult(getCharacter);
      } else {
        setError(true);
        setToPage(false);
        setAlert("The character was not found. Check the name and try again");
      }
    }
  };
  return (
    <div className="search_bar">
      <div className="search_title">Or find a character by name:</div>
      <div className="search">
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button appearance={"red"} onClick={() => handleSearch()}>
          FIND
        </Button>
      </div>
      <div className="search_result">
        <span style={{ color: error ? "red" : "green" }}>{alert}</span>
        {toPage ? (
          <Button href={`/search/${findedResult.id}`}>TOPAGE</Button>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
