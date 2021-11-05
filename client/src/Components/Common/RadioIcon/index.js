import React from 'react';
import {
  FormGroup, FormControlLabel, FormLabel, RadioGroup, Radio, Grid, Box,
} from '@mui/material';
import PropTypes from 'prop-types';

function RadioIcon({ imgs }) {
  console.log(imgs);
  return (
    <FormGroup sx={{ marginLeft: '4rem' }}>
      <FormLabel component="legend">VEHICLE BODY TYPE</FormLabel>
      <Box sx={{ width: '20%', border: '2px solid' }}>
        <RadioGroup
          aria-label="gender"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 2, md: 2 }}>
            {imgs.map((img) => (
              // <Grid item xs={2} sm={2} md={2} key={index}>
              <FormControlLabel
                value="hi"
                control={<Radio sx={{ display: 'none' }} />}
                label={(
                  <img
                    src={img.icon}
                    className="img"
                    alt="tst"
                    style={{ width: '96px', height: '96px' }}
                  />
              )}
              />
              // </Grid>
            ))}
          </Grid>
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </Box>
    </FormGroup>
  );
}

RadioIcon.propTypes = {
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default RadioIcon;
