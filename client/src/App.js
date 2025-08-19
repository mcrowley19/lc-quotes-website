import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homePage";
import EditPage from "./editPage"; 
import GamePage from "./gamePage";
import Macbeth from "./Texts/Macbeth"; 
import Othello from "./Texts/Othello"; 
import Merchant from "./Texts/Merchant"; 
import Twelfth from "./Texts/Twelfth";
import Hamlet from "./Texts/Hamlet";
import MacbethScenes from "./Scenes/MacbethScenes"
import OthelloScenes from "./Scenes/OthelloScenes"
import MerchantScenes from "./Scenes/MerchantScenes"
import TwelfthScenes from "./Scenes/TwelfthScenes"
import HamletScenes from "./Scenes/HamletScenes"

function Nbar(){
  return(
    <div className="navbar">
      <a href="/" className="navText">
        <img className="navImage"
          alt=""
          src=".\chat.svg"
        />
        LearnQuotes
      </a>
    </div>
  );
  }

function App() {


  return (
    <Router>
        <Nbar /> 
        <Routes >
            <Route path ="/" element = {<HomePage />} />
            <Route path = "/macbeth" 
              element = {<EditPage 
                play={<Macbeth />} 
                scenes={<MacbethScenes />} 
                title={"Edit Quotes - Macbeth"}
                url={"https://learnquotes.com/macbeth"}/>} />    

            <Route path = "/othello" 
              element = {<EditPage 
                play={<Othello />} 
                scenes={<OthelloScenes />} 
                title={"Edit Quotes - Othello"}
                url={"https://learnquotes.com/othello"}/>} />

            <Route path = "/merchant-of-venice" 
              element = {<EditPage  
                play={<Merchant />} s
                scenes={<MerchantScenes />} 
                title={"Edit Quotes - The Merchant of Venice"} 
                url={"https://learnquotes.com/merchant-of-venice"}/>}/>

            <Route path = "/twelfth-night" 
              element = {<EditPage 
                play={<Twelfth />} s
                scenes={<TwelfthScenes />} 
                title={"Edit Quotes - Twelfth Night"} 
                url={"https://learnquotes.com/twelfth-night"}/>}/>

            <Route path = "/hamlet" 
              element = {<EditPage 
                play={<Hamlet />} s
                scenes={<HamletScenes />} 
                title={"Edit Quotes - Hamlet"} 
                url={"https://learnquotes.com/hamlet"}/>}/>

            <Route path ="/play" 
              element = {<GamePage  />} />
        </Routes>
    </Router>
  );
}

export default App;