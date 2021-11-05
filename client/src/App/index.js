import React from 'react';
import './style.css';
import {
  Switch,
  Route,
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
