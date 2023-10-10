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
      <img src="https://decider.com/wp-content/uploads/2016/06/homer.jpg?quality=80&strip=all&w=646&h=431&crop=1" alt="The Simpsons" />
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
