import React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './Style.css';
import PropTypes from 'prop-types';
import seat from '../../images/seat.png';
import door from '../../images/door.png';
import gear from '../../images/gear.png';

function CarDetails({
  name, rate, gearbox, type, doorNumber, seats, description,
}) {
  return (
    <div className="car-details-container">
      <Typography gutterBottom variant="h3" component="div" className="car-name">
        {name}
      </Typography>
      <Rating name="read-only" sx={{ fontSize: '1.3rem' }} value={rate} readOnly />
      <div className="box1">
        <Typography variant="h5" gutterBottom component="div" className="attribute">
          <img src={gear} alt="Gear Icon" className="image" />
          {gearbox}
        </Typography>
        <Typography variant="h5" gutterBottom component="div" className="attribute">
          {type}
        </Typography>
      </div>
      <div className="box1">
        <Typography variant="h5" gutterBottom component="div" className="attribute">
          <img src={door} alt="Door icon" className="image" />
          {doorNumber}
          {' '}
          Door
        </Typography>
        <Typography variant="h5" gutterBotstom component="div" className="attribute">
          <img src={seat} alt="Seat Icon" className="image" />
          {seats}
          {' '}
          Seats
        </Typography>
      </div>
      <Typography gutterBottom variant="h5" component="div" className="description">
        Description
      </Typography>
      <Typography variant="body1" gutterBottom className="paragraph-description">
        {description}
      </Typography>
    </div>
  );
}
CarDetails.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  seats: PropTypes.number.isRequired,
  gearbox: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  doorNumber: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,

};
export default CarDetails;
