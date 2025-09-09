import "./TextDiv.css"

export default TextDiv
function TextDiv({play, selectedText, setSelectedText}) {

document.addEventListener('selectionchange', function() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        setSelectedText(selection.toString()); 
    } else {
        selectedText = ''; 
    }
});
  return (
    <div className="play-text-card">
        {play}

    </div>
  );
}