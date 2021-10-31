import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function ImageCard({
  img, content,
}) {
  return (
    <div className="image-card-container" style={{ backgroundImage: `url(${img})` }}>
      <div className="image-card-name">
        <h3>{content}</h3>
      </div>
    </div>
  );
}

ImageCard.propTypes = {
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ImageCard;
