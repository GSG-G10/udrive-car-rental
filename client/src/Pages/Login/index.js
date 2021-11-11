import React, { useState } from 'react';
import './style.css';
import { useHistory, Link } from 'react-router-dom';
import Input from '../../Components/Common/Input';
import Button from '../../Components/Common/Button';
import logo from '../../images/Logo3.png';
import { useAuth } from '../../App/useAuth';

function LoginPage() {
  const { login } = useAuth();

  const [loginError, setLoginError] = useState({ email: false, password: false });
  const [userInformationLogin, setUserInformationLogin] = useState({ email: '', password: '' });

  const history = useHistory();

  const handleErrorLogin = (callback) => {
    if (userInformationLogin.email === '') {
      setLoginError({
        email: true, password: false,
      });
    } else if (userInformationLogin.password === '') {
      setLoginError({
        name: false, password: true,
      });
    } else {
      callback();
    }
  };

  const loginFunc = () => {
    handleErrorLogin(() => {
      login(userInformationLogin, (err) => {
        if (err) {
          setLoginError(err.message);
        } else {
          history.push('/');
        }
      });
    });
  };

  return (

    <div className="container-login-page">

      <div className="container-login-img-page">
        <img className="login-img-page" src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="img car login page" />
      </div>
      <div className="login-form-page">
        <div className="top-form-login-page">
          <img src={logo} alt="logo" />
          <p>Sign in</p>
          <p className="top-form-login-continue">Sign in to Continue</p>

        </div>
        <form>
          <Input
            label="Email"
            widthInput={2.5}
            error={loginError.email}
            helperText={loginError.email ? 'This Field is required' : ''}
            onChange={(e) => {
              setUserInformationLogin({ ...userInformationLogin, email: e.target.value });
            }}
          />
          <Input
            label="Password"
            type="password"
            widthInput={2.5}
            error={loginError.password}
            helperText={loginError.password ? 'This Field is required' : ''}
            onChange={(e) => {
              setUserInformationLogin({ ...userInformationLogin, password: e.target.value });
            }}
          />
          <Button text="Sing in" className="login-btn" width={72} handelClick={loginFunc} />
        </form>
        <div className="signup-container">
          create an account !
          <Link to="/signup" className="create-account-btn"> Create an Account </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
