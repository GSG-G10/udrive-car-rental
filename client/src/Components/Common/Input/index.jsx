import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

function Input({ label = 'inter your value', width = '1.5' }) {
  return (
    <div
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      size="small"
    >
      <TextField
        style={{ margin: '15px', width: `${width * 200}px` }}
        id="outlined-number"
        label={label}
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default Input;
