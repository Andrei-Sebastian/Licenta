import React, { useEffect, useState }  from 'react';
import CircularImage from '../CircularImage/CircularImage';
import axios from "axios";
import Posts from "../Posts/Posts";

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import "./profile.scss";



const Profile = () =>  {
    const user = {url_photo:"https://scontent.fclj1-2.fna.fbcdn.net/v/t31.18172-8/963812_411054585662631_1773936117_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=jkTOi8pY6h4AX8fy_tE&_nc_oc=AQkDQpdkbj0lwOviIKIZyBVKjBzS45jdB-xDIFAghbEv1vhRCXfqURFdsGKH2B-kKfyHMS74e-_SrHKreqDPvTrO&_nc_ht=scontent.fclj1-2.fna&oh=08d41e274d9c5ca9e2e6ec826152700a&oe=60DB92E6" ,name: "Iriciuc Andrei"}
    const [posts, setPosts] = useState([]);
    const [value, setValue] = React.useState(2);
    const [reviews, setReviews] = useState(
    [{name: "Iriciuc Andrei", rate: 5, text: "The greatest haircut that i seen in my life. Thx for good job."},
    {name: "VAsile as", rate: 5, text: "The greatest haircut that i seen in my life. Thx for good job."},
    {name: "VAsile as", rate: 5, text: "The greatest haircut that i seen in my life. Thx for good job."},
    {name: "VAsile as", rate: 5, text: "The greatest haircut that i seen in my life. Thx for good job."}]);

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
            setValue(reviews.reduce((acc, el) => acc + el.rate, 0)/reviews.length);
        }

        getPosts();
    }, []);

    
    return (
            <div className="profile-page">
                <div className="top-profile">
                    <div className="cover-img">
                        <div className="photo-name">
                            <div>
                                <CircularImage image={user.url_photo} style={{width: '180px', height: '180px', border: '2px solid #E0E8E8'}}/>
                            </div>
                            <h2> {user.name}</h2>
                        </div>
                        
                    </div>
                </div>
                <hr/>
                <div className="content-profile">
                    <div className="about-stylist">
                        <div className="stylist-data">
                            <div className="about-data">
                                <Typography component="legend">About</Typography>
                                <hr/>
                                <p>A gool haircut will make you another man! Call me and you will be happy, trust me!</p>
                            </div>
                        </div>

                        <div className="stylist-data">
                            <div className="about-data">
                                <Typography component="legend">Contact</Typography>
                                
                                <hr/>

                                <div className="contact-data">
                                    <p>Address:</p>
                                    <p className="contact-r">str.univ, 4321, suceava</p>
                                </div>

                                <div className="contact-data">
                                    <p>Phone:</p>
                                    <p className="contact-r">0745954056</p>
                                </div>

                                <div className="contact-data">
                                    <p>Mail:</p>
                                    <p className="contact-r">andrei.seby45@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="stylist-data">
                            <div className="about-data">
                                <Typography component="legend">Schedule</Typography>
                                <hr/>
                                <div className="contact-data">
                                    <div>
                                        <p>Monday:</p>
                                        <p>Tuesday:</p>
                                        <p>Wednesday:</p>
                                        <p>Thursday:</p>
                                        <p>Friday:</p>
                                        <p>Saturday:</p>
                                        <p>Sunday:</p>
                                    </div>

                                    <div className="contact-r">
                                        <p>08:00 - 18:00</p>
                                        <p>08:00 - 18:00</p>
                                        <p>08:00 - 18:00</p>
                                        <p>08:00 - 18:00</p>
                                        <p>08:00 - 18:00</p>
                                        <p>08:00 - 18:00</p>
                                        <p>08:00 - 18:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="stylist-data">
                            <div className="about-data">
                                <Typography component="legend">Prices:</Typography>
                                <hr/>
                                <div className="contact-data">
                                    <div>
                                        <p>Regular:</p>
                                        <p>New look:</p>
                                        <p>Modern haircut:</p>
                                    </div>

                                    <div className="contact-r">
                                        <p>30 LEI</p>
                                        <p>80 LEI</p>
                                        <p>50 LEI</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className="stylist-data">

                            {/* <Box component="fieldset" mb={3} borderColor="transparent"> */}
                            <div className="stylist-rate about-data">
                                <Typography component="legend">Reviews:</Typography>
                                <Rating name="read-only" value={value} readOnly />
                                <Typography component="legend">({value})</Typography>
                            </div>
                            <hr/>
                            <div className="all-reviews">
                            {
                                reviews.length > 0 ? reviews.map(el =>{
                                    return (
                                        <div className="review-component">
                                            <div className="review">
                                                <div className="info-review">
                                                    <CircularImage image={user.url_photo} style={{width: '30px', height: '30px', marginLeft: "10px"}}/>
                                                    <label>{el.name}</label>
                                                </div>
                                                
                                                <div className="user-review">
                                                    <Rating name="read-only" size="small"  value={el.rate} readOnly />
                                                </div>
                                                <label>({el.rate})</label>

                                                
                                            </div>
                                            {el.text && <p>{el.text}</p>}
                                        </div>
                                    );
                                }) :
                                <p>No review so far</p>
                            }
                        </div>
                        </div>
                    </div>

                    <div className="stylit-posts">
                    <Posts posts={posts} canDelete={true}/>
                    </div>
                </div>
               
            </div>
    );
}

export default Profile;