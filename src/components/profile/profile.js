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


const obj = {
    name: "Andrei Iricuc",
    phone: "40745954056",
    photo: "https://www.adobe.com/express/create/profile-picture/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=2000&format=webply&optimize=medium",
    email: "andrei.seby45@gmail.com",
    description: "I like what I do!",
    address: {
        text: "Suceava, Romania",
        lt: "",
        lg: ""
    },
    schedule: [
        {start: "08:30", end: "17:30"},
        {start: "08:30", end: "17:30"},
        {start: "08:30", end: "17:30"},
        {start: "08:30", end: "17:30"},
        {start: "08:30", end: "17:30"},
        {start: "08:30", end: "17:30"},
        {start: "08:30", end: "17:30"},
    ],
    prices: {
        regular: "30",
        newLook: "80",
        modern: "50"
    },
    reviews: [
        {
            name: "Iriciuc Andrei", 
            photo: "https://res.cloudinary.com/dm3pamnau/image/upload/v1624435809/folder_p/Iriciuc_Andrei_Sebastian__3_-removebg-preview__2_-removebg-preview_1_t8gaio.png", 
            rate: 5, 
            text: "The greatest haircut that i seen in my life. Thx for good job."
        },
        {
            name: "Iriciuc Andrei", 
            photo: "https://res.cloudinary.com/dm3pamnau/image/upload/v1624435809/folder_p/Iriciuc_Andrei_Sebastian__3_-removebg-preview__2_-removebg-preview_1_t8gaio.png", 
            rate: 5, 
            text: "The greatest haircut that i seen in my life. Thx for good job."
        }
    ],
    rate: 5,
    posts: [],
    editable: true
}














const Profile = () =>  {
    const user = {url_photo:"https://scontent.fclj1-2.fna.fbcdn.net/v/t31.18172-8/963812_411054585662631_1773936117_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=jkTOi8pY6h4AX8fy_tE&_nc_oc=AQkDQpdkbj0lwOviIKIZyBVKjBzS45jdB-xDIFAghbEv1vhRCXfqURFdsGKH2B-kKfyHMS74e-_SrHKreqDPvTrO&_nc_ht=scontent.fclj1-2.fna&oh=08d41e274d9c5ca9e2e6ec826152700a&oe=60DB92E6" ,name: "Iriciuc Andrei"}
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState({});

    const [reviews, setReviews] = useState([]);
    const [rate, setRate] = useState();

    const [posts, setPosts] = useState([]);

    const [schedule, setSchedule] = useState([]);

    const [prices, setPrices] = useState([]);

    const [editAbout, setEditAbout] = useState(false);
    const [editContact, setEditContact] = useState(false);
    const [editSchadule, setEditSchadule] = useState(false);
    const [editPrices, setEditPrices] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [editable, setEditable] = useState(false);

    useEffect(() => {
        const getPosts = async() => {
            const post = await axios.get(`http://localhost:8080/myPosts`,
            {
                headers: {
                    Authorization: localStorage.getItem("user-info"),
                }
            });
            console.log(post)
            setPosts(post.data);

            setName(obj.name);
            setPhoto(obj.photo);
            setPhone(obj.phone);
            setEmail(obj.email);
            setAddress(obj.address);

            setReviews(obj.reviews);
            setRate(obj.rate);
            setSchedule(obj.schedule);
            setPrices(obj.prices);
            setEditable(obj.editable);
            // setValue(reviews.reduce((acc, el) => acc + el.rate, 0)/reviews.length);


            setLoaded(true);
        }

        getPosts();
    }, []);

    
    return (
            <div className="profile-page">
                {loaded ? 
                    <React.Fragment>

                    <TopProfile name={name} photo={photo}/>
                    <hr/>
                    <div className="content-profile">
                        <div className="about-stylist">
                            {editAbout ? 
                                <EditAbout 
                                    text={obj.description} 
                                    clickSave={(phone, mail) => {
                                        // setEditContact(false);
                                        console.log(phone, mail);
                                        console.log("click")
                                    }} 
                                    clickClose={() => setEditAbout(false)}/> : 
                                <About 
                                    editable={editable}
                                    text={obj.description} 
                                    clickEdit={() => setEditAbout(true)}/>
                            }

                            {editContact ? 
                                <EditContact 
                                    address={address}
                                    phone={phone}
                                    mail={email}
                                    clickSave={(address, phone, mail) => {
                                        // setEditContact(false);
                                        console.log(phone, mail);
                                        console.log("click")
                                    }} 
                                    clickClose={() => setEditContact(false)}/> : 
                                <Contact 
                                    address={address}
                                    phone={phone}
                                    mail={email}
                                    editable={editable}
                                    clickEdit={() => setEditContact(true)}/>
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

                            <Reviews reviews={reviews} rate={rate}/>
                            
                        </div>

                        <div className="stylit-posts">
                            <Posts posts={posts} canDelete={editable}/>
                        </div>
                    </div>
                    </React.Fragment>

                    : <p>Loading...</p>
                }
                
               
            </div>
    );
}

export default Profile;