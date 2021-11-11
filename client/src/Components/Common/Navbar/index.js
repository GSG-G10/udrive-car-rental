import React, { useState } from 'react';
import {
  AppBar, IconButton, Toolbar, Menu, MenuItem,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useHistory } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './style.css';
import PropTypes from 'prop-types';
import { useAuth } from '../../../App/useAuth';
import logo from '../../../images/Logo.png';
// import Header from '../Header';

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

function Navbar({ backgroundColor }) {
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

  const handleLogout = () => {
    logout((err) => {
      if (!err) {
        history.push('/');
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar color={backgroundColor} position="absolute">
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
            {/* {user && (
            <li>
              <Link to="/booking" className="listItem">
                Booking
              </Link>
            </li>
            )} */}
            {user?.isAdmin && (
            <li>
              <Link to="/admin/cars" className="listItem">
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
                <MenuItem onClick={handleLogout}>
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
      {/* <Header img="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" /> */}
    </ThemeProvider>
  );
}

Navbar.defaultProps = {
  backgroundColor: 'primary',
};

Navbar.propTypes = {
  backgroundColor: PropTypes.string,
};

export default Navbar;
