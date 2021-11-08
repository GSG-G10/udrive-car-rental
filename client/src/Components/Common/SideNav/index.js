import React from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../images/Logo2.png';
import dashboardRoutes from '../../../App/dashboardRoutes';

function SideNav() {
  const location = useLocation();

  return (
    <nav className="side-nav">
      <div className="side-nav-logo">
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </div>
      <div className="side-nav-links">
        {dashboardRoutes.map((route) => (
          <Link to={route.path} key={route.name} className={route.path === location.pathname ? 'active-side-nav-link' : ''}>
            <div className="side-nav-link-item">
              {route.icon}
              <span>{route.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default SideNav;
