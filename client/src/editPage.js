import Macbeth from "./Macbeth"; 
import "./App.css";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


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
    background: isClicked ? "#2a682cff" : "#42a845",
  }}
    onClick= {handleClick}>
    <img src="/play.svg" className="play-image" alt="Navigate To Game page Button"/>
  </button>)
}



function AddButton({quoteList, setQuoteList}) {
  const [isClicked, setClick] = useState(false);
  //When the button is clicked it changes the button color and adds the highlighted text to the list
  const handleClick = () => {
    setClick(true);
    setTimeout(() => setClick(false), 300); 
    const selectedText = window.getSelection().toString();
    //Sets the quote list to the current quote list with the new quote added
    if (selectedText.length <5){
      alert("Please highlight a quote that is at least 5 characters long.");
      }
    else {
        setQuoteList([...quoteList, {id: uuidv4(),"text": selectedText}]);
      }
  };
  return(
  <button className="add-button" onClick= {handleClick}   style={{ background: isClicked ? "#1a3e6eff" : "#225598ff"}}>
    <img src="/plus.svg" alt="Add quote to list" className="add-image"/>
  </button>)

}

//Component for the card that displays the play
function Textdiv({isNavbarWide}) {
  return (
    <div className="play-text-card">
      <div style={{marginLeft: isNavbarWide ? "30px":"0px",}}>
        <Macbeth />
      </div>
    </div>
  );
}

//Component for the card used to scroll to different scenes
function Scrolldiv({isClicked, setClick}) {

  const handleClick = () => {
    setClick(!isClicked);
  };
  return (
    <div className={`scroll-card ${isClicked ? "expanded" : "collapsed"}`}>
      <button className="scroll-collapse" onClick= { handleClick}>    
        <img src="\menu.svg" className="collapse-image" alt="Collapse Navbar Button"></img>
      </button>

        {/*The content of the navbar only loads when isClicked is true*/}
        {isClicked && (
          <div className="list-container">
            <div style={{height:"100%"}}></div>
              <h3 className="list-heading">Act 1</h3>
                <ul>
                    <li><HashLink className="link" smooth to="/edit/#1_1">Scene 1</HashLink></li>
                    <li><HashLink  className="link" smooth to="/edit/#1_2"> Scene 2</HashLink></li>
                    <li><HashLink  className="link" smooth to="/edit/#1_3">Scene 3</HashLink></li>
                    <li><HashLink className="link" smooth to="/edit/#1_4">Scene 4</HashLink></li>
                    <li><HashLink className="link" smooth to="/edit/#1_5">Scene 5</HashLink></li>
                    <li><HashLink className="link" smooth to="/edit/#1_6">Scene 6</HashLink></li>
                    <li><HashLink className="link" smooth to="/edit/#1_7">Scene 7</HashLink></li>
                </ul>
                <h3  className="list-heading">Act 2</h3>
                <ul>
                    <li><HashLink className="link" smooth to="/edit/#2_1">Scene 1</HashLink></li>
                    <li><HashLink className="link"smooth to="/edit/#2_2">Scene 2</HashLink></li>
                    <li><HashLink className="link"smooth to="/edit/#2_3">Scene 3</HashLink></li>
                    <li><HashLink className="link"smooth to="/edit/#2_4">Scene 4</HashLink></li>
                </ul>
                <h3  className="list-heading">Act 3</h3>
                    <ul>
                        <li><HashLink className="link"smooth to="/edit/#3_1">Scene 1</HashLink></li>
                        <li><HashLink className="link"smooth to="/edit/#3_2">Scene 2</HashLink></li>
                        <li><HashLink className="link"smooth to="/edit/#3_3">Scene 3</HashLink></li>
                        <li><HashLink className="link"smooth to="/edit/#3_4">Scene 4</HashLink></li>
                        <li><HashLink className="link"smooth to="/edit/#3_5">Scene 5</HashLink></li>
                        <li><HashLink className="link"smooth to="/edit/#3_6">Scene 6</HashLink></li>
                    </ul>
                <h3  className="list-heading">Act 4</h3>
                    <ul>
                        <li><HashLink className="link"smooth to="/edit/#4_1">Scene 1</HashLink></li>
                        <li><HashLink className="link"smooth to="/edit/#4_2">Scene 2</HashLink></li>
                        <li><HashLink className="link"smooth to="/edit/#4_3">Scene 3</HashLink></li>
                    </ul>
                    <h3  className="list-heading">Act 5</h3>
                    <ul>
                        <li><HashLink className="link" smooth to="/edit/#5_1">Scene 1</HashLink></li>
                        <li><HashLink className="link" smooth to="/edit/#5_2">Scene 2</HashLink></li>
                        <li><HashLink className="link" smooth to="/edit/#5_3">Scene 3</HashLink></li>
                        <li><HashLink className="link" smooth to="/edit/#5_4">Scene 4</HashLink></li>
                        <li><HashLink className="link" smooth to="/edit/#5_5">Scene 5</HashLink></li>
                    </ul>
            </div>)}

  </div>
  );
}

//Component for the circle containing the quote that is added when the button is clicked
//The quote argument is equal to the most recent quote when the function is called
//The onDelete argument is a function that removes the quote from the list when the delete button is clicked
function QuoteCircle({quote, onDelete}) {
  return (
 <div className="quote-circle">
    <div className = "quote-circle-green-half">
      <p className="quote-bubble-text"style={{margin:"5px"}}>{quote.text}</p>
    </div>

    <button className="quote-circle-red-half" onClick={onDelete}>
      <img src="/trash.svg" className="minus-image" alt="Remove Quote Button"/>
    </button>
  </div>
  );
}

//Component for the right most card that contains all added quotes alongside the play and edit buttons
function Quotesdiv({quoteList, setQuoteList}) {
  //The list containing all the quotes added by the user and a way to edit it
  return (
    //The main card
    <div className="quotes-container">
      {/* The card containing the explanation at the top of the page */}
      <div className="hint-text">
         Highlight a quote and click + to add it to the list.
      </div>
        <br />
        {/*The card that contains the quotes*/}
      <div className="quote-bubbles-card">
         {/* This renders a new quote circle for each item in quoteList.*/}
        {/* It gives each quote circle a key corresponding to what index in the list the quote it contains is*/}
          {/*It creates an onDelete function that deletes the bubble"s quote from the list. This is called in the QuoteCircle function when a button is pressed*/}
        {quoteList.map((quote, index) => (
          <QuoteCircle key={quote.id} quote={quote} onDelete={() => setQuoteList(prev => prev.filter((_, i) => i !== index))}/>
        ))}

        </div>
        {/*The card that contains the play and edit buttons*/}
        <div className = 'quote-buttons'>
          <AddButton setQuoteList={setQuoteList} quoteList={quoteList}/>
          <PlayButton quoteList={quoteList}/>
        </div>
    </div>
  );
}

//The main function of the page
function EditPage({quoteList, setQuoteList}) {
    const [isClicked, setClick] = useState(false);
  return (
    <div className="editpage-div" >
        <div style={{height:"10vh"}}></div>
            <Scrolldiv isClicked={isClicked} setClick={setClick}/>
            <Textdiv isNavbarWide={isClicked}/>
            <Quotesdiv quoteList={quoteList} setQuoteList={setQuoteList} />
    </div>
  );
}

export default EditPage;
