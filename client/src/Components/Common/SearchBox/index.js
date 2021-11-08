/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import SelectorInput from '../SelectorInput';
import DateTimePicker from '../DateTimePicker';
import './style.css';
import Button from '../Button';
import Alter from '../Alert';

function SearchBox() {
  const history = useHistory();
  const [brands, setBrands] = useState([]);
  const [brandId, setBrandId] = useState(0);
  const [types, setTypes] = useState([]);
  const [typeId, setTypeId] = useState(0);
  let unmounted = false;
  useEffect(async () => {
    if (!unmounted) {
      try {
        const resultBrands = await axios.get('/api/v1/brands');
        setBrands(resultBrands.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    return function () {
      unmounted = true;
    };
  }, []);

  useEffect(async () => {
    if (!unmounted) {
      try {
        const resultTypes = await axios.get('/api/v1/types');
        setTypes(resultTypes.data);
      } catch (err) {
        console.log(err);
      }
    }
    return function () {
      unmounted = true;
    };
  }, []);

  const handelChangeBrands = (e) => {
    setBrandId(e.target.value);
  };

  const handelChangeTypes = (e) => {
    setTypeId(e.target.value);
  };
  const handelClick = () => {
    if (!brandId && !typeId) {
      return alert('error');
    }
    return history.push({
      pathname: '/cars',
      state: { typeId, brandId },
    });
  };
  const time = moment().format('yyyy-MM-DDThh:mm');

  return (
    <div className="searchBox" style={{ marginTop: '20px' }}>
      <SelectorInput text="Brands" value={brandId} item={brands} handleChange={handelChangeBrands} />
      <SelectorInput text="Type" value={typeId} item={types} handleChange={handelChangeTypes} />
      <Button text="Search" handelClick={handelClick} />
    </div>
  );
}

export default SearchBox;
