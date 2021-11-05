/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import {
  AppBar, IconButton, Toolbar, Menu, MenuItem,
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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            {user && (
            <li>
              <Link to="/booking" className="listItem">
                Booking
              </Link>
              <Menu
                id="bookMenu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={logout}>
                  {' '}
                  <LogoutIcon sx={{ marginRight: '3px' }} />
                  {' '}
                  Logout
                </MenuItem>
              </Menu>
            </li>
            )}
            {user?.isAdmin && (
            <li>
              <Link to="/dashboard" className="listItem">
                Dashboard
              </Link>
            </li>
            )}
          </ul>
          <Toolbar className="navBtns">
            { !user && (
            <div className="login">
              <IconButton onClick={() => history.push('/login')}>
                <PersonOutlineIcon color="third" sx={{ marginRight: '5px' }} />
                <span> Log in </span>
              </IconButton>
            </div>
            ) }
            { user && (
            <div className="userContainer">
              <IconButton
                aria-controls="userMenu"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <PersonOutlineIcon color="third" />
                <span className="userName">{user?.name}</span>
              </IconButton>
              <Menu
                id="userMenu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={logout}>
                  {' '}
                  <LogoutIcon sx={{ marginRight: '3px' }} />
                  {' '}
                  Logout
                </MenuItem>
              </Menu>
            </div>
            ) }
          </Toolbar>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
