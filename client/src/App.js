import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homePage';
import EditPage from './editPage'; 
import GamePage from './gamePage.js';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';


function Nbar(){
  return(
  <div className="container-fluid" style={{maxWidth: '100%',padding: '0px',margin: '0px'}}>
    <Navbar className="navbar navbar-dark"
    style={{
      background:'#4682B4', 
      margin: '0 auto', 
      paddingLeft: 15, 
      height: '50px', 
      borderBottom: '2px solid',
      borderColor:'#3B3B3B',
      width: '100%',

      }}>
      <Navbar.Brand href="/" className="fw-bold"style={{color: 'white', fontFamily:'MedievalSharp', fontSize: '24px'}}>
        <img
        style={{ paddingRight: 10}}
          alt=""
          src="\chat.png"
          width="40"
          height="30"
          className="d-inline-block align-top"
        />
        Quotes
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
        <Routes>
            <Route path ="/" element = {<HomePage />} />
            <Route path = "/edit" element = {<EditPage quoteList = {quoteList} setQuoteList = {setQuoteList} />} />
            <Route path ="/play" element = {<GamePage  quoteList = {quoteList}  />} />
        </Routes>
    </Router>
  );
}

export default App;