/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from './useAuth';

export function ProtectedRoute({ children, ...rest }) {
  const { user } = useAuth();

  return user?.id ? <Route {...rest}>{children}</Route> : <Redirect to="/login" />;
}

export function AdminProtectedRoute({ children, ...rest }) {
  const { user } = useAuth();

  return user?.isAdmin ? <Route {...rest}>{children}</Route> : <Redirect to="/" />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

AdminProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
