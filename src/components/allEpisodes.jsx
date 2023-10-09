import { useState, useEffect } from "react";

export default function AllEpisodes() {
  // using usestate so that I can change the variable of characters with info from the api.  And since it will be an array, I'm putting the brackets in the params spot in the parenthes after useState
  const [episodes, setEpisodes] = useState([]);
  // another variable to store the an error, which can change based on what the error is exactly.  I'm setting the usestate to null so there's nothing in there to start.
  const [error, setError] = useState(null);
  // since I'm gonna put a search function in there, I'm gonna use usestate so the exact searchparams can be changed immediately to reflect what people are typing in the search bar.
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    fetch('https://api.sampleapis.com/simpsons/episodes')
      .then((response) => response.json())
      .then((data) => setEpisodes(data));
  }, []);

  const displayedEpisodes = searchParams ? episodes.filter((episode) => episode.name.toLowerCase().includes(searchParams)) : episodes;

  console.log(displayedEpisodes);
  console.log(episodes);

  return (
    <>
    <h1>Episodes</h1>
    <div>
      <label>
        Search{" "}<br />
        <input type="text"
        placeholder="search for Episodes"
        onChange={(e) => setSearchParams (e.target.value.toLowerCase())}
        />
      </label>
    </div>

    <div className="cell-container">
    {displayedEpisodes.map((episode) => {
      return (
        <>
        <div className="cell">
        <h2>{episode.name}</h2>
        <p>{episode.description}</p>
        </div>
        </>
      )
    })}</div>
    </>
  )
}