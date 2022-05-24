import React from "react";

function Exercise1() {
  return (

    <div>
      <div>
        <p>
          Create a square with a background color. The width and height for the
          square should be 200px. Inside the square, render "Hello, World!". The
          text should be vertically and horizontally aligned.
        </p>
      </div>
      <div className="solution-container" onLoad={draw()}  >
          <canvas id="canvas" width="200" height="200">
          <p id="Hello">Hello Wold!</p>
          </canvas>
         
      </div>
    </div>
  );

  function draw(){
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var context = canvas.getContext('2d');
      context.fillStyle = "pink";
      context.fillRect(20,20,200,200);
      
      context.fillStyle = "black";
      context.textAlign='center';
      context.rotate(-Math.PI / 2 );
      context.fillText("Hello Wold!",100,100);  
    }
  }
}

export default Exercise1;
