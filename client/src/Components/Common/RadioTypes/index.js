import React from 'react';
import {
  FormGroup, FormControlLabel, RadioGroup, Radio, Grid, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

function RadioTypes({ icons, value, handleChange }) {
  return (
    <FormGroup>
      <Typography>VEHICLE BODY TYPE</Typography>
      <RadioGroup
        aria-label="Types"
        value={value}
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <Grid container justifyContent="space-between" sx={{ marginTop: '1rem' }}>
          {icons.map((icon) => (
            <FormControlLabel
              value={icon.id}
              control={<Radio sx={{ display: 'none' }} />}
              label={(
                <img
                  src={icon.icon}
                  className="img"
                  alt="tst"
                  style={{ width: '96px', height: '96px' }}
                />
              )}
              sx={{ marginBottom: '1rem' }}
            />
          ))}
        </Grid>
      </RadioGroup>
    </FormGroup>
  );
}

RadioTypes.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.bool.isRequired,
};
export default RadioTypes;
