import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Hello React");
  // Your code below

  useEffect(() => {
    setMessage("Hello neuefische");
  });

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;

//Create an effect to make the App component change the `message` state to `Hello neuefische` when the **App component renders the first time** (on mount)
