import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (inputValue % 2 === 0) {
      console.log("Even number");
    } else if (inputValue % 2 !== 0) {
      console.log("odd");
    } else {
      console.log("string");
    }
  }

  return (
    <div className="container">
      <form>
        <input
          value={inputValue}
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
        />

        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
