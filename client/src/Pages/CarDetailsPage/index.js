import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Components/Common/Header';
import CarDetails from '../../Components/CarDetails';
import CarDetailsReviews from '../../Components/Common/CarDetailsReviews';
import './style.css';
import Footer from '../../Components/Common/Footer';
import RentalForm from '../../Components/RentalForm';

function CarDetailsPage() {
  // const { id } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(async () => {
    try {
      const result = await axios.get('/api/v1/cars/2');
      setDetails(result.data.data[0]);
    } catch (e) {
      console.log('ssssssssssssssssssssssssssssss', e);
    }
  }, []);

  console.log(details);

  return (
    <div>
      <Header img="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80" />
      <div className="car-rental-body">

        <div className="reviews-container">

          <CarDetails
            name={details.brand}
            rate={4}
            gearbox={details.gearbox}
            type={details.type}
            doorNumber={details.door}
            seats={details.seats}
            description={details.description}
          />

        </div>

        <div className="rental-form">
          <RentalForm />
        </div>
      </div>
      <div className="reviews">
        <h3>Reviews</h3>
        <CarDetailsReviews img="https://images.unsplash.com/photo-1602537036862-1d6c093e2620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" userName="Ahmed Abo Abadi" rate={5} review="Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small batch freegan sed." />
        <CarDetailsReviews img="https://avatars.githubusercontent.com/u/78448519?v=4" userName="Abdallah Abo Amraa" rate={5} review="Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small batch freegan sed." />
      </div>

      <Footer />

    </div>
  );
}

export default CarDetailsPage;
