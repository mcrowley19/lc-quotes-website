import "./App.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function GamePage({quoteList}) {
    //quote contains a random quote that has been selected from the list.  
    // shortQuote is quote with a certain amount of characters replaced with dashes

    const [quote, setQuote] = useState("");
    const [shortQuote, setShortQuote] = useState("");
    const [userInput, setUserInput] = useState("")

    //colorIndex is used to specify what color in quoteColors the quote that is displayed should change to.
    const quoteColors = ["white","#42a845","#a84242ff"]
    const [colorIndex,setColorIndex] = useState(0) 
    const [correctQuotes,setCorrectQuotes] = useState([])
    const [streak,setStreak] = useState(0)

    //This function assigns the values to quote and shortQuote
    const createQuote = function(){
        if (quoteList.length > 0){
            //This code creates tempQuote as a random quote in the list. 
            // If it is in the list the user has already answered it correctly. It picks a new one unless the correct list is equal to the quoteList
            let tempQuote = quoteList[Math.floor(Math.random() * (quoteList.length))].text
            while (correctQuotes.includes(tempQuote) && correctQuotes.length !== quoteList.length){
                tempQuote = quoteList[Math.floor(Math.random() * (quoteList.length))].text
            }

            //Tabs and spaces are removed from the tempQuote
            tempQuote = tempQuote.replace(/\s+/g, " ").trim()
            if (correctQuotes.length === quoteList.length){
                setCorrectQuotes([])
            }
            //This chooses the number of characters to be removed
            const removedChars = Math.floor(Math.random() * (tempQuote.length-(tempQuote.length*0.3))+2);
            //This randomly decides if the characters will be removed from the front or the back of the string
            const backOrForward = Math.floor(Math.random() * (2));
            let underscores = ""

            if (backOrForward === 0){
                for (let i = 0; i < removedChars; i++){
                    if (tempQuote[i] === " "){
                        underscores += "   ";
                    }
                    else{
                        underscores +="_ ";
                    }
                }
                setShortQuote(underscores + tempQuote.slice(removedChars))
            }
            else{
                for (let i = (tempQuote.length - removedChars); i < tempQuote.length; i++){
                    if (tempQuote[i] === " "){
                        underscores += "   " ;
                    }
                    else{
                        underscores +="_ " ;
                    }
                }
                     setShortQuote(tempQuote.slice(0,(tempQuote.length - removedChars)) + underscores)
                
            }
            setQuote(tempQuote)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const userAnswer = userInput.replace(/\s+/g, " ").trim().toLowerCase()
        if ( userAnswer === String(quote).toLowerCase()){
            setCorrectQuotes(prev => [...prev,quote])
            setColorIndex(1)
            setUserInput("")
            setTimeout(() => setColorIndex(0), 300); 
            setTimeout(() => createQuote(), 300); 
            setStreak(prev => prev +1)
        }
        else{
            setColorIndex(2)
            setShortQuote(quote)
            setTimeout(() => setColorIndex(0), 2000); 
            setTimeout(() => createQuote(), 2000); 
            setTimeout(() => setUserInput(""), 2000); 
            setStreak(0)
        }
    }
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/edit")
  };

    useEffect(() => {
        let ignore = false;
        if (!ignore)  createQuote()
            return () => { ignore = true; }
        },[]);
    
    if (quoteList.length < 1) {
        return <Navigate to="/edit" replace />;}


  return (
    
    <div align="center">
        <button style={{
            backgroundColor:"transparent", 
            border:"none",
            display:"inline", 
            float:"left",
            height:"10vh",
            width:"10vh",
            marginLeft:"5vh",
            marginTop:"2vh"
            }}
            onClick = {handleClick}> 
            <img src="/arrow.svg" 
            style={{
                height:"100%",
                width:"100%"
            }}></img></button>

        {streak > 0 && <div style ={{
            display: "inline-block",
            height:"20vh",
            width:"20vh",
            position:"relative"
             }}>
            <img src="/flame.svg" style={{  display: "block", width: "100%",height: "auto", }}></img>
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -10%)",
                color: "#ffffffff",
                fontWeight: "bold",
                fontSize: "45px",
                fontFamily: "Arial, sans-serif",
                textShadow: "-1px -1px 0 black, 0 -1px 0 black, 1px -1px 0 black, 1px 0 0 black, 1px  1px 0 black, 0 1px 0 black,  -1px  1px 0 black, -1px  0 0 black"
            }}>
                {streak}
            </div>
        </div>}
        {streak === 0 && <div style={{height:"20vh"}}></div>}
        <div style={{height:"10vh"}}></div>
        <div style = {{height:"40vh"}}>
            <h1 className = "noWhitespace"style={{color: quoteColors[colorIndex]}}>{shortQuote}</h1>
             {/* colorIndex is reused here to only show userInput if the user loses*/}
            {colorIndex === 2 && <h1 style={{color:"gray"}}>{userInput}</h1>}
        </div>
        <form onSubmit = {handleSubmit}>
             {/* The text of this text input is entirely based on what the userInput value is, not its default behavior*/}
            <input className="form-control form-control-lg" 
            type="text" 
            value ={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Rewrite the quote correctly" 
            style={{width:"60%"}} 
            ></input>
        </form>
    </div>
  )}


export default GamePage

