import "./ScrollDiv.css"

export default ScrollDiv

function ScrollDiv({isClicked, setClick, scenes}) {

  const handleClick = () => {
    setClick(!isClicked);
  };
  return (
    <div className={`scroll-card ${isClicked ? "expanded" : "collapsed"}`}>
      <button className="scroll-collapse" onClick= { handleClick}>    
        <img src="\menu.svg" className="collapse-image" alt="Collapse Navbar Button"></img>
      </button>

        {/*The content of the navbar only loads when isClicked is true*/}
        {isClicked && scenes}

  </div>
  );
}
