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
    <div
    style={{
      background:"#1f324a", 
      paddingLeft: "1%", 
      height: "8vh", 
      width: "100%",
      maxWidth: "100%",
      display:"flex",
      alignItems:"center"

      }}>
      <a href="/" className="navText">
        <img
        style={{marginTop:"3.5px",marginRight:"5px",display:"block"}}
          alt=""
          src="\chat.png"
          width="30px"
          height="30px"
        />
        LearnQuotes
      </a>
      <a href="/credits" className="navText" style={{marginLeft:"auto",marginRight:"25px",fontSize:"20px"}}>Icon credits</a>
    </div>
  );
  }

function App() {
  const [quoteList, setQuoteList] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div
        style={{
          paddingTop:"20vh",
          textAlign: "center",
          color:"white",
          fontSize:"20px",
          fontWeight:"bold",
          margin:"auto"
        }}>
          <div style={{display:"block",margin:"auto",fontSize:"40px"}}>
        <img src="chat.png" style={{height:"50px", width:"50px",display:"inline",marginBottom:"10px",marginRight:"10px"}}></img>LearnQuotes
        </div>
        <br />
This app is only available on desktop devices. Please use a larger screen.
      </div>
    );
  }




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
                cenes={<MerchantScenes />} 
                title={"Edit Quotes - The Merchant of Venice"} 
                url={"https://learnquotes.com/merchant-of-venice"}/>} />

            <Route path ="/play" 
              element = {<GamePage  quoteList = {quoteList}  />} />
        </Routes>
    </Router>
  );
}

export default App;