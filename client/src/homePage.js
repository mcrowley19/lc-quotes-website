
import "./homePage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


//The card that contains the play name, image and button
function GameCard({play,image,link,posClass}) {
    const [isClicked, setIsClicked] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 50); 
    setTimeout(() => navigate(`${link}`), 50); 
  };

  return (
      <button
        onClick= {handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`play-card ${posClass}`}
        style ={{
          position:"relative",
          transform: isHovered ? "translateY(-3px)":"",
          boxShadow: isHovered ? "0 8px 16px rgba(0, 0, 0, 0.5)":"0 4px 8px rgba(0, 0, 0, 0.2)",
          justifySelf:"center",}}>
          <div className="card-bg"
            style={{
            backgroundImage: isClicked ? `linear-gradient(rgba(0, 0, 0, 0.5)), url(${image})` : `url(${image})`,
            filter: (posClass === "center") ? "" : "grayscale(100%)",
            }}/>
            <div className="play-text" style={{ position: "relative", zIndex: 2 }}>
          {play}
        </div>
        <div style={{height:"85%",position: "relative", zIndex: 2 }}></div>

    </button>
  );
}

//The main function of the web page
function HomePage() {
  const [cardsPos,setCardsPos] = useState(["farLeftCard","leftCard","center","rightCard","farRightCard"])

  const rightClick = () =>{
    setCardsPos(prev => [prev[1],prev[2],prev[3],prev[4],prev[0]])
  }

  const leftClick = () => {
    setCardsPos(prev => [prev[4],prev[0],prev[1],prev[2],prev[3]])
  }

  const articleStructuredData = [{
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    "name": 'LearnQuotes',
    "url": 'https://learnquotes.com',
    "description": 'A site to help students learn and revise quotes from Shakespeare',
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LearnQuotes",
    "url": "https://learnquotes.com",
    "logo": "https://learnquotes.com/chat.png"
  }];
  return (
<div>


  <title>LearnQuotes</title>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(articleStructuredData),
    }}
  />

    <div className="homepage-container">
        <h1 style={{color:"white", gridArea:"a",textAlign:"left", justifySelf:"start",marginLeft:"20px",fontWeight:"700"}}>Shakespeare</h1>
      <button onClick={leftClick} style={{gridArea:"buttonL"}} className="carousel-buttons">  
        <img src="/arrow.svg" className="carousel-arrows" alt= "Move selection left" />
      </button>
      <GameCard image="othello.jpg" play="Othello" posClass= {cardsPos[0]} link="/othello"/>
      <GameCard image="hamlet.jpg" play="Hamlet" posClass= {cardsPos[1]} link="/hamlet"/>
      <GameCard image="macbeth.jpg" play="Macbeth" posClass= {cardsPos[2]} link="/macbeth"/>
      <GameCard image="merchant.jpg" play="The Merchant of Venice" posClass= {cardsPos[3]} link="/merchant-of-venice"/>
      <GameCard image="twelfth.jpg" play="Twelfth Night" posClass= {cardsPos[4]} link="/twelfth-night"/>
      <button onClick={rightClick}  style={{gridArea:"buttonR"}} className="carousel-buttons">
          <img src="/forwardArrow.svg" className="carousel-arrows" alt= "Move selection left" />
      </button>
    </div>

</div>
  );
}
export default HomePage;