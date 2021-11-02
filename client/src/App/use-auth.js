import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const authContext = createContext();

export const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  const login = async (email, password) => {
    try {
      const res = await axios.post('/api/v1/login', {
        email,
        password,
      });

      setUser(res.data.user);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  const signup = async (
    email, phone, password, confirmedPassword,
  ) => {
    try {
      const res = await axios.post('/api/v1/signup', {
        email,
        phone,
        password,
        confirmedPassword,
      });

      setUser(res.data.user);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      await axios.get('/api/v1/logout');

      setUser(null);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  const authUser = async (signal) => {
    try {
      const res = await axios.get('/api/v1/auth/user', { signal });

      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    authUser(abortController.signal);

    return () => {
      abortController.abort();
    };
  }, []);

  return {
    user,
    login,
    signup,
    logout,
  };
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

ProvideAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
