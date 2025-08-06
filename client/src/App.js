import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homePage";
import EditPage from "./editPage"; 
import GamePage from "./gamePage";
import { useState,useEffect } from "react";


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
      <a href="/" className="fw-bold"style={{color: "white", fontSize: "3.5vh",display:"flex",textDecoration:"none"}}>
        <img
        style={{marginTop:"3.5px",marginRight:"5px",display:"block"}}
          alt=""
          src="\chat.png"
          width="30px"
          height="30px"
        />
        LearnQuotes
      </a>
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
            <Route path = "/edit" element = {<EditPage quoteList = {quoteList} setQuoteList = {setQuoteList} />} />
            <Route path ="/play" element = {<GamePage  quoteList = {quoteList}  />} />
        </Routes>
    </Router>
  );
}

export default App;