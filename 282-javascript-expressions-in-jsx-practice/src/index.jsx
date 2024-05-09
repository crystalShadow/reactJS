//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import react from "react";
import ReactDom from "react-dom";

const myName = "Shashank Shekhar";
const currentyear = new Date().getFullYear();

ReactDom.render(<div><p>Created by {myName}.</p> <p>Copyright {currentyear}.</p></div>,document.getElementById("root"));

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
