function Exercise3() {
  return (
    <div>
      <div>
        <p>
          Create a custom Button component and render it four times. On click,
          it should alert which button was clicked, by displaying the name of
          the button.
        </p>
      </div>
      <div className="solution-container">
      <button onClick={Button1()}>Button1</button>
      <button onClick={Button2()}>Button2</button>
      <button onClick={Button3()}>Button3</button>
      <button onClick={Button4()}>Button4</button>
      </div>
    </div>
  );

  
  function Button1() {
    alert("You pressed button 1!");
  }
  
  function Button2() {
    alert("You pressed button 2!");
  }
  
  function Button3() {
    alert("You pressed button 3!");
  }
  
  function Button4() {
    alert("You pressed button 4!");
  }
}

export default Exercise3;

