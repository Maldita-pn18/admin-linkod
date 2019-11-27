import React from 'react';
import './App.css';

import Dashboard from '../src/Views/Dashboard/Dashboard';
import Viewall from '../src/Views/Booking/Viewall';
import Info from '../src/Views/Booking/Info';
import UpdateBooking from '../src/Views/Booking/UpdateBooking'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Daily from '../src/Views/Schedule/Daily';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/admin/Viewall" component={Viewall} />
          <Route path="/admin/UpdateBooking" component={UpdateBooking} />
          <Route path="/admin/Daily" component={Daily} />
          <Route path="/admin/" component={Dashboard} />
          <Route path="/admin/Info" component={Info} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
