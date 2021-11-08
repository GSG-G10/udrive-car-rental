import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Input from '../../Components/Common/Input';
import Alter from '../../Components/Common/Alert';
import Button from '../../Components/Common/Button';
import { useAuth } from '../../App/useAuth';
import './style.css';
import logo from '../../images/Logo3.png';
import signupImage from '../../images/signup.png';

function SignUp() {
  const [error, setError] = useState({
    name: false, email: false, password: false, confirmedPassword: false, phone: false,
  });
  const [value, setValue] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmedPassword: '',
  });
  const { signup } = useAuth();
  const history = useHistory();
  const handleError = (callback) => {
    if (value.name === '') {
      setError({
        name: true, email: false, password: false, confirmPassword: false, phone: false,
      });
    } else if (value.email === '') {
      setError({
        name: false, email: true, password: false, confirmPassword: false, phone: false,
      });
    } else if (value.password === '') {
      setError({
        name: false, email: false, password: true, confirmPassword: false, phone: false,
      });
    } else if (value.confirmedPassword === '') {
      setError({
        name: false, email: false, password: false, confirmPassword: true, phone: false,
      });
    } else if (value.phone === '') {
      setError({
        name: false, email: false, password: false, confirmPassword: false, phone: true,
      });
    } else if (value.password !== value.confirmedPassword) {
      setError({
        name: false, email: false, password: true, confirmPassword: true, phone: false,
      });
    } else {
      callback();
    }
  };
  const signups = () => {
    handleError(() => {
      signup(value, (err) => {
        if (err) {
          <Alter className="error" title="error" description="Error happenes" />;
        } else {
          history.push('/');
        }
      });
    });
  };

  return (
    <div className="container-main">
      <div className="sign-up-image">
        <img src={signupImage} alt="logofound" className="signupImage" />
      </div>
      <div className="input-conatiner">
        <img src={logo} alt="logofound" />
        <Typography variant="h6" gutterBottom className="paragraph-description" sx={{ paddingTop: '18px' }}>

          Sign up
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          className="paragraph-description"
          sx={{ fontSize: '15px', paddingBottom: '20px', color: '#9AA1B9' }}
        >

          Get your account now.
        </Typography>
        <Input
          label="Name"
          widthInput="2"
          onChange={(e) => {
            setValue({ ...value, name: e.target.value });
          }}
          error={error.name}
          helperText={error.name ? 'This Field is required' : ''}
        />
        <br />
        <Input
          label="E-mail"
          widthInput="2"
          onChange={(e) => {
            setValue({ ...value, email: e.target.value });
          }}
          error={error.email}
          helperText={error.email ? 'This Field is required' : ''}
        />
        <br />
        <Input
          label="password"
          widthInput="2"
          onChange={(e) => {
            setValue({ ...value, password: e.target.value });
          }}
          error={error.password}
          helperText={error.password ? 'This Field is required' : ''}
          type="password"
        />
        <br />
        <Input
          label="confirmPassword"
          widthInput="2"
          onChange={(e) => {
            setValue({ ...value, confirmedPassword: e.target.value });
          }}
          type="password"
          error={error.confirmedPassword}
          helperText={error.confirmedPassword ? 'This Field is required' : ''}
        />
        <br />
        <Input
          label="Phone"
          widthInput="2"
          onChange={(e) => {
            setValue({ ...value, phone: e.target.value });
          }}
          error={error.phone}
          helperText={error.phone ? 'This Field is required' : ''}
        />
        <br />
        <Button handelClick={signups} text="Sign Up" />
        <Typography variant="body1" gutterBottom className="paragraph-description" sx={{ paddingTop: '15px', color: '#9AA1B9' }}>
          Already have an account ?
          <Link to="/login"> Signin </Link>
        </Typography>
      </div>

    </div>
  );
}
export default SignUp;
