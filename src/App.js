import React ,{Component, useEffect, useState} from 'react';
import Welcome from './components/welcome/Welcome';
import Login from './components/Login/Login';
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
import Profile from './components/welcome/profile';
import Map from './components/welcome/map';
import Appointment from './components/welcome/appointment';
import Support from './components/welcome/support';
 

const App = () => {
  const [role, setRole] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    setRole(localStorage.getItem("role"));
    setUser(localStorage.getItem("user-info"));
    if (window.location.pathname === "/") {
      window.location.href = "/login"
    }
    if (localStorage.getItem("role") == null || localStorage.getItem("user-info") == null) {
      localStorage.removeItem("role");
      localStorage.removeItem("user-info");
    }

    console.log(role, user)
  })

    return (
      <Router>
          {(role == null || user == null) &&  
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

            <Route path="/newAccount">
              <NewAccount />
            </Route>
{/* 
            <Route>
              <Redirect to="/login" />
            </Route> */}
          </Switch>} 

        {(role === "admin" && user) &&
          <Switch>
            <Route path="/welcome">
              <AdminPage />
            </Route>

            <Route>
              <Redirect to="/welcome" />
            </Route>

          </Switch>
        }           

        {(role === "user") && 
          <Switch>
            <Route path="/welcome">
              <Welcome />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

          
            <Route path="/support">
              <Support />
            </Route>

            <Route path="/takeappointment">
              <Appointment />
            </Route>

            {/* <Route>
              <Redirect to="/" />
            </Route> */}
         </Switch>
        }


        {role === "stylist" && 
          <Switch>
            <Route path="/welcome">
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

            <Route path="/support">
              <Support />
            </Route>

            <Route>
              <Redirect to="/welcome" />
            </Route>
            
          </Switch>
        }
      </Router>
    );
}

export default App;
