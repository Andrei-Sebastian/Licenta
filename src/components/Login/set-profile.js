import React, { useState } from 'react';

import Layout from './layout';
import Form from "react-bootstrap/Form";


const SetProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');

    return (
        <Layout title="Set profile">
            <Form >

          <Form.Group size="lg" controlId="password">
            <Form.Label 
              className="password-label"
              // style={confirmPassword.length > 0 ? {display: 'block'} :  {display: 'none'}}
            >Password</Form.Label>
            <Form.Control
              className="input-form input-password"
              type="password"
              // value={confirmPassword}
            //   style={wrongPassword ? {borderColor: 'red'} : {}}
            //   onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>

          <button 
            variant="primary" 
            type="submit"
            className="submit-button"
            // onClick={handleSubmit}
          > 
            SIGN UP
          </button>
{/* 
          <Button 
            variant="primary" 
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          >
            SIGN IN
          </Button> */}

          <div className='back-to-login-div' onClick={() => window.location.href = "/login"}>
            <img 
              className='back-to-login-icon' 
              alt="Back to login"
              loading="lazy"
              src='https://cdn2.iconfinder.com/data/icons/pittogrammi/142/27-512.png'
            />
          <label className='back-to-login-label'>Back to login</label>
        </div>
        </Form>
           
        </Layout>
    );
}

export default SetProfile;