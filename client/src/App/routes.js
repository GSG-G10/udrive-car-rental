import React from 'react';
import SignUp from '../Pages/SignUp';
import LoginPage from '../Pages/Login';
import Home from '../Pages/Home';
import TypeContext from '../TypeContext/TypeContext';
import Cars from '../Pages/Cars';
import CarDetails from '../Pages/CarDetailsPage';
import DahsboardCars from '../Pages/Dashboard/Cars';

export default [
  {
    name: 'Home',
    path: '/',
    children: <TypeContext><Home /></TypeContext>, // must be a component or (Page)
    public: true,
    isAdmin: false,
  },
  {
    name: 'Cars',
    path: '/cars',
    children: <TypeContext><Cars /></TypeContext>, // must be a component or (Page)
    public: true,
    isAdmin: false,
  },
  {
    name: 'Car Details',
    path: '/cars/:carId',
    children: <CarDetails />, // must be a component or (Page)
    public: true,
    isAdmin: false,
  },
  // {
  //   name: 'Booking',
  //   path: '/booking',
  //   children: <div>Hello Booking</div>, // must be a component or (Page)
  //   public: false,
  //   isAdmin: false,
  // },
  // {
  //   name: 'Dashboard',
  //   path: '/dashboard',
  //   children: '', // must be a component or (Page)
  //   public: false,
  //   isAdmin: true,
  // },
  {
    name: 'Login',
    path: '/login',
    children: <LoginPage />, // must be a component or (Page)
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
  {
    name: 'Cars',
    path: '/admin/cars',
    children: <DahsboardCars />,
    public: false,
    isAdmin: true,
  },
];
