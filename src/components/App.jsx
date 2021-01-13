import React, { useState } from "react";

function App() {
  setInterval(getCurrentTime, 1000);
  const now = new Date().toLocaleTimeString();
  const [old, latest] = useState(now);
  function getCurrentTime() {
    const then = new Date().toLocaleTimeString();
    latest(then);
  }
  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
}

export default App;
