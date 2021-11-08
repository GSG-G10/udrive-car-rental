import React from 'react';
import './style.css';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { ProvideAuth } from './useAuth';
import { ProtectedRoute, AdminProtectedRoute } from './ProtectedRoute';
import TypeContext from '../TypeContext/TypeContext';
import Home from '../Pages/Home';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <ProvideAuth>

        <Switch>
          <Route exact path="/cars">
            <TypeContext>
              cars page
              {' '}
              {location.state?.typeId}
              {location.state?.brandId}
            </TypeContext>
          </Route>
          <Route exact path="/cars/:carId">
            Car Details page
          </Route>
          <ProtectedRoute exact path="/booking">
            Booking page
          </ProtectedRoute>
          <AdminProtectedRoute exact path="/dashboard">
            <TypeContext>
              dashboard
            </TypeContext>
          </AdminProtectedRoute>
          <Route exact path="/login">
            login page
          </Route>
          <Route exact path="/signup">
            signup page
          </Route>

          <Route exact path="/">
            <TypeContext>
              <Home />
            </TypeContext>
          </Route>

          <Route path="*">
            404 Not Found
          </Route>
        </Switch>

      </ProvideAuth>

    </div>

  );
}

export default App;
