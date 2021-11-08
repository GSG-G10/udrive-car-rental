import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  Box, Slider, Typography,
} from '@mui/material';
import RadioTypes from '../Common/RadioTypes';
import SelectorInput from '../Common/SelectorInput';
import DateTimePicker from '../Common/DateTimePicker';

function Filter({
  brandId, typeId, handelChangeBrands, handelChangePrice, handelChangeTypes, handelChangeSeats,
  handelChangePickUp, handelChangePickOff,
}) {
  const defaultUp = moment().format('yyyy-MM-DDThh:mm');
  const defaultOff = moment().add(3, 'hours').format('yyyy-MM-DDThh:mm');

  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getBrands = async () => {
      try {
        const resultBrands = await axios.get('/api/v1/brands');
        setBrands(resultBrands.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBrands();

    return () => {
      source.cancel();
    };
  }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getTypes = async () => {
      try {
        const resultTypes = await axios.get('/api/v1/types');
        setTypes(resultTypes.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTypes();

    return () => {
      source.cancel();
    };
  }, []);

  return (
    <Box sx={{
      width: '20%',
      height: '110vh',
      border: '1px solid #C4C4C4',
      borderRadius: '10px',
      marginLeft: '20px',
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
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
  // setBrandId: PropTypes.bool.isRequired,
  // minPrice: PropTypes.number.isRequired,
  // setMinPrice: PropTypes.bool.isRequired,
  // maxPrice: PropTypes.number.isRequired,
  // setMaxPrice: PropTypes.bool.isRequired,
  typeId: PropTypes.number.isRequired,
  // setTypeId: PropTypes.bool.isRequired,
  // seats: PropTypes.number.isRequired,
  // setSeats: PropTypes.bool.isRequired,
  // pickUp: PropTypes.string.isRequired,
  // setPickUp: PropTypes.bool.isRequired,
  // pickOff: PropTypes.string.isRequired,
  // setPickOff: PropTypes.bool.isRequired,
  handelChangeBrands: PropTypes.bool.isRequired,
  handelChangePrice: PropTypes.bool.isRequired,
  handelChangeTypes: PropTypes.bool.isRequired,
  handelChangeSeats: PropTypes.bool.isRequired,
  handelChangePickUp: PropTypes.bool.isRequired,
  handelChangePickOff: PropTypes.bool.isRequired,
};

export default Filter;
