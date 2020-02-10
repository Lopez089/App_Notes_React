import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import AppNotes from "./Componentes/appNotes";

function App() {
  return (
    <div className="App">
      <AppNotes />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
