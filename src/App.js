import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from "./components/NavBar"
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Home />

      </div>
    </Router>
  );
}

export default App;
