import React ,{Component} from 'react';
import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import NewPassword from './components/NewPassword/NewPassword';
import AddPost from './components/AddPost/AddPost';
import GoogleMaps from './components/GoogleMaps/GoogleMaps';
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

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/forgotpassword">
              <ForgotPassword />
            </Route>

            <Route exact path="/resetpassword/:id"
               component={NewPassword}
            />

            <Route path="/welcome">
              <Welcome />
            </Route>

            <Route path="/add/post">
              <AddPost />
            </Route>

            <Route path="/map">
              <GoogleMaps />
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
