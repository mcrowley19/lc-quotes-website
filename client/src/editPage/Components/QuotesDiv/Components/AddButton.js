import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from "react";
import "./AddButton.css"
export default AddButton

function AddButton({quoteList, setQuoteList,selectedText}) {
  const [isClicked, setClick] = useState(false);
  const [maxLen, setMaxLen] = useState(window.innerWidth <= 768 ? 40 : 75);

  useEffect(() => {
    const handleResize = () => {
      setMaxLen(window.innerWidth <= 768 ? 40 : 75);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //When the button is clicked it changes the button color and adds the highlighted text to the list
  const handleClick = () => {
    setClick(true);
    setTimeout(() => setClick(false), 300); 
    selectedText = selectedText.trim();
    const spacelessText = selectedText.replace(/\s/g, '');
    //Sets the quote list to the current quote list with the new quote added
    if (spacelessText.length <5 || spacelessText.length >maxLen){
      alert(`Please highlight a quote that is between 5 and ${maxLen} characters long.`);
      }
    else {
        setQuoteList([...quoteList, {id: uuidv4(),"text": selectedText}]);
      }
  };
  return(
  <button className="add-button" onClick= {handleClick}   style={{ background: isClicked ? "#1e4a89ff" : "hsl(214, 40%, 40%)"}}>
    <img src="/plus.svg" alt="Add quote to list" className="add-image"/>
  </button>)

}
