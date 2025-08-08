import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


//The card that contains the play name, image and button
function GameCard({play,image,link,float}) {
    const [isClicked, setIsClicked] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 50); 
    setTimeout(() => navigate(`${link}`), 50); 
  };

  return (
    <button
      onClick= {handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className = "play-card"
      style ={{
        backgroundImage: isClicked ? `linear-gradient(rgba(0, 0, 0, 0.5)), url(${image})`: `url(${image})`,
        transform: isHovered ? "translateY(-3px)":"",
        boxShadow: isHovered ? "0 8px 16px rgba(0, 0, 0, 0.5)":"0 4px 8px rgba(0, 0, 0, 0.2)",
        filter: (float === "center") ? "none" :"grayscale(100%)",
        scale: (float === "center") ? 1 : 0.8,
        justifySelf:"center",
        gridArea: float}}>
          <div className="play-text">
        {play}
      </div>
      <div style={{height:"85%"}}></div>
  
    </button>

  );
}

//The main function of the web page
function HomePage() {
  const [cardsPos,setCardsPos] = useState(["left","center","right"])

  const rightClick = () =>{
    setCardsPos(prev => [prev[1],prev[2],prev[0]])
  }

  const leftClick = () => {
    setCardsPos(prev => [prev[2],prev[0],prev[1]])
  }
  return (
    <div className="homepage-container">
      <button onClick={leftClick} style={{gridArea:"buttonL"}} className="carousel-buttons">  
        <img src="/arrow.svg" className="backArrow" alt= "Move selection left"></img>
      </button>
      <GameCard image="othello.jpg" play="Othello" float= {cardsPos[0]} link="/othello"/>
      <GameCard image="macbeth.jpg" play="Macbeth" float= {cardsPos[1]} link="/macbeth"/>
      <GameCard image="merchant.jpg" play="The Merchant of Venice" float= {cardsPos[2]} link="/merchant-of-venice"/>
      <button onClick={rightClick}  style={{gridArea:"buttonR"}} className="carousel-buttons">
          <img src="/forwardArrow.svg" className="backArrow" alt= "Move selection left"></img>
      </button>
    </div>
  );
}
export default HomePage;