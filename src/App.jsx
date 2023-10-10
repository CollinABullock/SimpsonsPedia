import React from "react";
import { Routes, Route, Link, useNavigate, BrowserRouter } from "react-router-dom"; 
import AllCharacters from "./components/allCharacters";
import AllProducts from "./components/allProducts";
import AllEpisodes from "./components/allEpisodes";
import NavBar from "./components/navBar";
import "./App.css"

function Home() {
  return (
    <>
    <h1>SimpsonsPedia</h1>
      <h4>A guide to characters, products, and episodes</h4>
      <NavBar />
      <img src="https://i.pinimg.com/736x/b8/da/6e/b8da6e8716ac3b784a22d34e88648340.jpg" alt="The Simpsons" />
      <p>(c) 2023, Collin A. Bullock</p>
      </>
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
</Routes>
</BrowserRouter>
</>
  );
}
