import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './component/Navbar.js';
import About from './component/About.js';
import Content from './component/Content.js';
import React, { useState } from 'react';



export default function App() {
  const toggle = () => {
    alert("Enable");
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  const [mode, setmode] = useState('light');

  return (
    <Router>
      <Navbar title='Textoo' mode={mode} toggle={toggle} btntext="Enable DarkMode" aboutText='About Us' />
      
      <Switch>
        <Route path="/about">  
        <About mode={mode} />
        </Route>
        <Route path="/">
          <Content mode={mode} />
        </Route>
      </Switch>
    </Router>
  );
}

