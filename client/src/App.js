import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homePage';
import EditPage from './editPage'; 
import GamePage from './gamePage';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';


function Nbar(){
  return(
  <div className="container-fluid" style={{maxWidth: '100%',padding: '0px',margin: '0px'}}>
    <Navbar className="navbar navbar-dark"
    style={{
      background:'#1f324a', 
      paddingLeft: "1%", 
      height: '8vh', 
      width: '100%',

      }}>
      <Navbar.Brand href="/" className="fw-bold"style={{color: 'white', fontSize: '24px'}}>
        <img
        style={{ marginBottom: "5%",marginRight:"2%"}}
          alt=""
          src="\chat.png"
          width="35"
          height="30"
        />
        LearnQuotes
      </Navbar.Brand>
    </Navbar>
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
            <Route path = "/edit" element = {<EditPage quoteList = {quoteList} setQuoteList = {setQuoteList} />} />
            <Route path ="/play" element = {<GamePage  quoteList = {quoteList}  />} />
        </Routes>
    </Router>
  );
}

export default App;