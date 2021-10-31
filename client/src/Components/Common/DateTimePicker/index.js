import React, { useState } from 'react';
import { TextField } from '@mui/material';
import moment from 'moment';

export default function DateTimePickerComp() {
  const [dateTime, setDateTime] = useState(moment().format('yyyy-MM-DDThh:mm'));
  console.log(dateTime);
  const onChangeHnadler = (e) => {
    setDateTime(e.target.value);
  };
  return (
    <TextField
      id="datetime-local"
      label="Date&Time Picker"
      type="datetime-local"
      defaultValue={dateTime}
      sx={{ width: 250 }}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={onChangeHnadler}
    />
  );
}
