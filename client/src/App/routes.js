import React from 'react';
import SignUp from '../Pages/SignUp';

export default [
  {
    name: 'Home',
    path: '/',
    children: <div>Hello Home</div>, // must be a component or (Page)
    public: true,
    isAdmin: false,
  },
  {
    name: 'Cars',
    path: '/cars',
    children: <div>Hello Cars</div>, // must be a component or (Page)
    public: true,
    isAdmin: false,
  },
  {
    name: 'Car Details',
    path: '/cars/:carId',
    children: '', // must be a component or (Page)
    public: true,
    isAdmin: false,
  },
  {
    name: 'Booking',
    path: '/booking',
    children: <div>Hello Booking</div>, // must be a component or (Page)
    public: false,
    isAdmin: false,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    children: '', // must be a component or (Page)
    public: false,
    isAdmin: true,
  },
  {
    name: 'Login',
    path: '/login',
    children: '', // must be a component or (Page)
    public: true,
    isAdmin: false,
  },
  {
    name: 'SignUp',
    path: '/signup',
    children: <SignUp />, // must be a component or (Page)
    public: true,
    isAdmin: false,
  },
];
