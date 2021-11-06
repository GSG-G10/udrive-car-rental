import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const authContext = createContext();

export const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const login = async ({ email, password }, callback = null) => {
    try {
      const res = await axios.post('/api/v1/login', {
        email,
        password,
      });

      setUser(res.data.user);
      if (callback) callback(null);
    } catch (err) {
      if (callback) callback(err);
    }
  };

  const signup = async (
    {
      email, phone, password, confirmedPassword,
    },
    callback = null,
  ) => {
    try {
      const res = await axios.post('/api/v1/signup', {
        email,
        phone,
        password,
        confirmedPassword,
      });

      setUser(res.data.user);
      if (callback) callback(null);
    } catch (err) {
      if (callback) callback(err);
    }
  };

  const logout = async (callback = null) => {
    try {
      await axios.post('/api/v1/logout');

      setUser(null);
      if (callback) callback(null);
    } catch (err) {
      if (callback) callback(err);
    }
  };

  const authUser = async (signal) => {
    try {
      const res = await axios.get('/api/v1/auth/user', { signal });

      setUser(res.data);
    } catch (err) {
      setUser(null);
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
