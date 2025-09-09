import "./PlayButton.css"
import { useNavigate } from "react-router-dom";
import { useState} from "react";

export default PlayButton
function PlayButton({quoteList}) {
  const [isClicked, setClick] = useState(false);
  const navigate = useNavigate();
  //This ensures that the user can only navigate to the play page if they have added 2 quotes
  const handleClick = () => {
    setClick(true);
    setTimeout(() => setClick(false), 300); 
    if (quoteList.length > 1) {
    navigate("/play"); }
    else{
      alert("Add at least two quotes to play.");
    }
  };

  return(
  <button className="play-button"
  style={{ 
    background: isClicked ? "#1e4a89ff" : "hsl(214, 40%, 40%)",
  }}
    onClick= {handleClick}>
    <img src="/play.svg" className="play-image" alt="Navigate To Game page Button"/>
  </button>)
}