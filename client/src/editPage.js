import Macbeth from "./Macbeth"; 
import "./App.css";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

//Component for the button that navigates to the play page. It ensures there is at least two quotes in the selection
function PlayButton({quoteList}) {
  const [isClicked, SetClick] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    SetClick(true);
    setTimeout(() => SetClick(false), 100); 
    if (quoteList.length > 1) {
    navigate("/play"); }
    else{
      alert("Add at least two quotes to play.");
    }
  };
  return(
  <button 
  style={{ 
    width: "80px", 
    height: "80px",
    background: isClicked ? "#2a682cff" : "#42a845",
    marginLeft:"20%",
    borderRadius:"100%",
    border:"solid",
    borderColor:"white",
    borderWidth:"1px"}}
    onClick= {handleClick}>
    <img src="/play-button-arrowhead-svgrepo-com.svg" style={{ width: "30px", height: "30px" }} alt="Navigate To Game page Button"/>
  </button>)
}


//Component for the button that adds a quote to the list
function AddButton({quoteList, setQuoteList}) {
  //When the button is clicked it changes the button color and adds the highlighted text to the list
  const handleClick = () => {
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
  <button  
  style={{ 
    width: "80px", 
    height: "80px",
    background: "#225598ff",
    marginLeft:"20%",
    borderRadius:"100%",
    border:"solid",
    borderColor:"white",
    borderWidth:"1px"
  }}
  onClick= {handleClick}
  >
    <img src="/plus.svg" style={{ width: "65px", height: "65px"}} alt="Add quote to list"/>
  </button>)

}

//Component for the card that displays the play
function Textdiv() {
  return (
    <div
    style={{ 
      width: "100%", 
      background:"#ffffffff",
      height: "92vh",
      overflowY: "auto",
      border: "none",
      borderRadius:"0px"
    }}
    >
      <div style={{paddingTop:"30px"}}>
        <Macbeth />
      </div>
    </div>
  );
}

//Component for the card used to scroll to different scenes
function Scrolldiv() {
  const [isClicked, SetClick] = useState(false);
  const handleClick = () => {
    SetClick(!isClicked);
  };
  return (
    <div
    style={{ 
      //Causes the card to collapse and expand when clicked
        width: isClicked ? "20%":"65px",
        background:"#ffffffff",
        height: "92vh",
        overflowY: "auto",
        borderRadius: "0px",
        //Creates a border when the card is expanded
        borderRight:"none"}}>
      <div className="align-items-left" style={{padding: "0px",margin: "0px", width: "100%"}}>  
        <button
          style={{ 
            width: "25px", 
            height: "25px",
            border: "none",
            background: "transparent",
            padding: "5px",
          }}         
          onClick= { handleClick}>    
            <img src="\menu.svg" style={{height:"25px",width:"25px"}} alt="Collapse Navbar Button"></img>
        </button>

        {/*The content of the navbar only loads when isClicked is true*/}
        {isClicked && (
          <div style={{paddingLeft: "25px",marginLeft: "0px"}}>
            <br style={{height:"50%"}}/>
              <h3 className="fw-bold">Act 1</h3>
                <ul>
                    <li><HashLink className="link" smooth to="/edit/#1_1">Scene 1</HashLink></li>
                    <li><HashLink  className="link" smooth to="/edit/#1_2"> Scene 2</HashLink></li>
                    <li><HashLink  className="link" smooth to="/edit/#1_3">Scene 3</HashLink></li>
                    <li><HashLink className="link" smooth to="/edit/#1_4">Scene 4</HashLink></li>
                    <li><HashLink className="link" smooth to="/edit/#1_5">Scene 5</HashLink></li>
                    <li><HashLink className="link" smooth to="/edit/#1_6">Scene 6</HashLink></li>
                    <li><HashLink className="link" smooth to="/edit/#1_7">Scene 7</HashLink></li>
                </ul>
                <h3  className="fw-bold">Act 2</h3>
                <ul>
                    <li><HashLink className="link" smooth to="/edit/#2_1">Scene 1</HashLink></li>
                    <li><HashLink className="link"smooth to="/edit/#2_2">Scene 2</HashLink></li>
                    <li><HashLink className="link"smooth to="/edit/#2_3">Scene 3</HashLink></li>
                    <li><HashLink className="link"smooth to="/edit/#2_4">Scene 4</HashLink></li>
                </ul>
                <h3  className="fw-bold">Act 3</h3>
                    <ul>
                        <li><HashLink className="link"smooth to="/edit/#3_1">Scene 1</HashLink></li>
                        <li><HashLink className="link"smooth to="/edit/#3_2">Scene 2</HashLink></li>
                        <li><HashLink className="link"smooth to="/edit/#3_3">Scene 3</HashLink></li>
                        <li><HashLink className="link"smooth to="/edit/#3_4">Scene 4</HashLink></li>
                        <li><HashLink className="link"smooth to="/edit/#3_5">Scene 5</HashLink></li>
                        <li><HashLink className="link"smooth to="/edit/#3_6">Scene 6</HashLink></li>
                    </ul>
                <h3  className="fw-bold">Act 4</h3>
                    <ul>
                        <li><HashLink className="link"smooth to="/edit/#4_1">Scene 1</HashLink></li>
                        <li><HashLink className="link"smooth to="/edit/#4_2">Scene 2</HashLink></li>
                        <li><HashLink className="link"smooth to="/edit/#4_3">Scene 3</HashLink></li>
                    </ul>
                    <h3  className="fw-bold">Act 5</h3>
                    <ul>
                        <li><HashLink className="link" smooth to="/edit/#5_1">Scene 1</HashLink></li>
                        <li><HashLink className="link" smooth to="/edit/#5_2">Scene 2</HashLink></li>
                        <li><HashLink className="link" smooth to="/edit/#5_3">Scene 3</HashLink></li>
                        <li><HashLink className="link" smooth to="/edit/#5_4">Scene 4</HashLink></li>
                        <li><HashLink className="link" smooth to="/edit/#5_5">Scene 5</HashLink></li>
                    </ul>
            </div>)}

  </div>
</div>
  );
}

//Component for the circle containing the quote that is added when the button is clicked
//The quote argument is equal to the most recent quote when the function is called
//The onDelete argument is a function that removes the quote from the list when the delete button is clicked
function QuoteCircle({quote, onDelete}) {
  return (
  <div className="d-flex" style={{paddingLeft:"10px",margin: "10px"}}>
    <div
    style={{
      width: "80%", 
      height: "fit-content", 
      borderBottomLeftRadius: "5px" ,
      borderTopLeftRadius: "5px",
      backgroundColor: "#41a845", 
      color:"white",
      padding: "5px",}}>
      <p style={{margin:"5px"}}>{quote.text}</p>
    </div>
    <button
    style={{width:"15%",
      padding:"0px",
      borderBottomRightRadius:"5px",
      borderTopRightRadius:"5px",
      border:"none",
      backgroundColor:"#cc1414ff",
      alignContent:"center"}}
      onClick={onDelete}>

      <img src="/minus.svg" style={{ width: "95px", height: "30px",paddingRight:"60%"}} alt="Remove Quote Button"/>
    </button>
  </div>
  );
}

//Component for the right most card that contains all added quotes alongside the play and edit buttons
function Quotesdiv({quoteList, setQuoteList}) {
  //The list containing all the quotes added by the user and a way to edit it
  return (
    //The main card
    <div
    style={{ 
        display:"inline-block",
        width: "45%", 
        background:"#162132",
        height: "100%",
        paddingLeft: "0px",
        borderRadius: "0px",
        }}>
      {/* The card containing the explanation at the top of the page */}
      <div className="fw-bold"
        style={{
          borderBottom:"solid",
          borderColor:"white",
          width: "100%", 
          height: "fit-content", 
          padding: "10px", 
          margin: "0px",
          color: "white", 
          fontSize: "25px",
          display:"inline-block"}}>
         Highlight a quote and click + to add it to the list.
      </div>
        <br />
        {/*The card that contains the quotes*/}
      <div style={{padding: "0px",margin: "0px", overflowX: "hidden",height:"60%"}}>
         {/* This renders a new quote circle for each item in quoteList.*/}
        {/* It gives each quote circle a key corresponding to what index in the list the quote it contains is*/}
          {/*It creates an onDelete function that deletes the bubble"s quote from the list. This is called in the QuoteCircle function when a button is pressed*/}
        {quoteList.map((quote, index) => (
          <QuoteCircle key={quote.id} quote={quote} onDelete={() => setQuoteList(prev => prev.filter((_, i) => i !== index))}/>
        ))}
        </div>
        {/*The card that contains the play and edit buttons*/}
        <div style={{width:"100%",height:"10%",padding: "0px",margin: "0px"}}>
          <AddButton setQuoteList={setQuoteList} quoteList={quoteList}/>
          <PlayButton quoteList={quoteList}/>
        </div>
    </div>
  );
}

//The main function of the page
function EditPage({quoteList, setQuoteList}) {
  return (
    <div className="d-flex container-fluid"  style={{height: "92vh",minWidth:"100vh",padding: "0px",margin: "0px", overflowY: "hidden"}}>
        <div style={{height:"10vh"}}></div>
            <Scrolldiv />
            <Textdiv />
            <Quotesdiv quoteList={quoteList} setQuoteList={setQuoteList} />
    </div>
  );
}

export default EditPage;
