import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Box } from '@mui/material';
import Filter from '../../Components/Filter';
import CarCard from '../../Components/Common/CarCard';
import Navbar from '../../Components/Common/Navbar';
import Header from '../../Components/Common/Header';

function Cars() {
  const history = useHistory();
  const [carsData, setCarsData] = useState([]);
  const [brandId, setBrandId] = useState();
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [typeId, setTypeId] = useState();
  const [seats, setSeats] = useState();
  const [pickUp, setPickUp] = useState();
  const [pickOff, setPickOff] = useState();

  console.log(carsData);
  console.log('brand', brandId, 'type', typeId);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getCars = async () => {
      try {
        const result = await axios.get('/api/v1/cars', {
          params: {
            brandId, typeId, seats, pickUp, pickOff, minPrice, maxPrice,
          },
        });
        if (result && result.data) {
          setCarsData(result.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getCars();

    return () => {
      source.cancel();
    };
  }, [brandId, typeId, seats, pickUp, pickOff, minPrice, maxPrice]);

  const handelChangeBrands = (e) => {
    setBrandId(e.target.value);
  };

  const handelChangePrice = (e) => {
    setMinPrice(e.target.value[0]);
    setMaxPrice(e.target.value[1]);
  };

  const handelChangeTypes = (e) => {
    setTypeId(e.target.value);
  };

  const handelChangeSeats = (e) => {
    setSeats(e.target.value);
  };

  const handelChangePickUp = (e) => {
    setPickUp(e.target.value);
  };

  const handelChangePickOff = (e) => {
    setPickOff(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Header img="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '3rem' }}>
        <Filter
          brandId={brandId}
          typeId={typeId}
          handelChangeBrands={handelChangeBrands}
          handelChangePrice={handelChangePrice}
          handelChangeTypes={handelChangeTypes}
          handelChangeSeats={handelChangeSeats}
          handelChangePickUp={handelChangePickUp}
          handelChangePickOff={handelChangePickOff}
        />
        <Box>
          {carsData.map((car) => (
            <CarCard
              image={car.img_car}
              carName={car.name}
              rating={car.rate}
              gearbox={car.gearbox}
              doors={car.door}
              seats={car.seats}
              price={car.price}
              handelClick={() => history.push(`/cars/${car.id}`)}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Cars;
