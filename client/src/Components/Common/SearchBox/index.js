/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import SelectorInput from '../SelectorInput';
import DateTimePicker from '../DateTimePicker';
import './style.css';
import Button from '../Button';

function SearchBox() {
  const [brands, setBrands] = useState([]);
  const [brandId, setBrandId] = useState(0);
  const [types, setTypes] = useState([]);
  const [typeId, setTypeId] = useState(0);

  useEffect(async () => {
    try {
      const resultBrands = await axios.get('/api/v1/brands');
      setBrands(resultBrands.data.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(async () => {
    try {
      const resultTypes = await axios.get('/api/v1/types');
      setTypes(resultTypes.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handelChangeBrands = (e) => {
    setBrandId(e.target.value);
  };

  const handelChangeTypes = (e) => {
    setTypeId(e.target.value);
  };

  const time = moment().format('yyyy-MM-DDThh:mm');

  return (
    <div className="searchBox" style={{ marginTop: '20px' }}>
      <SelectorInput text="Brands" value={brandId} item={brands} handleChange={handelChangeBrands} />
      <SelectorInput text="Type" value={typeId} item={types} handleChange={handelChangeTypes} />
      <Button text="Search" />
    </div>
  );
}

export default SearchBox;
