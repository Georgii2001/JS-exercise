import React, { useState } from 'react';

function Exercise4() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <p>
          Use the useState React hook to track how many times a button is
          clicked, and display the number.
        </p>
        <div className="solution-container">
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      </div>
    </div>
  );
}

export default Exercise4;
