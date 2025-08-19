
import "./gamePage.css";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import winSound from "./assets/success.mp3";



function GamePage({quoteList}) {
    //quote contains a random quote that has been selected from the list.  
    // shortQuote is quote with a certain amount of characters replaced with dashes

    //const [quote, setQuote] = useState("");

    const [randomIndex, setRandomIndex] = useState(null);
    const [shortQuote, setShortQuote] = useState("");
    const [userInput, setUserInput] = useState("")

    //colorIndex is used to specify what color in quoteColors the quote that is displayed should change to.
    const quoteColors = ["white","#42a845","#a84242ff"]
    const [colorIndex,setColorIndex] = useState(0) 
    const [correctQuotes,setCorrectQuotes] = useState([])
    const [streak,setStreak] = useState(0)

    //This ensures the streak number does not load before the image behind it
      const [imageLoaded, setImageLoaded] = useState(false);
    //This function assigns the values to quote and shortQuote
    const createQuote = function(){
        if (quoteList.length > 0){
    
            //This code creates tempQuote as a random quote in the list. 
            // If it is in the list the user has already answered it correctly. It picks a new one unless the correct list is equal to the quoteList
            let tempRandIndex = (Math.floor(Math.random() * (quoteList.length)))
            

            console.log('tempRandIndex:', tempRandIndex);
            while (correctQuotes.includes(tempRandIndex) && correctQuotes.length < quoteList.length){
                tempRandIndex = (Math.floor(Math.random() * (quoteList.length)))
            }
            setRandomIndex(tempRandIndex)

            let tempQuote = quoteList[tempRandIndex].text
            tempQuote = tempQuote.replace(/[\r\n]+/gm, " ");
            tempQuote = tempQuote.split("")
            //Tabs and spaces are removed from the tempQuote
            

            //This chooses the number of characters to be removed
            const removedChars = Math.floor(Math.random() * (tempQuote.length-(tempQuote.length*0.3))+2);
            //This randomly decides if the characters will be removed from the front or the back of the string
            const backOrForward = Math.floor(Math.random() * (2));

            if (backOrForward === 0){
                let underscores = tempQuote.map(function(currentValue,index){
                    if (index > removedChars){
                        return currentValue;
                    }
                    if (currentValue !== " "){
                        return "_ "}
                    return "   ";
                })
                setShortQuote(underscores)
                }
            else{
             let underscores = tempQuote.map(function(currentValue,index){
                    if (index < removedChars){
                        return currentValue;
                    }
                    if (currentValue !== " "){
                        return "_ "}
                    return "   ";
                        })
                setShortQuote(underscores)
            }

        }
    }

    const audio = new Audio(winSound);
    const handleSubmit = (event) => {
        event.preventDefault();
        const userAnswer = userInput.replace(/\s+/g, " ").trim().toLowerCase()
        const currentQuote = quoteList[randomIndex].text.replace(/\s+/g, " ").trim();

        if ( userAnswer === currentQuote.toLowerCase()){
            audio.play();
            setCorrectQuotes(prev => [...prev,randomIndex])
            setShortQuote(currentQuote)
            setColorIndex(1)
            setUserInput("")
            setTimeout(() => setColorIndex(0), 500); 
            setTimeout(() => createQuote(), 500); 
            setStreak(prev => prev +1)

        }
        else{
            setColorIndex(2)
            setShortQuote(currentQuote)
            setTimeout(() => setColorIndex(0), 2000); 
            setTimeout(() => createQuote(), 2000); 
            setTimeout(() => setUserInput(""), 2000); 
            setStreak(0)
        }
    }
    useEffect(() => {
        createQuote()
    }, []);

    if (quoteList.length < 1) {
        return <Navigate to="/" replace />;}




        
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    "name": "Test Yourself",
    "educationalLevel": ["UpperSecondary","Leaving Certificate","A-Levels","GCSE"],
    "author": { "@type": "Person", "name": "William Shakespeare" },
    "url": "https://learnquotes.com/play",
    "description": 'An interactive quiz testing users on selected quotes',
  };

  return (
    <div align="center" 
    style={{
        boxShadow: colorIndex === 1 ?"  inset 0 0 75px rgba(34, 115, 248, 0.7), 0 0 150px rgba(34, 115, 248, 0.4)": "",
        height:"92dvh",
        overflowY:"none",
        margin:"5px"
    }}>

        <title>Test Yourself</title>

   <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
        <br />
        <div className="streak"style ={{visibility: (streak) >0 ? "visible" : "hidden", position:"relative"
             }}>
            <img src="/flame2.svg" style={{  display: "block", width: "100%",height: "auto", }}  onLoad={() => setImageLoaded(true)} alt="Streak flame"></img>
           { imageLoaded === true &&
            <div style={{
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -30%)",
                color: "#ffffffff",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif"
            }}>
                {streak}
            </div>}
        </div>
        <div style={{height:"100px"}}></div>
        <div  className="randomq-div">
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

            ></input>
        </form>
    </div>
  )}


export default GamePage

