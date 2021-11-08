import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

function DateTimePicker({ label, dateTime, onChangeHnadler }) {
  return (
    <TextField
      id="datetime-local"
      label={label}
      type="datetime-local"
      defaultValue={dateTime}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={onChangeHnadler}
    />
  );
}

DateTimePicker.propTypes = {
  label: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  onChangeHnadler: PropTypes.func.isRequired,
};

export default DateTimePicker;
