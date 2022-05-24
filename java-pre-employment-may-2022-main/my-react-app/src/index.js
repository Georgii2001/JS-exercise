import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const name = "John";

function getName() {
  const a = 0;
  if (a === 0) {
    return "Jane";
  } else {
    return "John";
  }
}

const element = (
  <div>
    <p>Hello, {getName()}</p>
    <p>Hello world 2</p>
  </div>
);

root.render(element);
