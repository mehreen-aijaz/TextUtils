import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("UpperCase clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    //console.log("UpperCase clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    //console.log("UpperCase clicked" + text);
    let newText = "";
    setText(newText);
  };
  const handleCopyClick = () => {
    //using promise
    // navigator.clipboard.writeText(text).then(
    //   () => {
    //     alert("Text copied to clipboard!");
    //   },
    //   (err) => {
    //     console.error("Failed to copy text: ", err);
    //   }
    // );

    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text ="new text " wrong way we have to use function setText
  //setText("new text");
  return (
    <>
      <div
        className="contianer my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-3">{props.heading} </h1>
        <div className="mb-3 ">
          <textarea
            className="form-control"
            value={text}
            style={{
              BackgroundColor: props.mode === "dark" ? "#042743" : "white",
              //color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopyClick}
        >
          Copy to Clipboard
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {text.trim() === ""
            ? 0
            : 0.008 *
              text
                .trim()
                .split(/\s+/)
                .filter((word) => word.length > 0).length}{" "}
          Minutes read.
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text in text box to preview."}</p>
      </div>
    </>
  );
}
