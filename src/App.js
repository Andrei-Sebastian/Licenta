import React ,{Component} from 'react';
import Welcome from './components/welcome/Welcome';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component{
  render() {
    return (
      <Router>
          <Switch>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/welcome">
              <Welcome />
            </Route>

            <Route>
              <Redirect to="/welcome" />
            </Route>
            
          </Switch>
      </Router>
    );
  }
 
}

export default App;
