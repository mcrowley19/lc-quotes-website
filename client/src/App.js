import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './App.css';
import { useState } from 'react';




function Nbar(){
  return(
  <Container fluid style={{maxWidth: '100%', paddingLeft: 24, paddingRight: 24}}>
    <Navbar className="navbar navbar-dark  rounded shadow"
    style={{
      background:'#4682B4', 
      margin: '0 auto', 
      paddingLeft: 24, 
      paddingRight: 24, 
      height: '50px', 
      border: '2px solid',
      borderColor:'#3B3B3B',

      }}>
      <Navbar.Brand href="#home" className="fw-bold"style={{color: 'white', fontFamily:'MedievalSharp', fontSize: '24px'}}>
        <img
          alt=""
          src="\chat.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        Quotes
      </Navbar.Brand>
    </Navbar>
    </Container>
  );
  }

function BlueButton() {
  const [IsClicked, SetClick] = useState(false);
  const handleClick = () => {
  SetClick(true);
  setTimeout(() => SetClick(false), 100); // 100ms for a quick flash
  };
  return(
  <Button className="btn rounded-circle "   
  style={{ 
    width: '60px', 
    height: '60px',
    background: IsClicked ? '#315b7eff' : '#4682b4'}}
  onClick= {handleClick}
      >
    <img src="/play-button-arrowhead-svgrepo-com.svg" style={{ width: '30px', height: '30px', paddingLeft:'3px'}}/>
  </Button>)
}

function GameCard() {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <Card className="rounded border-dark"
    style={{ 
      width: '18rem', 
      background:'#f6edd2ff',
      border:'3px solid', 
      borderColor:'#3B3B3B',
      boxShadow: isHovered ? '0 8px 16px rgba(0, 0, 0, 0.3)':'0 4px 8px rgba(0, 0, 0, 0.2)',
      transition: isHovered ? 'boxShadow 0.3s ease, transform 0.3s ease':'translateY(-4px)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      <Card.Body className="align-text-center">
        <Card.Title className="justify-content-center fw-bold" style={{color:'#8B0000',fontFamily:'MedievalSharp',fontSize:'40px',paddingLeft: 30, paddingRight: 24}}>Macbeth</Card.Title>
      </Card.Body>
      <Container style={{background:'#3B3B3B', height:'100%',width:'100%',aspectRatio: '4 / 3'}} className="rounded justify-content-center align-items-center d-flex">
        <Card.Img variant="top" src="\crown (3).png" style={{aspectRatio: '1 / 1', height:'80%',width:'60%'}}/>
      </Container>
      <Card.Body className="d-flex justify-content-center">
       <BlueButton />
      </Card.Body>
    </Card>
  );
}


function App() {
  return (
    <div style={{minHeight: '100vh'}}>
      <div style={{ height: '2vh' }}></div>
      <Nbar /> 
      <Container className="d-flex justify-content-center align-items-center " style={{marginTop:'-70px', height:'100vh'}}>
        <Row>
          <GameCard />
        </Row>
      </Container>
    </div>
  );
}
export default App;