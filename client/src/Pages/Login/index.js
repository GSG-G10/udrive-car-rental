import React from 'react';
import './style.css';
import Input from '../../Components/Common/Input';
import Button from '../../Components/Common/Button';

function LoginPage() {
  return (
    <div className="container-login-page">
      <div>
        <img className="login-img-page" src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="img car login page" />
      </div>
      <div className="login-form-page">
        <div className="top-form-login-page">
          <img src="../../images/Logo2.png" alt="logo" />
          <p>Sign in</p>
          <p className="top-form-login-continue">Sign in to Continue</p>

        </div>
        <form>
          <Input label="Email" widthInput={2.5} />
          <Input label="Password" widthInput={2.5} />
          <Button text="Sing in" className="login-btn" />
        </form>
      </div>
    </div>
  );
}
// label = 'inter your value',
// widthInput = '1.5',
// error = false,
// helperText,
// onChange,
// type,

export default LoginPage;
