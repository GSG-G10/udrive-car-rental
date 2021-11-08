import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  Box, Slider, Typography,
} from '@mui/material';
import RadioTypes from '../Common/RadioTypes';
import SelectorInput from '../Common/SelectorInput';
import DateTimePicker from '../Common/DateTimePicker';
import { ContextData } from '../../TypeContext/TypeContext';

function Filter({
  brandId, typeId, handelChangeBrands, handelChangePrice, handelChangeTypes, handelChangeSeats,
  handelChangePickUp, handelChangePickOff,
}) {
  const defaultUp = moment().format('yyyy-MM-DDThh:mm');
  const defaultOff = moment().add(3, 'hours').format('yyyy-MM-DDThh:mm');
  const { brands, types } = React.useContext(ContextData);

  return (
    <Box sx={{
      width: '20%',
      height: '120vh',
      border: '1px solid #C4C4C4',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: '1rem 1rem',
    }}
    >
      <Typography gutterBottom>BY MAKE</Typography>
      <SelectorInput text="brands" value={brandId} handleChange={handelChangeBrands} item={brands} />
      <Typography gutterBottom>PRICE RANGE</Typography>
      <Slider
        defaultValue={[60, 160]}
        aria-label="Default"
        valueLabelDisplay="auto"
        min={20}
        step={5}
        max={400}
        onChange={handelChangePrice}
      />
      <RadioTypes icons={types} value={typeId} handleChange={handelChangeTypes} />
      <Typography gutterBottom>CAR SEATS</Typography>
      <Slider
        min={2}
        step={1}
        max={10}
        defaultValue={5}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={handelChangeSeats}
      />
      <DateTimePicker label="PickUpDate&Time" dateTime={defaultUp} onChangeHnadler={handelChangePickUp} />
      <DateTimePicker label="PickOffDate&Time" dateTime={defaultOff} onChangeHnadler={handelChangePickOff} />
    </Box>
  );
}

Filter.propTypes = {
  brandId: PropTypes.number.isRequired,
  typeId: PropTypes.number.isRequired,
  handelChangeBrands: PropTypes.func.isRequired,
  handelChangePrice: PropTypes.func.isRequired,
  handelChangeTypes: PropTypes.func.isRequired,
  handelChangeSeats: PropTypes.func.isRequired,
  handelChangePickUp: PropTypes.func.isRequired,
  handelChangePickOff: PropTypes.func.isRequired,
};

export default Filter;
