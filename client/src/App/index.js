import React from 'react';
import './style.css';
import { Switch, Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Router expect path="/">
          home page
        </Router>
        <Router expect path="/dashboard">
          dashboard page
        </Router>
        <Router expect path="/cars/:carId">
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
        <Router expect path="*">
          404 Not Found
        </Router>
      </Switch>
    </div>
  );
}

export default App;
