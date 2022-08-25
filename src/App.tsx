import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Technologies />
    </div>
  );
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>css</li>
        <li>html</li>
        <li>react</li>
        <li>js</li>
      </ul>
      ;
    </div>
  );
};

function Header() {
  return (
    <div className="App">
      <a href="#s">Home</a>
      <a href="#s">News</a>
      <a href="#s">Messages</a>
      <a href="#s">Conacts</a>
    </div>
  );
}

export default App;
