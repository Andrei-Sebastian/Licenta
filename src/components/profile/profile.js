import React, { useEffect, useState }  from 'react';
import CircularImage from '../CircularImage/CircularImage';
import axios from "axios";
import Posts from "../Posts/Posts";

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import * as FaIcons from 'react-icons/ai';
import * as BoxIcons from "react-icons/bi";
import Edit from "../../images/edit.png"
import PhoneInput from "react-phone-input-2";
import TimePicker from 'react-time-picker';

import "./profile.scss";
import Contact from './contact';
import EditContact from './edit-contact';
import TopProfile from './top-prfile';
import Schedule from './schedule';
import EditSchedule from './edit-schadule';
import EditPrices from './edit-prices';
import Prices from './prices';
import Reviews from './reviews';
import About from './about';
import EditAbout from './edit-about';
import AddPost from '../stylist-profile/add-post';


const obj = {
    reviews: [
        {
            name: "Iriciuc Andrei", 
            photo: "https://res.cloudinary.com/dm3pamnau/image/upload/v1624435809/folder_p/Iriciuc_Andrei_Sebastian__3_-removebg-preview__2_-removebg-preview_1_t8gaio.png", 
            rate: 5, 
            text: "The greatest haircut that i seen in my life. Thx for good job."
        },
        {
            name: "George Vasile", 
            photo: "https://res.cloudinary.com/dm3pamnau/image/upload/v1625224423/folder_p/ctrl_shift_r_hximga.jpg", 
            rate: 3, 
            text: "Was ok."
        },
        {
            name: "Sandu Ion", 
            photo: "https://res.cloudinary.com/dm3pamnau/image/upload/v1624732449/folder_p/154426303_277234057101525_2122568542774594641_n_nmyuf3.jpg", 
            rate: 4, 
            text: "Nothing new"
        },
        {
            name: "Marcu Andrei", 
            photo: "https://res.cloudinary.com/dm3pamnau/image/upload/v1622020516/folder_p/regular-user-role-removebg-preview_1_ajkkcf.png", 
            rate: 5, 
            text: "Thx for good job."
        },
        {
            name: "Iriciuc Andrei", 
            photo: "https://res.cloudinary.com/dm3pamnau/image/upload/v1624435809/folder_p/Iriciuc_Andrei_Sebastian__3_-removebg-preview__2_-removebg-preview_1_t8gaio.png", 
            rate: 4, 
            text: "The greatest haircut that i seen in my life. Thx for good job."
        },
        {
            name: "Iriciuc Andrei", 
            photo: "https://res.cloudinary.com/dm3pamnau/image/upload/v1624435809/folder_p/Iriciuc_Andrei_Sebastian__3_-removebg-preview__2_-removebg-preview_1_t8gaio.png", 
            rate: 4, 
            text: "The greatest haircut that i seen in my life. Thx for good job."
        }
    ],
    rate: 4,
}














const Profile = ({data}) =>  {    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState({});
    const [about, setAbout] = useState();

    const [reviews, setReviews] = useState([]);
    const [rate, setRate] = useState();

    const [posts, setPosts] = useState([]);

    const [schedule, setSchedule] = useState([]);

    const [prices, setPrices] = useState([]);
    const [uidStylist, setUidStylist] = useState();

    const [editAbout, setEditAbout] = useState(false);
    const [editContact, setEditContact] = useState(false);
    const [editSchadule, setEditSchadule] = useState(false);
    const [editPrices, setEditPrices] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [editable, setEditable] = useState(false);

    useEffect(() => {
        setPosts(data.posts);
        setName(data.name);
        setPhoto(data.photo);
        setPhone(data.phone);
        setEmail(data.email);
        setAddress(data.address);
        setReviews(obj.reviews);
        setRate(obj.rate);
        setAbout(data.about);
        setSchedule(data.schedule);
        setPrices(data.prices);
        setEditable(data.editable);
        setUidStylist(data.uidStylist);
        setLoaded(true);
    }, []);

    
    return (
            <div className="profile-page">
                {loaded ? 
                    <React.Fragment>

                    <TopProfile name={name} photo={photo}/>
                    
                    <hr/>
                    {!editable &&
                        <div className="btn-div">
                            <button>Follow</button>
                            <button className="btn-app" onClick={() => {window.location.href = "/takeappointment/" + uidStylist}}>Take an appointment</button>
                            <button>Leave a feedback</button>
                        </div>
                    }
                    
                    <div className="content-profile">
                        <div className="about-stylist">
                            {editAbout ? 
                                <EditAbout 
                                    text={about} 
                                    clickSave={(phone, mail) => {
                                        // setEditContact(false);
                                        console.log(phone, mail);
                                        console.log("click")
                                    }} 
                                    clickClose={() => setEditAbout(false)}/> : 
                                <About 
                                    editable={editable}
                                    text={about} 
                                    clickEdit={() => setEditAbout(true)}/>
                            }

                            {editContact ? 
                                <EditContact 
                                    address={address}
                                    phone={phone}
                                    mail={email}
                                    lt={address.lt} 
                                    lg={address.lg}
                                    clickSave={(address, phone, mail) => {
                                        // setEditContact(false);
                                        console.log(phone, mail);
                                        console.log("click")
                                    }} 
                                    clickClose={() => {setEditContact(false); console.log("here")}}/> : 
                                <Contact 
                                    lt={address.lt} 
                                    lg={address.lg}
                                    address={address}
                                    phone={phone}
                                    mail={email}
                                    editable={editable}
                                    clickEdit={() => setEditContact(true)}
                                />
                            }

                            {editSchadule ? 
                                <EditSchedule 
                                    schedule={schedule}
                                    clickSave={(schedule) => {
                                        setSchedule(schedule);
                                        setEditSchadule(false)
                                    }} 
                                    clickClose={() => setEditSchadule(false)}/> : 
                                <Schedule 
                                    schedule={schedule}
                                    editable={editable}
                                    clickEdit={() => setEditSchadule(true)}
                                />
                            }

                            {editPrices ? 
                                <EditPrices 
                                    prices={prices}
                                    clickSave={(phone, mail) => {
                                        // setEditContact(false);
                                        console.log(phone, mail);
                                        console.log("click")
                                    }} 
                                    clickClose={() => setEditPrices(false)}/> : 
                                <Prices  
                                    prices={prices}
                                    editable={editable}
                                    clickEdit={() => setEditPrices(true)}/>
                            }

                            <Reviews editable={editable} reviews={reviews} rate={rate}/>
                            
                        </div>

                        <div className="stylit-posts">
                            {(posts.length <= 0 && editable)? 
                                <AddPost/>:
                                <Posts posts={posts} canDelete={editable}/> 
                               
                            }
                            
                        </div>
                    </div>
                    </React.Fragment>

                    : <p>Loading...</p>
                }
                
               
            </div>
    );
}

export default Profile;