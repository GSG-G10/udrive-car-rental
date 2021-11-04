import React from 'react';
import './style.css';
import {
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import { ProvideAuth } from './use-auth';
import { ProtectedRoute, AdminProtectedRoute } from './ProtectedRoute';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <ProvideAuth>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cars">cars</Link></li>
          <li><Link to="/cars/1">car Details</Link></li>
          <li><Link to="/booking">booking</Link></li>
          <li><Link to="/dashboard">dashboard</Link></li>
          <li><Link to="/login">login</Link></li>
          <li><Link to="/signup">signup</Link></li>
        </ul>

        <Switch>
          <Route exact path="/cars">
            cars page
            {' '}
            {location.state?.typeId}
            {location.state?.brandId}
          </Route>
          <Route exact path="/cars/:carId">
            Car Details page
          </Route>
          <ProtectedRoute exact path="/booking">
            Booking page
          </ProtectedRoute>
          <AdminProtectedRoute exact path="/dashboard">
            dashboard
          </AdminProtectedRoute>
          <Route exact path="/login">
            login page
          </Route>
          <Route exact path="/signup">
            signup page
          </Route>
          <Route exact path="/">
            home page
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
