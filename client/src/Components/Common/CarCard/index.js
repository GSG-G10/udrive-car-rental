import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardMedia, CardContent, Typography, Box, Rating, CardActions,
} from '@mui/material';
import Button from '../Button';
import seat from '../../../images/seat.png';
import door from '../../../images/door.png';
import gear from '../../../images/gear.png';
import './Style.css';

function CarCard({
  image, carName, rating, gearbox, doors, seats, price, handelClick,
}) {
  return (
    <Card
      className="card"
      sx={{
        boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={image}
        alt="Car Image"
      />
      <Box className="contentContainer" sx={{ display: 'flex' }}>
        <CardContent className="carContent">
          <Typography component="div" variant="h5" calssName="carName" sx={{ fontWeight: 700 }}>
            {carName}
          </Typography>
          <Rating name="read-only" value={rating} readOnly className="rating" />
          <Typography color="text.secondary" component="div" sx={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <img src={gear} alt="Gear Icon" className="icon" />
            <Typography>{gearbox}</Typography>

          </Typography>
          <Typography color="text.secondary" component="div" sx={{ marginBottom: '10px', display: 'flex' }}>
            <img src={door} alt="Door Icon" className="icon" />
            {doors}
            {' '}
            Doors
          </Typography>
          <Typography color="text.secondary" component="div" sx={{ display: 'flex' }}>
            <img src={seat} alt="Seat Icon" className="icon" />
            {seats}
            {' '}
            seats
          </Typography>
        </CardContent>
        <Box className="priceButton">
          <Typography component="div" variant="h4" sx={{ fontWeight: 700 }}>
            $
            {price}
            <Typography> per hour </Typography>
          </Typography>
          <CardActions>
            <Button loading={false} handelClick={handelClick} text="RENT" />
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
}

CarCard.propTypes = {
  image: PropTypes.string.isRequired,
  carName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  gearbox: PropTypes.string.isRequired,
  doors: PropTypes.number.isRequired,
  seats: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  handelClick: PropTypes.func.isRequired,
};

export default CarCard;
