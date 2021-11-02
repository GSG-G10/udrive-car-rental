import React from 'react';
import './style.css';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { ProvideAuth } from './use-auth';
import { ProtectedRoute, AdminProtectedRoute } from './ProtectedRoute';
import DashboardTable from '../Components/Common/DashboardTable';
import Button from '../Components/Common/Button';

function App() {
  return (
    <div className="App">
      <ProvideAuth>

        <DashboardTable
          title="title"
          rows={[{
            id: 1, test1: 'hello1', test2: 'hello4',
          }, {
            id: 2, test1: 'hello2', test2: 'hello3',
          }]}
          headers={['id', 'test1', 'test2']}
          // handleDelete={(id) => console.log(id)}
          // handleEdit={(id) => console.log(id)}
          addButton={<Button text="new car" loading={false} handelClick={() => console.log('hello')} />}
        />
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
