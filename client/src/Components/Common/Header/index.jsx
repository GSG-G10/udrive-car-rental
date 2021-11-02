import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function Header({ img, children }) {
  return (
    <div className="img" style={{ backgroundImage: `url(${img})` }}>
      <div className="component">{children}</div>
    </div>
  );
}
Header.defaultProps = {
  img: '',
  children: '',
};
Header.propTypes = {
  img: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
