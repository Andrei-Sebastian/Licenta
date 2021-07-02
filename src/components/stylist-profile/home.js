import React, { useEffect, useState }  from 'react';
import axios from "axios";

import LayoutStylist from '../layout-hairstylist';
import "./rightbar.css";
import Profile from '../profile/profile';



const Home = () =>  {
    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const getPosts = async() => {
            const res = await axios.get(`http://localhost:8080/home`,
            {
                headers: {
                    Authorization: localStorage.getItem("user-info"),
                }
            });
            setData(res.data);
            setLoaded(true);
        }

        getPosts();

    }, [])
      return (
        <LayoutStylist>
            {
                loaded && <Profile data={data}/>
            }
        </LayoutStylist>
    );
}

export default Home;