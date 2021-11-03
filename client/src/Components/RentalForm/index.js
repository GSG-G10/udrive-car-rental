import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import PropTypes from 'prop-types';
import DateTimePicker from '../Common/DateTimePicker/index';
import Input from '../Common/Input/index';
import './style.css';
import Confrim from '../Confirm/inedx';

const axios = require('axios');

function RentalForm({ price = 10 }) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({
    location: '', pickUpDateTime: moment().format('yyyy-MM-DDThh:mm'), pickOffDateTime: moment().format('yyyy-MM-DDThh:mm'),
  });
  const [error, setError] = useState({
    location: false,
  });
  const [totalPrice, setTotalPrice] = useState(null);
  const duration = moment.duration(moment(data.pickOffDateTime).diff(moment(data.pickUpDateTime)));
  const hours = duration.asHours();
  useEffect(() => {
    setTotalPrice(price * hours);
  }, [hours]);
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
    handleError(async () => {
      try {
        await axios.post('/api/v1/rentals/1', {
          location: data.location,
          pickUpDateTime: data.pickUpDateTime,
          pickOffDateTime: data.pickOffDateTime,
        });
        setOpen(false);
      } catch (err) {
        console.log(err);
      }
    });
  };

  return (
    <div className="container">
      <form className="rental-form">
        <Input
          label="Pick up and return location"
          className="time"
          widthInput="1.25"
          onChange={(e) => {
            setData({ ...data, location: e.target.value });
          }}
          error={error.location}
          helperText={error.location ? 'This Field is required' : ''}
        />

        {' '}
        <br />
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
        <br />
        <DateTimePicker
          dateTime={moment().format('yyyy-MM-DDThh:mm')}
          label="DropOf Time"
          className="time"
          onChangeHnadler={(e) => {
            setData({ ...data, pickOffDateTime: e.target.value });
          }}
        />
        <br />
        <Typography gutterBottom variant="h6" component="div" className="price">
          Total Price :
          {totalPrice}
        </Typography>
        <br />
        <Confrim
          handelClick={rental}
          carName="carName"
          price={totalPrice}
          open={open}
          setOpen={setOpen}
          className="confirm-btn"
        />
      </form>
    </div>
  );
}
RentalForm.propTypes = {
//   carName: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,

};
export default RentalForm;
