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
import Wapo from "./components/Wapo"
import BBC from "./components/BBC"
import Reuters from "./components/Reuters"
import NPR from "./components/NPR"
import GuardianComponent from "./components/Guardian"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route  exact path="/" render={routerProps => <Home {...routerProps} />} />
        <Route exact path="/new-york-times" render={routerProps => <NewYorkTimes {...routerProps} />}/>
        <Route exact path="/wapo" render={routerProps => <Wapo {...routerProps} />}/>
        <Route exact path="/npr" render={routerProps => <NPR {...routerProps} />}/>
        <Route exact path="/reuters" render={routerProps => <Reuters {...routerProps} />}/>
        <Route exact path="/bbc" render={routerProps => <BBC {...routerProps} />}/>
        <Route exact path="/guardian" render={routerProps => <GuardianComponent {...routerProps} />}/>
      </div>
    </Router>
  );
}

export default App;
