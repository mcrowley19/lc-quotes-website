import './App.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';


// IDEA: Flame for streaks, At the beginning it isn't there, after one outline appears, slowly gets more and more red, with animation. Include after style is updated

function GamePage({quoteList}) {
    //quote contains a random quote that has been selected from the list.  
    // shortQuote is quote with a certain amount of characters replaced with dashes
    const [quote, setQuote] = useState('');
    const [shortQuote, setShortQuote] = useState('');
    const [userInput, setUserInput] = useState('')

    //colorIndex is used to specify what color in quoteColors the quote should change to.
    const quoteColors = ['#000000ff','#42a845','#a84242ff']
    const [colorIndex,setColorIndex] = useState() 
    let correctQuotes = []

    //This function assigns the values to quote and shortQuote
    const createQuote = function(){
        if (quoteList.length > 0){
            let tempQuote = quoteList[Math.floor(Math.random() * (quoteList.length))].text
            while (correctQuotes.includes(tempQuote) && correctQuotes.length !== quoteList.length){
                tempQuote = quoteList[Math.floor(Math.random() * (quoteList.length))].text
            }
            if (correctQuotes.length === quoteList.length){
                correctQuotes = []
            }
            const removedChars = Math.floor(Math.random() * (tempQuote.length-(tempQuote.length*0.4)));
            let underscores = ""

            for (let i = 0; i < removedChars; i++){
                if (tempQuote[i] === " "){
                    underscores += "   ";
                }
                else{
                    underscores +="_ ";
                }
            }
            setQuote(tempQuote)
            setShortQuote(underscores + tempQuote.slice(removedChars))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userInput === String(quote)){
            correctQuotes.push(quote)
            setColorIndex(1)
            setUserInput("")
            setTimeout(() => setColorIndex(0), 300); 
            setTimeout(() => createQuote(), 300); 
        }
        else{
            setColorIndex(2)
            setShortQuote(quote)
            setTimeout(() => setColorIndex(0), 2000); 
            setTimeout(() => createQuote(), 2000); 
            setTimeout(() => setUserInput(""), 2000); 
        }
    }


    useEffect(() => {
        let ignore = false;

        if (!ignore)  createQuote()
            return () => { ignore = true; }
        },[]);
    
    if (quoteList.length < 1) {
        return <Navigate to="/edit" replace />;;}

  return (
    <div align="center">
        <div style ={{height:'20vh'}}></div>
        <div style = {{height:'50vh'}}>
            <h1 className = "noWhitespace"style={{color: quoteColors[colorIndex]}}>{shortQuote}</h1>
             {/* colorIndex is reused here to only show userInput if the user loses*/}
            {colorIndex === 2 && <h1 style={{color:"gray"}}>{userInput}</h1>}
        </div>
        <form onSubmit = {handleSubmit}>
             {/* The text of this text input is entirely based on what the userInput value is, not its default behavior*/}
            <input class="form-control form-control-lg" 
            type="text" 
            value ={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Rewrite the quote correctly" 
            style={{width:'60%'}} 
            ></input>
        </form>
    </div>
  )}


export default GamePage

