

import "./editPage.css";
import { useState,useEffect } from "react";
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
    background: isClicked ? "#1e4a89ff" : "hsl(214, 40%, 40%)",
  }}
    onClick= {handleClick}>
    <img src="/play.svg" className="play-image" alt="Navigate To Game page Button"/>
  </button>)
}



function AddButton({quoteList, setQuoteList}) {
  const [isClicked, setClick] = useState(false);
  const [maxLen, setMaxLen] = useState(window.innerWidth <= 768 ? 50 : 75);

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
    const selectedText = window.getSelection().toString().trim();
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


function Textdiv({play}) {
  return (
    <div className="play-text-card">
        {play}

    </div>
  );
}

//Component for the card used to scroll to different scenes
function Scrolldiv({isClicked, setClick, scenes}) {

  const handleClick = () => {
    setClick(!isClicked);
  };
  return (
    <div className={`scroll-card ${isClicked ? "expanded" : "collapsed"}`}>
      <button className="scroll-collapse" onClick= { handleClick}>    
        <img src="\menu.svg" className="collapse-image" alt="Collapse Navbar Button"></img>
      </button>

        {/*The content of the navbar only loads when isClicked is true*/}
        {isClicked && scenes}

  </div>
  );
}

//Component for the circle containing the quote that is added when the button is clicked
//The quote argument is equal to the most recent quote when the function is called
//The onDelete argument is a function that removes the quote from the list when the delete button is clicked
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

//Component for the right most card that contains all added quotes alongside the play and edit buttons
function Quotesdiv({quoteList, setQuoteList}) {
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
          <AddButton setQuoteList={setQuoteList} quoteList={quoteList}/>
          <PlayButton quoteList={quoteList}/>
        </div>
    </div>
  );
}




//The main function of the page
function EditPage({ play, scenes,title,url}) {

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Play',
    "name": title,
    "author": { "@type": "Person", "name": "William Shakespeare" },
    "url": url,
    "description": `A page where users can select quotes to learn from ${play}`,

  };

  const [quoteList, setQuoteList] = useState(JSON.parse(localStorage.getItem("quoteList" || "[]")))

  useEffect(() => {
    localStorage.setItem('quoteList', JSON.stringify(quoteList));
  },[quoteList]) 
    const [isClicked, setClick] = useState(false);
  return (
    <div className="editpage-div" >
      <title>{title}</title>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),}}/>

        <div style={{height:"10vh"}}></div>
            <Scrolldiv isClicked={isClicked} setClick={setClick} scenes={scenes}/>
            <Textdiv isNavbarWide={isClicked} play={play}/>
            <Quotesdiv quoteList={quoteList} setQuoteList={setQuoteList} />
    </div>
  );
}

export default EditPage;
