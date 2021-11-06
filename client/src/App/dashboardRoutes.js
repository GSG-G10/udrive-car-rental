import React from 'react';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CarRentalIcon from '@mui/icons-material/CarRental';
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

export default [
  {
    name: 'Cars',
    path: '/admin/cars',
    icon: <DirectionsCarIcon />,
  },
  {
    name: 'Users',
    path: '/admin/users',
    icon: <PeopleAltOutlinedIcon />,
  },
  {
    name: 'Rentals',
    path: '/admin/rentals',
    icon: <CarRentalIcon />,
  },
  {
    name: 'Car Brands',
    path: '/admin/brands',
    icon: <BrandingWatermarkOutlinedIcon />,
  },
  {
    name: 'Car Types',
    path: '/admin/types',
    icon: <LocalShippingOutlinedIcon />,
  },
];
