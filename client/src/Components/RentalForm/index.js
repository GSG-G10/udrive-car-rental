import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import DateTimePicker from '../Common/DateTimePicker/index';
import Input from '../Common/Input/index';
import './style.css';
import Confrim from '../Confirm/inedx';

const axios = require('axios');

function RentalForm() {
  const [setOpen] = React.useState(false);
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

  const Rental = () => {
    handleError(() => {
      axios.post('/api/v1/rentals/1', {
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
        <Confrim handelClick={Rental} carName="hhh" price={250} />
      </form>
    </div>
  );
}
export default RentalForm;
