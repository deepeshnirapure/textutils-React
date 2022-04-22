import React, { useState } from "react";
// with the help of hook we use state in react without writing a class

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLwClick = () => {
    // console.log("Lowercase was clicked" + Text);
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Your text is cleared", "success");
  };

  const handleOnChange = (event) => {
    // console.log("Onchange");
    setText(event.target.value);
  };

  const [Text, setText] = useState("");
  // Text= "Newtext" ----wrong way to change the text which variable in this case
  // setText ("Newtext") ----correct way to change the text
  return (
    <div>
      <div className="container " style={{color:props.mode ==='dark'? 'white':'#0f2d41'}}>
        <h1 className="my-2 mx-2 mb-2">{props.heading}  </h1>
        <textarea className="form-control"value={Text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'? '#0f2d41':'white', color:props.mode ==='dark'? 'white':'#0f2d41'}} id="myBox"  rows="8"></textarea>
      </div>
      <div className="container">
        <button
          disabled = {Text.length===0}
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>

        <button
          disabled = {Text.length===0}
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={handleLwClick}
        >
          Convert to lowercase
        </button>
        <button
          disabled = {Text.length===0}
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={handleClearText}
        >
          Clear text{" "}
        </button>
      </div>

      <div className="container"  style={{color:props.mode ==='dark'? 'white':'#0f2d41'}}>
        <h1>Text Summary</h1>
        {Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words & {Text.length} character
        <h2>Preview</h2>
        {Text.length>0?Text:"Enter the Text Above to Preview it"}
      </div>
    </div>
  );
}
