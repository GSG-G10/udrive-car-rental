import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';

function Spinner({ loading }) {
  if (loading) {
    return (
      <CircularProgress />
    );
  }
}

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};
export default Spinner;
