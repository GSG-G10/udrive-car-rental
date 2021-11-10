import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Footer from '../../Components/Common/Footer';
import CustomersOpinion from '../../Components/Common/CustomersOpinion';
import ImageCard from '../../Components/Common/ImageCard';
import Header from '../../Components/Common/Header';
import SearchBox from '../../Components/Common/SearchBox';
import NavBar from '../../Components/Common/Navbar';
import { ContextData } from '../../TypeContext/TypeContext';
import './style.css';

const axios = require('axios');

function Home() {
  const { brands, types } = React.useContext(ContextData);
  const [review, setReview] = useState([]);
  useEffect(async () => {
    const source = axios.CancelToken.source();
    try {
      const data = await axios.get('/api/v1/reviewHome', {
        cancelToken: source.token,
      });
      setReview(data.data.data);
    } catch (err) {
      if (axios.isCancel(err)) {
        return '';
      }
      throw err;
    }
    return () => {
      source.cancel();
    };
  }, []);
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.div,
    width: '100%',
  }));
  return (
    <div>
      <Header img="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80">
        <div className="header">
          <NavBar />
          <Typography variant="h2" gutterBottom className="paragraph-description" sx={{ fontSize: '40px' }}>
            First Class Car Rental & Limousine Services
          </Typography>
          <Typography variant="body1" gutterBottom className="paragraph-description" sx={{ fontSize: '24px', paddingLeft: '25px' }}>
            We offer professional car rental & limousine services in our range of high-end vehicles.
          </Typography>
          <SearchBox />
        </div>
      </Header>
      <Typography variant="h5" gutterBottom className="paragraph-description" sx={{ textAlign: 'center', paddingTop: '50px' }}>
        Find Car by Brands
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        className="paragraph-description"
        sx={{
          textAlign: 'center', paddingTop: '2px', color: '8A8A8A', paddingBottom: '25px',
        }}
      >
        We offer professional car rental & limousine services in our range of high-end vehicles.
      </Typography>
      <Box sx={{
        flexGrow: 1, marginLeft: '3%', marginRight: '3%', height: '600px', paddingTop: '15px',
      }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {brands && brands.slice(0, 6).map((brand) => (
            <Grid item xs={2} sm={4} md={4} key={brand.id}>

              <Item>
                <Link to={{
                  pathname: '/cars',
                  state: { brandId: brand.id },
                }}
                >
                  <ImageCard img={brand.image} content={brand.name} key={brand.id} />
                </Link>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Typography variant="h5" gutterBottom className="paragraph-description" sx={{ textAlign: 'center', paddingTop: '25px' }}>
        Find Car by Type
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        className="paragraph-description"
        sx={{
          textAlign: 'center', paddingTop: '2px', color: '8A8A8A', paddingBottom: '25px',
        }}
      >
        We offer professional car rental & limousine services in our range of high-end vehicles.
      </Typography>
      <Box sx={{
        flexGrow: 1, marginLeft: '3%', marginRight: '3%', height: '400px', paddingTop: '15px',
      }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {types && types.slice(0, 3).map((type) => (
            <Grid item xs={2} sm={4} md={4} key={type.id}>
              <Item>
                <Link to={{
                  pathname: '/cars',
                  state: { typeId: type.id },
                }}
                >
                  <ImageCard
                    img={type.image}
                    content={type.name}
                    key={type.id}
                  />
                </Link>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Typography variant="h5" gutterBottom className="paragraph-description" sx={{ textAlign: 'center', paddingTop: '25px' }}>
        Customer Opinion
      </Typography>
      <Box sx={{
        flexGrow: 1, marginLeft: '5%', marginRight: '5%', marginBottom: '10%', paddingTop: '15px',
      }}
      >
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {review && review.slice(0, 3).map((item) => (
            <Grid item xs={4}>

              {' '}
              <CustomersOpinion userName="UserName" rateNumber={item.rate} description={item.review} />

            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}
export default Home;
