import React, { useEffect, useState }  from 'react';
import LayoutStylist from '../layout-hairstylist';
import axios from "axios";
import Posts from '../Posts/Posts';


const MyPosts = () =>  {
    const [posts, setPosts] = useState([]);

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
        }

        getPosts();
    }, []);

      return (
        <LayoutStylist>
            <div className="my-schadule">
                <Posts posts={posts} canDelete={true}/>
            </div>
            
        </LayoutStylist>
    );
}

export default MyPosts;