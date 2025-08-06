import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


//The card that contains the play name, image and button
function GameCard() {
    const [isClicked, setIsClicked] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 50); 
    setTimeout(() => navigate("/edit"), 50); 
  };

  return (
    <button
      onClick= {handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      
      className = "play-card"
      style ={{
        backgroundImage: isClicked ? "linear-gradient(rgba(0, 0, 0, 0.5)), url(castle.jpg)": "url(castle.jpg)",
        transform: isHovered ? "translateY(-3px)":"",
        boxShadow: isHovered ? "0 8px 16px rgba(0, 0, 0, 0.5)":"0 4px 8px rgba(0, 0, 0, 0.2)"}}
    >
      <div style={{height:"85%"}}></div>
      <div className="play-text">
        <h1 >Macbeth</h1>
      </div>
    </button>
  );
}

//The main function of the web page
function HomePage() {
  return (
    <div className="homepage-container">
      <GameCard />
    </div>
  );
}
export default HomePage;