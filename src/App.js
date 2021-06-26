import React ,{Component} from 'react';
import Welcome from './components/welcome/Welcome';
import Login from './components/Login/login';
import SetProfile from './components/Login/set-profile';
import Register from './components/Login/register';
import NewAccount from './components/Login/new-account';
import ForgotPassword from './components/Login/forgot-password';
import NewPassword from './components/Login/new-password';
import AddPost from './components/stylist-profile/add-post';
import Schedule from './components/profile-stylist/profile-stylist';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AdminPage from './components/welcome/admin-welcome';
import Appointments from './components/stylist-profile/appointments';
import MyPosts from './components/stylist-profile/my-posts';
import Home from './components/stylist-profile/home';
 

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

            

            <Route path="/schedule">
              <Schedule />
            </Route>

            <Route path="/newAccount">
              <NewAccount />
            </Route>

            <Route path="/admin">
              <AdminPage />
            </Route>



            <Route path="/home">
              <Home />
            </Route>

            <Route path="/appointments">
              <Appointments />
            </Route>

            <Route path="/addPost">
              <AddPost />
            </Route>

            <Route path="/myPosts">
              <MyPosts />
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
