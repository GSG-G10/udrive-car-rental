import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import './Style.css';

function SelectorInput({
  text, value, handleChange, item,
}) {
  return (
    <div>
      <FormControl fullWidth className="selectorInput" sx={{ width: '15rem' }}>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>{text}</em>
          </MenuItem>
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
  value: PropTypes.string.isRequired,

};
export default SelectorInput;
