import { useNavigate } from "react-router-dom";

export default function NavBar() {
  
  // gotta store useNavigate in the navigate function so I can use said function to navigate to desired routes
  const navigate = useNavigate();
  
  // gotta have a function to navigate into the characters route
  const handleHome = () => {
    navigate("/")
  };
  
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
      
      <div className="navBar">
      <button className="navButton" onClick={handleHome}>Home</button>
        <button className="navButton" onClick={handleCharacters}>Characters</button>
        <button className="navButton" onClick={handleProducts}>Products</button>
        <button className="navButton" onClick={handleEpisodes}>Episodes</button>
      </div>
    </>
  );
}