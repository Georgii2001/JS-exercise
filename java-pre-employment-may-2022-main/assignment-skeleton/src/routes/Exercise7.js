function Exercise7() {
  return (
    <div>
      <div>
        <p>
          Build a form that accepts a first name and a last name. Add a button
          called "Greet Me" that when clicked, will alert "Hello, [first name]
          [last name]!". First name and last name should have the values from
          the corresponding inputs.
        </p>
        <div className="solution-container">
        <form>
            <label >First name:</label> <br></br>
            <input type="text" id="fname" ></input><br></br>
            <label for="lname">Last name:</label><br></br>
            <input type="text" id="lname"></input> <br></br>
            <button  id="bName" type="submit" value="Submit" onClick={Button()}>
              Greet Me 
             </button>
        </form> 
        </div>
      </div>
    </div>
  );

  function Button() {
    const fname=document.getElementById("fname").value;
    const lname=document.getElementById("lname").value;
   
   alert("Hello, "+fname+" "+lname+"!");
  }
}

export default Exercise7;
