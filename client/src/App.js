import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homePage";
import EditPage from "./editPage"; 
import GamePage from "./gamePage";
import { useState,useEffect } from "react";
import Macbeth from "./Texts/Macbeth"; 
import Othello from "./Texts/Othello"; 
import Merchant from "./Texts/Merchant"; 
import MacbethScenes from "./Scenes/MacbethScenes"
import OthelloScenes from "./Scenes/OthelloScenes"
import MerchantScenes from "./Scenes/MerchantScenes"
import CreditsPage from "./Credits"


function Nbar(){
  return(
    <div className="navbar">
      <a href="/" className="navText">
        <img className="navImage"
          alt=""
          src="\chat.png"
        />
        LearnQuotes
      </a>
      <a href="/credits" className="navText" style={{marginLeft:"auto",marginRight:"25px"}}>Icon credits</a>
    </div>
  );
  }

function App() {
  const [quoteList, setQuoteList] = useState([]);

  return (
    <Router>
        <Nbar /> 
        <Routes >
            <Route path ="/" element = {<HomePage />} />
            <Route path ="/credits" element = {<CreditsPage />} />
            <Route path = "/macbeth" 
              element = {<EditPage 
                quoteList = {quoteList} 
                setQuoteList = {setQuoteList} 
                play={<Macbeth />} 
                scenes={<MacbethScenes />} 
                title={"Edit Quotes - Macbeth"}
                url={"https://learnquotes.com/macbeth"}/>} />    

            <Route path = "/othello" 
              element = {<EditPage 
                quoteList = {quoteList} 
                setQuoteList = {setQuoteList} 
                play={<Othello />} 
                scenes={<OthelloScenes />} 
                title={"Edit Quotes - Othello"}
                url={"https://learnquotes.com/othello"}/>} />

            <Route path = "/merchant-of-venice" 
              element = {<EditPage 
                quoteList = {quoteList} 
                setQuoteList = {setQuoteList} 
                play={<Merchant />} s
                scenes={<MerchantScenes />} 
                title={"Edit Quotes - The Merchant of Venice"} 
                url={"https://learnquotes.com/merchant-of-venice"}/>} />

            <Route path ="/play" 
              element = {<GamePage  quoteList = {quoteList}  />} />
        </Routes>
    </Router>
  );
}

export default App;