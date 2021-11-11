import React from 'react';
import { Alert, AlertTitle } from '@mui/material';
import PropTypes from 'prop-types';
import './style.css';

function Alter({ className, title, description }) {
  return (
    <Alert severity={className} className="alter">
      <AlertTitle>{title}</AlertTitle>
      {description}
      {' '}
    </Alert>
  );
}
Alter.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

};
export default Alter;
