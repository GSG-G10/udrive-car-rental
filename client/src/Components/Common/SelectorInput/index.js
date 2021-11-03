import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import './Style.css';

function SelectorInput({ text, handleChange, item }) {
  return (
    <div>
      <FormControl fullWidth className="selectorInput" sx={{ width: '15rem' }}>
        <InputLabel id="demo-multiple-name-label">{text}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={text}
          label={text}
          onChange={handleChange}
        >
          {item.map((itemMenu) => <MenuItem value={itemMenu.id}>{itemMenu.name}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}
SelectorInput.propTypes = {
  handleChange: PropTypes.bool.isRequired,
  item: PropTypes.arrayOf(PropTypes.object).isRequired,
  text: PropTypes.string.isRequired,

};
export default SelectorInput;
