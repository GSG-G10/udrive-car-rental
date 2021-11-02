/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {
  AppBar, IconButton, Toolbar,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useHistory } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './style.css';
import { useAuth } from '../../../App/use-auth';
import logo from '../../../images/Logo.png';

const theme = createTheme({
  palette: {
    primary: {
      // Black with opacity
      main: '#00000080',
    },
    secondary: {
      // Black
      main: '#000000',
    },
    third: {
      // White
      main: '#ffffff',
    },
  },
});

function Navbar() {
  const { user, logout } = useAuth();
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <AppBar color="primary" position="absolute">
        <Toolbar>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
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
            <li className={user?.isAdmin ? 'hidden' : 'listItem'}>
              <Link to="/booking" className="listItem">
                booking
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className={user?.isAdmin ? 'listItem' : 'hidden'}>
                dashboard
              </Link>
            </li>
          </ul>
          <Toolbar className="navBtns">
            <div className={user ? 'hidden' : 'login'}>
              <IconButton onClick={() => history.push('/login')}>
                <PersonOutlineIcon color="third" sx={{ marginRight: '5px' }} />
                <span> Log in </span>
              </IconButton>
            </div>
            <div className={user ? 'userContainer' : 'hidden'}>
              <PersonOutlineIcon color="third" />
              <span className="userName">{user?.name}</span>
            </div>
            <div className={user ? 'logoutBtn' : 'hidden'}>
              <IconButton onClick={logout}>
                <LogoutIcon color="third" />
                <span>Logout</span>
              </IconButton>
            </div>
          </Toolbar>
        </Toolbar>
      </AppBar>
      <div className="img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80)' }} />
    </ThemeProvider>
  );
}

export default Navbar;
