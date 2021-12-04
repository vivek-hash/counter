import React, { useState } from "react";

function App() {

const[count ,setCount] =useState(0);

function incrementCount(){
  setCount(prevstate=>prevstate+1);
}
function decrementCount(){ 
  setCount(prevcount=>prevcount-1);
console.log(this.prevcount)
}

  return (
    <div className="container">
      <button onClick={incrementCount}>Like</button>
      <span >{count}</span>
      <button onClick={decrementCount}>Dislike </button>
    </div>
  );
}

export default App;
