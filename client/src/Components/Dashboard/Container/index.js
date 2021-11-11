import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Container({ children }) {
  return (
    <div className="dashboard-container">
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
