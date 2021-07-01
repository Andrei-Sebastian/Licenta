import React, { useEffect, useState }  from 'react';
import axios from "axios";

import Layout from '../layout';
import Profile from '../profile/profile';



const ProfileStylist = () =>  {
    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const getPosts = async() => {
            let uid = window.location.href.split("/")[window.location.href.split("/").length - 1];
            console.log(uid, "hereeeeeeeee")
            let params = {uid: uid};
            try {
                const res = await axios.get(`http://localhost:8080/profile`,
                {
                    params: {
                        uid: uid
                    },
                    
                    headers: {
                        Authorization: localStorage.getItem("user-info"),
                    }
                });
                setData(res.data);
                setLoaded(true);
            } catch (e) {
                window.location.href = "/welcome";
            }
           
        }

        getPosts();

    }, [])
      return (
        <Layout>
            <div style={{marginTop: "70px"}}>
                {loaded && <Profile data={data}/>} 
            </div>
            
        </Layout>
    );
}

export default ProfileStylist;