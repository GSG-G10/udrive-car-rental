import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function Header({
  img, header, description, children,
}) {
  return (
    <div className="img" style={{ backgroundImage: `url(${img})` }}>
      <div className="container">
        <div className="header">
          <h1>{header}</h1>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="component">{children}</div>
      </div>
    </div>
  );
}
Header.defaultProps = {
  img: '',
  header: '',
  description: '',
  children: '',
};
Header.propTypes = {
  img: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
