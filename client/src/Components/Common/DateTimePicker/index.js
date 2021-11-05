import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

function DateTimePicker({ dateTime, onChangeHnadler }) {
  return (
    <TextField
      id="datetime-local"
      label="Date&Time Picker"
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
  dateTime: PropTypes.string.isRequired,
  onChangeHnadler: PropTypes.func.isRequired,
};

export default DateTimePicker;
