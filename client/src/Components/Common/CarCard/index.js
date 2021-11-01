import React from 'react';
import {
  Card, CardMedia, CardContent, Typography, Box, Rating,
} from '@mui/material';
import PropTypes from 'prop-types';
import Button from '../Button';
import seat from '../../../images/Vector.png';
import door from '../../../images/door.png';
import gear from '../../../images/gear.png';

function CarCard({ handelClick }) {
  return (
    <Card sx={{
      display: 'flex', width: '50%', marginLeft: '30px', marginTop: '30px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }}
    >
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image="https://www.mclarenofgreenwich.com/imagetag/3008/main/l/New-2022-Ferrari-Portofino-M.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h4" sx={{ marginBottom: '5px', fontWeight: 700 }}>
              Ferrari
            </Typography>
            <Rating name="read-only" value={3.2} readOnly sx={{ marginBottom: '15px' }} />
            <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ marginBottom: '10px' }}>
              <img src={gear} alt="Door icon" className="image" style={{ marginRight: '15px' }} />
              Automatic gearbox
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ marginBottom: '10px' }}>
              <img src={door} alt="Door icon" className="image" style={{ marginRight: '15px' }} />
              3 Doors
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              <img src={seat} alt="Door icon" className="image" style={{ marginRight: '15px' }} />
              3 seats
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h3" sx={{ fontWeight: 700, alignSelf: 'flex-end' }}>
              $70
              <Typography> per hour </Typography>
            </Typography>
            <Button loading={false} handelClick={handelClick} text="RENT" />
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
}

CarCard.propType = {
  handelClick: PropTypes.func.isRequired,
};

export default CarCard;
