import React from 'react';
import './App.css';
import Dashboard from './Views/Dashboard';
import Viewall from './Views/Viewall';
import Info from './Views/Info';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Daily from './Views/Daily';
import Schedule from './Views/Schedule';
import Login from './Views/Login';
function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/admin/Login" component={Login} />
          <Route path="/admin/Viewall" component={Viewall} />
          <Route path="/admin/Schedule" component={Schedule} />
          <Route path="/admin/Info" component={Info} />
          <Route path="/admin/Daily" component={Daily} />
          <Route path="/admin/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
