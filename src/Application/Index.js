import React, { Component } from "react";
import "./App.css";
import Greeting from "./Greeting";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";


function App() {
  return (
    <AppLayout> 
      <AppBar />
      <Greeting />
    </AppLayout>

  );
}

export default App;
