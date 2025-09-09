import { useState} from "react";
import "./QuoteCircle.css"
export default QuoteCircle

function QuoteCircle({quote, onDelete}) {

  const [isDelHovered, setIsDelHovered] = useState(false);
  return (
 <div className="quote-circle">
    <div className = "quote-circle-green-half">
    <button className="quote-circle-red-half" onClick={onDelete} onMouseEnter={() => setIsDelHovered(true)} onMouseLeave={() => setIsDelHovered(false)}>
      <img src= {isDelHovered ? "/redtrash.svg" : "/trash.svg"} className="del-button" alt="Remove Quote Button"/>
    </button>
      <p className="quote-bubble-text"style={{margin:"5px"}}>{quote.text}</p>
    </div>
  </div>
  );
}