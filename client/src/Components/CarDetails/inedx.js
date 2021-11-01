import React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './Style.css';
import PropTypes from 'prop-types';
import seat from '../../images/Vector.png';
import door from '../../images/door.png';
import gear from '../../images/gear.png';

function CarDetails({
  name, rate, gearbox, type, doorNumber, seats, body,
}) {
  return (
    <div className="container">
      <Typography gutterBottom variant="h3" component="div" className="car-name">
        {name}
      </Typography>
      <Rating name="read-only" sx={{ fontSize: '1.3rem' }} value={rate} readOnly />
      <div className="box1">
        <Typography variant="h5" gutterBottom component="div" className="attribute">
          <img src={gear} alt="Not Found" className="image" />
          {gearbox}
        </Typography>
        <Typography variant="h5" gutterBottom component="div" className="attribute">
          {type}
        </Typography>
      </div>
      <div className="box1">
        <Typography variant="h5" gutterBottom component="div" className="attribute">
          <img src={door} alt="Not Found" className="image" />
          {doorNumber}
          {' '}
          Door
        </Typography>
        <Typography variant="h5" gutterBotstom component="div" className="attribute">
          <img src={seat} alt="Not Found" className="image" />
          {seats}
          {' '}
          Seats
        </Typography>
      </div>
      <Typography gutterBottom variant="h5" component="div" className="description">
        Description
      </Typography>
      <Typography variant="body1" gutterBottom className="paragraph-description">
        {body}
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
  body: PropTypes.string.isRequired,

};
export default CarDetails;
