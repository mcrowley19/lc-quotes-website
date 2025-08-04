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
    style={{ 
      width: "40vh", 
      backgroundImage: isClicked ? "linear-gradient(rgba(0, 0, 0, 0.5)), url(castle.jpg)": "url(castle.jpg)",
      transform: isHovered ? "translateY(-3px)":"",
      backgroundSize: "cover",  
      backgroundPosition: "center",
      border:"none", 
      borderRadius:"30px",
      boxShadow: isHovered ? "0 8px 16px rgba(0, 0, 0, 0.5)":"0 4px 8px rgba(0, 0, 0, 0.2)",
      height:"60vh"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      <div style={{height:"85%"}}></div>
      <div style={{height:"15%", background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",borderRadius:"30px"}}>
        <h1 style={{color:"#ffffffff", fontSize:"40px",fontFamily:"MedievalSharp"}}>Macbeth</h1>
      </div>

  
    </button>
  );
}

//The main function of the web page
function HomePage() {
  return (
    <div style={{display:"flex",justifyContent:"center", paddingTop:"10vh"}}>
      <GameCard />
    </div>
  );
}
export default HomePage;