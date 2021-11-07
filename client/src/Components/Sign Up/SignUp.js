import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Input from '../Common/Input';
import Alter from '../Common/Alert';
import Button from '../Common/Button';

function SignUp() {
  const [error, setError] = useState({
    location: false, email: false, password: false, confirmPassword: false, phone: false,
  });
  const [value, setValue] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
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
    } else if (value.confirmPassword === '') {
      setError({
        name: false, email: false, password: false, confirmPassword: true, phone: false,
      });
    } else {
      setError({
        name: false, email: false, password: false, confirmPassword: false, phone: true,
      });
    }
    callback();
  };

  const signUp = () => {
    handleError(async () => {
      try {
        await axios.post('/api/v1/signup', {
          name: value.name,
          email: value.email,
          password: value.password,
          confirmPassword: value.confirmPassword,
          phone: value.phone,
        });
        history.push('/');
      } catch (err) {
        <Alter className="error" title="Error" description="You Should Enter Value" />;
      }
    });
  };
  return (
    <div>
      <Input
        label="Name"
        widthInput="1.25"
        onChange={(e) => {
          setValue({ ...value, name: e.target.value });
        }}
        error={error.location}
        helperText={error.location ? 'This Field is required' : ''}
      />
      <Input
        label="E-mail"
        widthInput="1.25"
        onChange={(e) => {
          setValue({ ...value, email: e.target.value });
        }}
        error={error.location}
        helperText={error.location ? 'This Field is required' : ''}
      />
      <Input
        label="password"
        widthInput="1.25"
        onChange={(e) => {
          setValue({ ...value, password: e.target.value });
        }}
        error={error.location}
        helperText={error.location ? 'This Field is required' : ''}
      />
      <Input
        label="confirmPassword"
        widthInput="1.25"
        onChange={(e) => {
          setValue({ ...value, confirmPassword: e.target.value });
        }}
        error={error.location}
        helperText={error.location ? 'This Field is required' : ''}
      />
      <Input
        label="Phone"
        widthInput="1.25"
        onChange={(e) => {
          setValue({ ...value, phone: e.target.value });
        }}
        error={error.location}
        helperText={error.location ? 'This Field is required' : ''}
      />
      <Button handelClick={signUp} text="Sign Up" />
    </div>
  );
}
export default SignUp;
