/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useHistory } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './style.css';
import { useAuth } from '../../../App/use-auth';

function Navbar() {
  const { user, logout } = useAuth();
  const history = useHistory();

  return (
    <AppBar position="absolute">
      <Toolbar>
        <Link to="/">
          <img src="" alt="logo" />
        </Link>
        <ul className="navList">
          <li>
            <Link to="/" className="listItem active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cars" className="listItem">
              Cars
            </Link>
          </li>
          <li>
            <Link to="/booking" className="listItem">
              booking
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="listItem">
              dashboard
            </Link>
          </li>
        </ul>
        <Toolbar className="navBtns">
          <button className={user ? 'hidden' : 'loginBtn'} onClick={() => history.push('/login')}>Log In</button>
          <div className={user ? 'userContainer' : 'hidden'}>
            <AccountCircleIcon color="secondary" />
            <span className="userName">{user?.name}</span>
          </div>
          <div className={user ? 'logout-btn' : 'hidden'} onClick={logout}>
            <IconButton>
              <LogoutIcon className="cartIcon" />
              <p>Logout</p>
            </IconButton>
          </div>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
