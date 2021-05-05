import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Swith, Route,Link} from "react-router-dom";
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
    <div>
      
       <Route path="/" component={Dashboard} />
       </div>
  </Router>
  );
}

export default App;
