
import "./editPage.css";
import { useState,useEffect } from "react";
import ScrollDiv from "./Components/scrollDiv/ScrollDiv";
import QuotesDiv from "./Components/QuotesDiv/QuotesDiv";
import TextDiv from "./Components/TextDiv/TextDiv";



function EditPage({ play, scenes,title,url}) {
  const [selectedText, setSelectedText] = useState('')
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Play',
    "name": title,
    "author": { "@type": "Person", "name": "William Shakespeare" },
    "url": url,
    "description": `A page where users can select quotes to learn from ${play}`,

  };

  const [quoteList, setQuoteList] = useState(JSON.parse(localStorage.getItem("quoteList") || "[]"))

  useEffect(() => {
    localStorage.setItem('quoteList', JSON.stringify(quoteList));
  },[quoteList]) 
    const [isClicked, setClick] = useState(false);
  return (
    <div className="editpage-div" >
      <title>{title}</title>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),}}/>

        <div style={{height:"10vh"}}></div>
            <ScrollDiv isClicked={isClicked} setClick={setClick} scenes={scenes}/>
            <TextDiv isNavbarWide={isClicked} play={play} selectedText={selectedText} setSelectedText = {setSelectedText}/>
            <QuotesDiv quoteList={quoteList} setQuoteList={setQuoteList} selectedText = {selectedText}/>
    </div>
  );
}

export default EditPage;
