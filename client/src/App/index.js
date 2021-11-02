import React from 'react';
import './style.css';
import CarCard from '../Components/Common/CarCard';

function App() {
  return (
    <div>
      <h1>Hello World !</h1>
      <CarCard
        image="https://www.mclarenofgreenwich.com/imagetag/3008/main/l/New-2022-Ferrari-Portofino-M.jpg"
        carName="Ferrari"
        rating={4}
        gearbox="Automatic gearbox"
        doors={3}
        seats={4}
        price={70}
      />
    </div>
  );
}

export default App;
