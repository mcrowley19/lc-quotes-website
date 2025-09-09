import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./GameCard.css";

export default GameCard

function GameCard({play,image,link,posClass}) {
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
        className={`play-card ${posClass}`}
        style ={{
          position:"relative",
          transform: isHovered ? "translateY(-3px)":"",
          boxShadow: isHovered ? "0 8px 16px rgba(0, 0, 0, 0.5)":"0 4px 8px rgba(0, 0, 0, 0.2)",
          justifySelf:"center",}}>
          <div className="card-bg"
            style={{
            backgroundImage: isClicked ? `linear-gradient(rgba(0, 0, 0, 0.5)), url(${image})` : `url(${image})`,
            filter: (posClass === "center") ? "" : "grayscale(100%)",
            }}/>
            <div className="play-text" style={{ position: "relative", zIndex: 2 }}>
          {play}
        </div>
        <div style={{height:"85%",position: "relative", zIndex: 2 }}></div>

    </button>
  );
}