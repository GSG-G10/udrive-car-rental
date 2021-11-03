/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import SelectorInput from '../SelectorInput';
import DateTimePicker from '../DateTimePicker';
import './style.css';

function SearchBox() {
  const [brands, setBrands] = useState([]);
  const [brandId, setBrandId] = useState(0);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/brands')
      .then((result) => {
        setBrands(result.data.data);
      });
  }, []);

  useEffect(() => {
    axios.get('/api/v1/types')
      .then((type) => {
        setTypes(type.data);
      });
  }, []);

  const handelChangeBrands = (e) => {
    setBrandId(e.target.value);
  };

  const handelChangeTypes = (e) => {
    setTypes(e.target.value);
  };

  const time = moment().format('yyyy-MM-DDThh:mm');

  return (
    <div className="searchBox">
      <SelectorInput text="Brands" item={brands} handleChange={handelChangeBrands} />
      <SelectorInput text="Type" item={types} handleChange={handelChangeTypes} />
      <DateTimePicker dateTime={time} />
    </div>
  );
}

export default SearchBox;
