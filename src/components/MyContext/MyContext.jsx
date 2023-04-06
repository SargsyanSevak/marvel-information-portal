import React, { useState } from "react";
export const ContextValue = React.createContext();

const MyContext = (props) => {
  const [charactersData,setCharactersData]= useState([])
  const [comicsData,setComicsData]= useState([])
  const [activeCharacter, setActiveCharacter] = useState([]);
  const [activeComics, setActiveComics] = useState([]);
  return (
    <ContextValue.Provider
      value={{
        charactersData,
        setCharactersData,
        comicsData,
        setComicsData,
        activeCharacter,
        setActiveCharacter,
        activeComics,
        setActiveComics,
      }}
    >
      {props.children}
    </ContextValue.Provider>
  );
};

export default MyContext;
