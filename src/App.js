//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Swith, Route,Link} from "react-router-dom";
import Dashboard from './Dashboard';
import Login from './Login';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
    <div>
      <Fragment>
        <Route path="/" exact component={Login} />
        <Route path="/Dashboard" component={Dashboard} />
       </Fragment>
       </div>
  </Router>
  );
}

export default App;
