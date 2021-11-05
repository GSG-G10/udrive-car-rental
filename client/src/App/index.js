import React from 'react';
import './style.css';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { ProvideAuth } from './useAuth';
import { ProtectedRoute, AdminProtectedRoute } from './ProtectedRoute';
import Navbar from '../Components/Common/Navbar';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <Navbar />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cars">Cars</Link></li>
          <li><Link to="/booking">Booking</Link></li>
        </ul>

        <Switch>
          {routes.map((route) => {
            if (route.public) {
              return <Route exact path={route.path} key={route.name}>{route.children}</Route>;
            }
            if (route.isAdmin) {
              return (
                <AdminProtectedRoute exact path={route.path} key={route.name}>
                  {route.children}
                </AdminProtectedRoute>
              );
            }
            return (
              <ProtectedRoute exact path={route.path} key={route.name}>
                {route.children}
              </ProtectedRoute>
            );
          })}

          <Route path="*">
            404 Not Found
          </Route>
        </Switch>
      </ProvideAuth>
    </div>
  );
}

export default App;
