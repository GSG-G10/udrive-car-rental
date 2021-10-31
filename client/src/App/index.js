import React from 'react';
import './style.css';
import { Switch, Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Router expect path="/">
          home page
        </Router>
        <Router expect path="/dashboard">
          dashboard page
        </Router>
        <Router expect path="/cars">
          cars page
        </Router>
        <Router expect path="/carDetails">
          Car Details page
        </Router>
        <Router expect path="/booking">
          Booking page
        </Router>
        <Router expect path="/login">
          login page
        </Router>
        <Router expect path="/signup">
          signup page
        </Router>
        <Router expect path="/login">
          login page
        </Router>
        <Router expect path="/addCar">
          add cars page
        </Router>
      </Switch>
    </div>
  );
}

export default App;
