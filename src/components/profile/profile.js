import React, { useEffect, useState }  from 'react';
import axios from "axios";
import Posts from "../Posts/Posts";

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
import AddImg from "../../images/add.png";
import UnfollowImg from "../../images/unfollow.png";


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
                    
                    
                    <div className="content-profile">
                        <div className="about-stylist">
                        {!editable &&
                        <div className="btn-div">
                            <button className="btn-app" onClick={() => {window.location.href = "/takeappointment/" + uidStylist}}>Take an appointment</button>
                            {false ? <div className="div-follow-b div-follow-green">
                                <img 
                                    title="Follow"
                                    src={AddImg} 
                                    onClick={() => {
                                        // console.log(el.uid)
                                    }}
                                />
                            </div>:
                            <div className="div-follow-b div-follow-red">
                                <img 
                                    title="Unfollow"
                                    src={UnfollowImg} 
                                    onClick={() => {
                                        // console.log(el.uid)
                                    }}
                                />
                            </div>}
                        </div>
                    }
                            {editAbout ? 
                                <EditAbout 
                                    text={about} 
                                    clickSave={async (textData) => {
                                        await axios.post(`http://localhost:8080/edit`,
                                        {
                                            about: textData
                                        },
                                        {
                                            headers: {
                                                Authorization: localStorage.getItem("user-info"),
                                            }
                                        });
                                        setAbout(textData);
                                        setEditAbout(false);
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
                                    clickSave={async (phone, mail) => {
                                        await axios.post(`http://localhost:8080/edit`,
                                        {
                                            phone: phone,
                                            email: mail
                                        },
                                        {
                                            headers: {
                                                Authorization: localStorage.getItem("user-info"),
                                            }
                                        });
                                        setPhone(phone);
                                        setEmail(mail);
                                        setEditContact(false);
                                    }} 
                                    clickClose={() => setEditContact(false)}/> : 
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
                                    clickSave={async (schedule) => {
                                        await axios.post(`http://localhost:8080/edit`,
                                        {
                                            schedule: schedule
                                        },
                                        {
                                            headers: {
                                                Authorization: localStorage.getItem("user-info"),
                                            }
                                        });
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
                                    clickSave={async (price) => {
                                        await axios.post(`http://localhost:8080/edit`,
                                        {
                                            prices: price
                                        },
                                        {
                                            headers: {
                                                Authorization: localStorage.getItem("user-info"),
                                            }
                                        });
                                        setPrices(price);
                                        setEditPrices(false)
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