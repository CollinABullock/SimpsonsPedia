import { useState, useEffect } from "react";

export default function AllCharacters() {
  // using usestate so that I can change the variable of characters with info from the api.  And since it will be an array, I'm putting the brackets in the params spot in the parenthes after useState
  const [characters, setCharacters] = useState([]);
  // another variable to store the an error, which can change based on what the error is exactly.  I'm setting the usestate to null so there's nothing in there to start.
  const [error, setError] = useState(null);
  // since I'm gonna put a search function in there, I'm gonna use usestate so the exact searchparams can be changed immediately to reflect what people are typing in the search bar.
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    fetch('https://api.sampleapis.com/simpsons/characters')
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }, []);

  const displayedCharacters = searchParams ? characters.filter((character) => character.name.toLowerCase().includes(searchParams)) : characters;

  console.log(displayedCharacters);
  console.log(characters);

  return (
    <>
    <h1>Characters featured on The Simpsons</h1>
    <div>
      <label>
        Search{" "}
        <input type="text"
        placeholder="search for Characters"
        onChange={(e) => setSearchParams (e.target.value.toLowerCase())}
        />
      </label>
    </div>

    {displayedCharacters.map((character) => {
      return (
        <>
        <div className="cell">
        <h2>{character.normalized_name}</h2>
        <p>{character.gender}</p>
        </div>
        </>
      )
    })}
    </>
  )
}