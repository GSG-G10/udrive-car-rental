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
      <Card sx={{
        maxWidth: 275, margin: '20px', boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
      }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14, display: 'flex', alignItems: 'center' }} color="text.secondary" gutterBottom>
            <Avatar sx={{ marginRight: '14px' }} alt="Remy Sharp" src={userImg} />
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
