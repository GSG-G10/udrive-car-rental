import React from 'react';
import './style.css';

function Header() {
  return (
    <div className="img">
      <div className="container">
        <div className="header">
          <h1>First Class Car Rental & Limousine Services</h1>
        </div>
        <div className="description">
          <p>
            We offer professional car rental & limousine services in our range
            of high-end vehicles
          </p>
        </div>
        <div className="time">
          <div
            style={{
              width: '200px',
              height: '50px',
              backgroundColor: 'red',
            }}
          />
          <div
            style={{
              width: '200px',
              height: '50px',
              backgroundColor: 'red',
            }}
          />
          <div
            style={{
              width: '200px',
              height: '50px',
              backgroundColor: 'red',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
