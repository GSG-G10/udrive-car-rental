import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';

function CustomersOpinion({
  userImg, userName, rateNumber, description,
}) {
  return (
    <div sx={{ maxWidth: 275 }}>
      <Card sx={{ maxWidth: 275, margin: '20px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, display: 'flex' }} color="text.secondary" gutterBottom>
            <Avatar alt="Remy Sharp" src={userImg} />
            {' '}
            {userName}
          </Typography>
          <Typography variant="h5" component="div">
            <Rating name="read-only" value={rateNumber} readOnly />
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

CustomersOpinion.defaultProps = {
  userImg: '',
};

CustomersOpinion.propTypes = {
  userImg: PropTypes.string,
  userName: PropTypes.string.isRequired,
  rateNumber: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default CustomersOpinion;
