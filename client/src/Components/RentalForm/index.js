import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import PropTypes from 'prop-types';
import DateTimePicker from '../Common/DateTimePicker/index';
import Input from '../Common/Input/index';
import './style.css';
import Confrim from '../Confirm/inedx';
import Alter from '../Common/Alert';

const axios = require('axios');

function RentalForm({ price = 10, id }) {
  const [showAlert, setShowAlert] = useState(false);
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

  const rentalCar = () => {
    handleError(async () => {
      setOpen(false);
      try {
        await axios.post(`/api/v1/rentals/${id}`, {
          location: data.location,
          pickUpDateTime: data.pickUpDateTime,
          pickOffDateTime: data.pickOffDateTime,

        });
        setShowAlert(true);
      } catch (err) {
        <Alter className="error" title="Error" description="You Should Enter Value" />;
      }
    });
  };

  return (
    <div className="rental-container-form">
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
          handelClick={rentalCar}
          carName="carName"
          price={totalPrice}
          open={open}
          setOpen={setOpen}
          className="confirm-btn"
        />
      </form>

      <div className="alert-div-success">

        {showAlert && <Alter className="success" title="success" description="Rental Successfully" />}
      </div>
    </div>
  );
}
RentalForm.propTypes = {
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,

};
export default RentalForm;
