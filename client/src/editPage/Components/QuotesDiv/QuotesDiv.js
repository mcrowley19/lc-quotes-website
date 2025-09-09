
import QuoteCircle from "./Components/QuoteCircle.js"
import AddButton from "./Components/AddButton.js"
import PlayButton from "./Components/PlayButton.js"
import "./QuotesDiv.css"
import { useState} from "react";

export default QuotesDiv

function QuotesDiv({quoteList, setQuoteList,selectedText}) {
  //The list containing all the quotes added by the user and a way to edit it

  const [isClicked,setClicked] = useState(false)
  const handleClick = () => {
    if (isClicked === false){
      setClicked(true)}
    else{
      setClicked(false)
    }
  }
  return (
    //The main card
    <div className="quotes-container">
        {/*The card that contains the quotes*/}
      <div className="quote-bubbles-card">
         {/* This renders a new quote circle for each item in quoteList.*/}
        {/* It gives each quote circle a key corresponding to what index in the list the quote it contains is*/}
          {/*It creates an onDelete function that deletes the bubble"s quote from the list. This is called in the QuoteCircle function when a button is pressed*/}
    { quoteList.length <1 && 
      <div style={{height:"fit-content",width:"100%",justifyContent:"center",display:"flex",padding:"20px"}}>

        <button  onClick= {handleClick} className={`hint-button ${isClicked ? "clickedTooltip": ""}`} data-tooltip="Highlight a quote and click + to add it to the list">
          <h5 className="question-mark"style={{fontSize:"50px",fontWeight:"bold",color:"white"}}>?</h5> 
        </button>
  
      </div>
    }
        
        
        {quoteList.map((quote, index) => (
          <QuoteCircle key={quote.id} quote={quote} onDelete={() => setQuoteList(prev => prev.filter((_, i) => i !== index))}/>
        ))}

        </div>
        {/*The card that contains the play and edit buttons*/}
        <div className = 'quote-buttons'>
          <AddButton setQuoteList={setQuoteList} quoteList={quoteList} selectedText = {selectedText}/>
          <PlayButton quoteList={quoteList}/>
        </div>
    </div>
  );
}