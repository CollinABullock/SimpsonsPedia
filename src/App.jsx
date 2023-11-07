import React from "react";
import { Routes, Route, Link, useNavigate, BrowserRouter } from "react-router-dom"; 
import AllCharacters from "./components/allCharacters";
import AllProducts from "./components/allProducts";
import AllEpisodes from "./components/allEpisodes";
import NavBar from "./components/navBar";
import SingleEpisode from "./components/singleEpisode";
import "./App.css"

function Home() {
  return (
    <div className="homeDiv">
    <h1>SimpsonsPedia</h1>
      <h4>A guide to characters, products, and episodes</h4>
      <NavBar />
      <img src="https://lumiere-a.akamaihd.net/v1/images/thesimpsons_yellowfaces_zoom_ec07dd0a.jpeg" className="homeIMG" alt="The Simpsons" />
      <p>(c) 2023, Collin A. Bullock</p>
      </div>
  )
}


export default function App() {
  return (
    <>
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/characters" element={<AllCharacters />} />
  <Route path="/products" element={<AllProducts />} />
  <Route path="/episodes" element={<AllEpisodes />} />
  <Route path="/episodes/:id" element={<SingleEpisode />} />
</Routes>
</BrowserRouter>
</>
  );
}
