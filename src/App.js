import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import NewYorkTimes from "./components/NewYorkTimes"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route  exact path="/" render={routerProps => <Home {...routerProps} />} />
        <Route exact path="/new-york-times" render={routerProps => <NewYorkTimes {...routerProps} />}/>
      </div>
    </Router>
  );
}

export default App;
