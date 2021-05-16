import React, { useState, useRef } from 'react';
import './register.scss';
import './test.css'
import Layout from './layout';
import profileImg from "../../images/profile.png"

import maleImg from "../../images/male.png";
import femaleImg from "../../images/female.png";

import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'

const Register = (props) => {
    const fileInput = useRef(null) ;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [role, setRole] = useState('stylist');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();
    const [gender, setGender] = useState("");
    // const [profilePhoto, setprofilePhoto] = useState("");
    const [file, setFile] = useState("");


    const changeGender = (gender) => {
        setGender(gender);
    }

   const uploadImage = (e) => {
        try {
            const reader = new FileReader();
            reader.onload = () => {
                if(reader.readyState === 2){
                    setProfilePhoto(reader.result);
                    setFile(file);
                    console.log("here")
                }
            }
            reader.readAsDataURL(e.target.files[0]);
        } catch(err) {
            console.log(err)
            // error when close file explorer
        }   
    }

    // create new post and add in mongo
    // onClickHandlePost = async () => {
    //     this.state.loading = true;
    //     this.setState(this.state);
    //     const data = new FormData();
    //     data.append('file', this.state.file);
    //     data.append('upload_preset', 'folder_p');
    //     const res = await axios.post('https://api.cloudinary.com/v1_1/dm3pamnau/image/upload', data, {onUploadProgress: progressEvent => {
    //         console.log(`Process: ${Math.round(progressEvent.loaded / progressEvent.total) * 100}%`)
    //     }});
    //     // await axios.post(`http://localhost:8080/add/post`,
    //     //     {
    //     //         photo_url: res.data.secure_url,
    //     //         description: this.state.description
    //     //     },
    //     //     {
    //     //         headers: {
    //     //             Authorization: localStorage.getItem("user-info"),
    //     //         }
    //     //     }
    //     // );
    //     // this.state.loading = false;
    //     // this.setState(this.state);
    // }


        return (
            <>
                <Layout title="Set profile" additionalClass="layout-form-profile">


                    <div className="register-form">
                        <div className="photo-form">
                            <div className="img-profile-div"> 
                                <img className='img-profile' src={profilePhoto !=="" ? profilePhoto : profileImg} alt='Not Found'/>
                            </div> 
                            <button 
                                className="choose-photo" 
                                onClick={() => fileInput.current.click()}
                            >Choose a photo</button>
                            <input
                                type="file"
                                name="file"
                                placeholder="Upload an image"
                                // accept="audio/*,video/*,image/*"
                                accept="image/*"
                                style={{display: 'none'}}
                                onChange={uploadImage}
                                ref={fileInput}
                            />
                        </div>
                        
                        
                        <div className="left-register">
                            <div className="form-group">
                                {/* <label>First name: </label> */}
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="First Name *" 
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)} 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Last Name *" 
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)} 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Middle Name" 
                                    value={middleName}
                                    onChange={e => setMiddleName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <div className="gender">
                                    <div 
                                        className={"gender-male " + (gender==="male" ? "gender-checked" : "")} 
                                        onClick={() => {changeGender("male")}}
                                    >
                                        <img src={maleImg}/>
                                        Male
                                    </div>
                                    <div 
                                        className={"gender-female " + (gender==="female" ? "gender-checked" : "")}
                                        onClick={() => {changeGender("female")}
                                    }>
                                        <img src={femaleImg}/>
                                        Female
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    country={"ro"}
                                    countryCodeEditable={false}
                                    value={phoneNumber}
                                    onChange={setPhoneNumber}
                                />
                            </div>
                        </div>

                    {/* <div className="right-register">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="First Name *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Last Name *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control"  placeholder="Confirm Password *" value="" />
                        </div>
                    </div> */}
                    </div>
                    
                    <hr/>
                    
                    

                    <p className="layout-title">Set location</p>

                    <div className="location-div">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Address *" 
                            value={address}
                            onChange={e => setAddress(e.target.value)} 
                        />
                         </div>
                    </div>

                    <button 
                        variant="primary" 
                        type="submit"
                        className="submit-button"
                        // onClick={handleSubmit}
                    > 
                        Let's started
                    </button>  

                </Layout>


                
            </>              
        )
};

export default Register;