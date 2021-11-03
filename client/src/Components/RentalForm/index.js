import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import PropTypes from 'prop-types';
import DateTimePicker from '../Common/DateTimePicker/index';
import Input from '../Common/Input/index';
import './style.css';
import Confrim from '../Confirm/inedx';

const axios = require('axios');

function RentalForm({ id, price, carName }) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({
    location: '', pickUpDateTime: moment().format('yyyy-MM-DDThh:mm'), pickOffDateTime: moment().format('yyyy-MM-DDThh:mm'),
  });
  const [error, setError] = useState({
    location: false,
  });
  const handleError = (callback) => {
    if (data.location === '') {
      setError({
        location: true,
      });
    } else {
      setError({
        location: false,
      });
    }
    callback();
  };

  const rental = () => {
    handleError(() => {
      axios.post(`/api/v1/rentals/${id}`, {
        location: data.location,
        pickUpDateTime: data.pickUpDateTime,
        pickOffDateTime: data.pickOffDateTime,
      })
        .then(() => {
          setOpen(false);
        }, (err) => {
          console.log(err);
        });
    });
  };
  return (
    <div className="container">
      <form className="rental-form">
        <Input
          label="Pick up and return location"
          className="time"
          widthInput="1.5"
          onChange={(e) => {
            setData({ ...data, location: e.target.value });
          }}
          error={error.location}
          helperText={error.location ? 'This Field is required' : ''}
        />

        {' '}
        <br />
        <DateTimePicker
          dateTime={moment().format('yyyy-MM-DDThh:mm')}
          label="PickUp-up Time"
          className="time"
          onChangeHnadler={(e) => {
            setData({ ...data, pickUpDateTime: e.target.value });
          }}
        />
        {' '}
        <br />
        <DateTimePicker
          dateTime={moment().format('yyyy-MM-DDThh:mm')}
          label="DropOf Time"
          className="time"
          onChangeHnadler={(e) => {
            setData({ ...data, pickOffDateTime: e.target.value });
          }}
        />
        <Typography gutterBottom variant="h6" component="div" className="price">
          Total Price :
        </Typography>
        <Confrim
          handelClick={rental}
          carName={carName}
          price={price}
          open={open}
          setOpen={setOpen}
        />
      </form>
    </div>
  );
}
RentalForm.propTypes = {
  carName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,

};
export default RentalForm;
