import React, { useState } from "react";

function counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((prevstate) => prevstate + 1);
  }
  function decrementCount() {
    setCount((prevcount) => prevcount - 1);
  }

  return (
    <div className="container">
      <button onClick={incrementCount}>Like</button>
      <span>{count}</span>
      <button onClick={decrementCount}>Dislike </button>
    </div>
  );
}

export default counter;
