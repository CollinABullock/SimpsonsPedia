import { useState, useEffect } from "react";
import NavBar from "./navBar";

export default function AllProducts() {
  // using usestate so that I can change the variable of characters with info from the api.  And since it will be an array, I'm putting the brackets in the params spot in the parenthes after useState
  const [products, setProducts] = useState([]);
  // another variable to store the an error, which can change based on what the error is exactly.  I'm setting the usestate to null so there's nothing in there to start.
  const [error, setError] = useState(null);
  // since I'm gonna put a search function in there, I'm gonna use usestate so the exact searchparams can be changed immediately to reflect what people are typing in the search bar.
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    fetch('https://api.sampleapis.com/simpsons/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const displayedProducts = searchParams ? products.filter((product) => product.name.toLowerCase().includes(searchParams)) : products;

  console.log(displayedProducts);
  console.log(products);

  return (
    <>
    <h1>Products</h1>
    <NavBar />
    <div>
      <label>
        Search{" "}<br />
        <input type="text"
        placeholder="search for Products"
        onChange={(e) => setSearchParams (e.target.value.toLowerCase())}
        />
      </label>
    </div>
    
    <div className="cell-container">
    {displayedProducts.map((product) => {
      return (
       
        <div className="cell">
        <h3>{product.name}</h3>
        <h4>{product.description}</h4>
        </div>
      )
    })}</div>
    </>
  )
}