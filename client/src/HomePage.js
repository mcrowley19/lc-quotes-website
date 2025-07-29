import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Button to navigate to the edit page
function BlueButton() {
  const [IsClicked, SetClick] = useState(false);
  const navigate = useNavigate();
  //Changes background color and navigated when clicked
  const handleClick = () => {
    SetClick(true);
    setTimeout(() => SetClick(false), 100); 
    navigate('/edit'); 
  };

  return(
  <Button className="btn rounded-circle "   
  style={{ 
    width: '60px', 
    height: '60px',
    background: IsClicked ? '#315b7eff' : '#4682b4'}}
  onClick= {handleClick}
  >

    <img src="/play-button-arrowhead-svgrepo-com.svg" style={{ width: '30px', height: '30px', paddingLeft:'3px'}} alt="play button"/>
  </Button>)
}

//The card that contains the play name, image and button
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
        <Card.Img variant="top" src="\crown.png" style={{aspectRatio: '1 / 1', height:'80%',width:'60%'}} alt="crown"/>
      </Container>
      <Card.Body className="d-flex justify-content-center">
       <BlueButton />
      </Card.Body>
    </Card>
  );
}

//The main function of the web page
function HomePage() {
  return (
    <div style={{minHeight: '100vh'}}>
      <div style={{ height: '2vh' }}></div>
      <Container className="d-flex justify-content-center align-items-center " style={{marginTop:'-70px', height:'100vh'}}>
        <Row>
          <GameCard />
        </Row>
      </Container>
    </div>
  );
}
export default HomePage;