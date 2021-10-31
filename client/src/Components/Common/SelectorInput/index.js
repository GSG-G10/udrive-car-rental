import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import './Style.css';

function SelectorInput({ text, handleChange, item }) {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{text}</InputLabel>
        <Select
          value={text}
          label={text}
          onChange={handleChange}
        >
          {item.map((itemMenu) => <MenuItem value={10}>{itemMenu}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}
SelectorInput.propTypes = {
  handleChange: PropTypes.bool.isRequired,
  item: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,

};
export default SelectorInput;
