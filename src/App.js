import "./App.css";
import Layout from "./components/Layout/Layout";
import axios from "axios";
import md5 from "md5";
import { useContext, useEffect } from "react";
import { ContextValue } from "./components/MyContext/MyContext";
const publickKey = "fd23e9b271d490c17e4bd633e0aa47b8";
const privateKey = "fb2bde45e4c46b792424109aa880f70018068661";
const time = Number(new Date());
const hash = md5(time + privateKey + publickKey);

function App() {
  const { setCharactersData } = useContext(ContextValue);
  const { setComicsData } = useContext(ContextValue);

  async function fetchCharacters() {
    let response = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publickKey}&hash=${hash}`
    );
    let data = await response.data;
    setCharactersData(data.data.results);
  }
  async function fetchComics() {
    let response = await axios.get(
      `http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publickKey}&hash=${hash}`
    );
    let data = await response.data;
    setComicsData(data.data.results);
  }
  useEffect(() => {
    fetchCharacters();
    fetchComics();
  }, []);
 
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
