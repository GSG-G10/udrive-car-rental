import React from 'react';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';

import './style.css';

function CarDetailsReviews({
  img, userName, rate, review,
}) {
  return (
    <div className="parent">
      <div className="section-2">
        <div className="avatar">
          <Avatar
            alt="Remy Sharp"
            src={img}
            sx={{ width: 56, height: 56 }}
          />
        </div>
        <div className="content">
          <h3>{userName}</h3>
          <p>January 23, 2017 at 7:54 am</p>
          <Rating name="read-only" sx={{ fontSize: '1.3rem' }} value={rate} readOnly />
          <p>
            {review}
          </p>
        </div>
      </div>
    </div>
  );
}

CarDetailsReviews.propTypes = {
  img: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
};

export default CarDetailsReviews;
