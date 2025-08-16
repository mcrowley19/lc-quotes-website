import React from "react";

function CreditsPage() {
  const attributions = [

    {
      title: "Chat Icon",
      author: "Freepik",
      authorUrl: "https://www.freepik.com/",
      sourceUrl: "https://www.freepik.com/icon/chat_522914#fromView=search&page=1&position=11&uuid=3e8ba15d-58d1-4a15-8495-28fddc36b403",
      licenseName: "Freepik Free License (Attribution Required)",
      licenseUrl: "https://www.freepikcompany.com/legal",
      changes: "No changes made"
    }
    
  ];

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" ,color:"white"}}>
      <h1>Image Credits</h1>
      <p>
        Below are the attributions for images used on this website.
      </p>
      <ul>
        {attributions.map((item, index) => (
          <li key={index} style={{ marginBottom: "1.5rem" }}>
            <strong>{item.title}</strong> by{" "}
            <a href={item.authorUrl} target="_blank" rel="noopener noreferrer">
              {item.author}
            </a>
            , from{" "}
            <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
              source
            </a>
            , licensed under{" "}
            <a href={item.licenseUrl} target="_blank" rel="noopener noreferrer">
              {item.licenseName}
            </a>
            . {item.changes && `Changes: ${item.changes}.`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CreditsPage;