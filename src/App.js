import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './App.css';
import Landing from './Landing'
import Resume from'./Resume'
import Nav from'./Nav'
import Works from'./Works'

//import Nav from './Nav'

function App() {
  return (
    <div>
      <Nav/>
      <Router>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/Resume" component={Resume}/>
        <Route exact path="/Works" component={Works}/>
    </Router>
    </div>
  );
}

export default App;
