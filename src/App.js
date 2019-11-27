import React from 'react';
import './App.css';

import Dashboard from './Views/Dashboard';
import Viewall from './Views/Viewall';
// import Info from './Views/Info';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Daily from './Views/Daily';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/admin/Viewall" component={Viewall} />
          {/* <Route path="/admin/Info" component={Info} /> */}
          <Route path="/admin/Daily" component={Daily} />
          <Route path="/admin/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
