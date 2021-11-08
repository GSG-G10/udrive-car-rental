import React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

import PropTypes from 'prop-types';

function Input({
  label = 'inter your value',
  widthInput = '1.5',
  error = false,
  helperText,
  onChange,
  type,
}) {
  const useStyles = makeStyles({
    input: {
      width: `${widthInput * 200}px`,
    },
  });
  const classes = useStyles();
  return (
    <TextField
      className={classes.input}
      id="outlined-number"
      label={label}
      size="small"
      error={error}
      helperText={helperText}
      type={type}
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
Input.defaultProps = {
  helperText: '',
  error: '',
  type: '',
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  widthInput: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Input;
