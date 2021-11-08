import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const ContextData = createContext();
function TypeContext({ children }) {
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const source = axios.CancelToken.source();

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
    return () => {
      source.cancel();
    };
  };
  useEffect(() => {
    getTCarsType();
    return () => {
      source.cancel();
    };
  }, []);
  useEffect(() => {
    getCarsBrands();
    return () => {
      source.cancel();
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
