import React from "react";

function CreditsPage() {
  const attributions = [
    {
      title: "Trash Can with Cover from Side View",
      author: "SVGRepo",
      authorUrl: "https://www.svgrepo.com/",
      sourceUrl: "https://www.svgrepo.com/svg/159361/trash-can-with-cover-from-side-view",
      licenseName: "SVGRepo License (Free for Commercial Use, Attribution Optional)",
      licenseUrl: "https://www.svgrepo.com/page/licensing/",
      changes: "Modified from original"
    },
    {
      title: "Plus",
      author: "SVGRepo",
      authorUrl: "https://www.svgrepo.com/",
      sourceUrl: "https://www.svgrepo.com/svg/532994/plus",
      licenseName: "SVGRepo License (Free for Commercial Use, Attribution Optional)",
      licenseUrl: "https://www.svgrepo.com/page/licensing/",
      changes: "Modified from original"
    },
    {
      title: "Play Button Arrowhead",
      author: "SVGRepo",
      authorUrl: "https://www.svgrepo.com/",
      sourceUrl: "https://www.svgrepo.com/svg/164900/play-button-arrowhead",
      licenseName: "SVGRepo License (Free for Commercial Use, Attribution Optional)",
      licenseUrl: "https://www.svgrepo.com/page/licensing/",
      changes: "Modified from original"
    },
    {
      title: "Arrow Back",
      author: "SVGRepo",
      authorUrl: "https://www.svgrepo.com/",
      sourceUrl: "https://www.svgrepo.com/svg/327609/arrow-back",
      licenseName: "SVGRepo License (Free for Commercial Use, Attribution Optional)",
      licenseUrl: "https://www.svgrepo.com/page/licensing/",
      changes: "Modified from original"
    },
    {
      title: "Burn Fire Flame Hot",
      author: "SVGRepo",
      authorUrl: "https://www.svgrepo.com/",
      sourceUrl: "https://www.svgrepo.com/svg/404501/burn-fire-flame-hot",
      licenseName: "SVGRepo License (Free for Commercial Use, Attribution Optional)",
      licenseUrl: "https://www.svgrepo.com/page/licensing/",
      changes: "Modified from original"
    },
    {
      title: "Edit Pen 2",
      author: "SVGRepo",
      authorUrl: "https://www.svgrepo.com/",
      sourceUrl: "https://www.svgrepo.com/svg/376875/edit-pen-2",
      licenseName: "SVGRepo License (Free for Commercial Use, Attribution Optional)",
      licenseUrl: "https://www.svgrepo.com/page/licensing/",
      changes: "Modified from original"
    },

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