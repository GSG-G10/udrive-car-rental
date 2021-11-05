import React from 'react';
import Header from '../../Components/Common/Header';
import CarDetails from '../../Components/CarDetails';

function CarDetailsPage() {
  return (
    <div>
      <Header img="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80" />
      <CarDetails name="BMW Z4" rate={4} gearbox="Automatic gearbox" type="Sedan" doorNumber={4} seats={4} description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
    </div>
  );
}

export default CarDetailsPage;
