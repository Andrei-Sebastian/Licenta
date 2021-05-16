import React ,{Component} from 'react';
import Welcome from './components/welcome/Welcome';
import Login from './components/Login/login';
import SetProfile from './components/Login/set-profile';
import Register from './components/Login/register';
import NewAccount from './components/Login/new-account';
import ForgotPassword from './components/Login/forgot-password';
import NewPassword from './components/Login/new-password';
import AddPost from './components/AddPost/AddPost';
import Schadule from './components/profile-stylist/profile-stylist';
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

            <Route path="/setProfile">
              <SetProfile />
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

            <Route path="/schadule">
              <Schadule />
            </Route>

            <Route path="/newAccount">
              <NewAccount />
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
