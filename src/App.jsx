import React from "react";
import { Routes, Route, Link, useNavigate, BrowserRouter } from "react-router-dom"; 
import AllCharacters from "./components/allCharacters";
import AllProducts from "./components/allProducts";
import AllEpisodes from "./components/allEpisodes";
import "./App.css"

function NavBar() {
  
  // gotta store useNavigate in the navigate function so I can use said function to navigate to desired routes
  const navigate = useNavigate();
  
  // gotta have a function to navigate into the characters route
  const handleCharacters = () => {
    navigate("/characters")
  };

  const handleProducts = () => {
    navigate("/products")
  };

  const handleEpisodes = () => {
    navigate("/episodes")
  };


  return (
    <>
      <h1>SimpsonsPedia</h1>
      <h4>A guide to characters, products, and episodes</h4>
      <div className="navbar">
        <button className="navButton" onClick={handleCharacters}>Characters</button>
        <button className="navButton" onClick={handleProducts}>Products</button>
        <button className="navButton" onClick={handleEpisodes}>Episodes</button>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<NavBar />} />
  <Route path="/characters" element={<AllCharacters />} />
  <Route path="/products" element={<AllProducts />} />
  <Route path="/episodes" element={<AllEpisodes />} />
</Routes>
</BrowserRouter>
  );
}
