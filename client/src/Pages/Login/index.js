import React, { useState } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import Input from '../../Components/Common/Input';
import Button from '../../Components/Common/Button';
import logo from '../../images/Logo.png';
import { useAuth } from '../../App/useAuth';

function LoginPage() {
  const { login } = useAuth();

  const [userInformationLogin, setUserInformationLogin] = useState({ email: '', password: '' });

  const history = useHistory();

  const loginFunc = () => {
    login(userInformationLogin, (err) => {
      if (err) {
        console.log('sssssssssssssssssssssssss', err);
      } else {
        // <Alert className="success" title="success" description="Login Successfully" />;
        history.push('/');
      }
    });
  };

  return (

    <div className="container-login-page">

      <div>
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
            onChange={(e) => {
              setUserInformationLogin({ ...userInformationLogin, email: e.target.value });
            }}
          />
          <Input
            label="Password"
            widthInput={2.5}
            onChange={(e) => {
              setUserInformationLogin({ ...userInformationLogin, password: e.target.value });
            }}
          />
          <Button text="Sing in" className="login-btn" width={77} handelClick={loginFunc} />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
