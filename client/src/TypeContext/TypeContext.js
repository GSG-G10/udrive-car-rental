import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const ContextData = createContext();
function TypeContext({ children }) {
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  let unmounted = false;

  const getCarsBrands = async () => {
    try {
      const data = await axios.get('/api/v1/brands');
      setBrands(data.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getTCarsType = async () => {
    try {
      const data = await axios.get('/api/v1/types');
      setTypes(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!unmounted) {
      getTCarsType();
    }
    return function () {
      unmounted = true;
    };
  }, []);
  useEffect(() => {
    if (!unmounted) {
      getCarsBrands();
    }
    return function () {
      unmounted = true;
    };
  }, []);
  return (

    <ContextData.Provider value={{ brands, types }}>
      {children}
    </ContextData.Provider>

  );
}
TypeContext.defaultProps = {
  children: '',
};
TypeContext.propTypes = {
  children: PropTypes.node,
};

export default TypeContext;
