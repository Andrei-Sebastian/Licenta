import React, { Component } from 'react';
import './Posts.css';
import Post from './Post/Post';
import image from '../../Images/img.png';
import image1 from '../../Images/img1.png';
import image2 from '../../Images/img2.png';
import image3 from '../../Images/img3.png';
import axios from 'axios';



const data = [
    {
        name: "Alexandru Ion",
        profileImage: image,
        postImage: image2,
        liked: true,
        numberOfLikes: 47,
        comment: "Ha ha ha! This haircut looks insane"
    },
    {
        name: "Andrei Vasilescu", 
        profileImage: image1, 
        postImage: image, 
        liked: false, 
        numberOfLikes: 5
    },
    {
        name: "George Ion", 
        profileImage: image, 
        postImage: image3, 
        liked: true, 
        numberOfLikes: 100000000
    },
    {
        name: "Alexandru Ion",
        profileImage: image,
        postImage: image2,
        liked: true,
        numberOfLikes: 47,
        comment: "Ha ha ha! This haircut looks insane"
    },
    {
        name: "Andrei Vasilescu", 
        profileImage: image1, 
        postImage: image, 
        liked: false, 
        numberOfLikes: 5
    },
    {
        name: "George Ion", 
        profileImage: image, 
        postImage: image3, 
        liked: true, 
        numberOfLikes: 100000000
    },{
        name: "Alexandru Ion",
        profileImage: image,
        postImage: image2,
        liked: true,
        numberOfLikes: 47,
        comment: "Ha ha ha! This haircut looks insane"
    },
    {
        name: "Andrei Vasilescu", 
        profileImage: image1, 
        postImage: image, 
        liked: false, 
        numberOfLikes: 5
    },
    {
        name: "George Ion", 
        profileImage: image, 
        postImage: image3, 
        liked: true, 
        numberOfLikes: 100000000
    },{
        name: "Alexandru Ion",
        profileImage: image,
        postImage: image2,
        liked: true,
        numberOfLikes: 47,
        comment: "Ha ha ha! This haircut looks insane"
    },
    {
        name: "Andrei Vasilescu", 
        profileImage: image1, 
        postImage: image, 
        liked: false, 
        numberOfLikes: 5
    },
    {
        name: "George Ion", 
        profileImage: image, 
        postImage: image3, 
        liked: true, 
        numberOfLikes: 100000000
    },{
        name: "Alexandru Ion",
        profileImage: image,
        postImage: image2,
        liked: true,
        numberOfLikes: 47,
        comment: "Ha ha ha! This haircut looks insane"
    },
    {
        name: "Andrei Vasilescu", 
        profileImage: image1, 
        postImage: image, 
        liked: false, 
        numberOfLikes: 5
    },
    {
        name: "George Ion", 
        profileImage: image, 
        postImage: image3, 
        liked: true, 
        numberOfLikes: 100000000
    },
];


class posts extends Component {
    state = {posts: []}

    onClickHandle = (index) => {
        //this.state[index].likes = ! this.state[index].likes;
        this.state.posts[index].likes = parseInt(this.state.posts[index].likes) + 1;  //this.state[index].liked ?  this.state[index].numberOfLikes -= 1 :  this.state[index].numberOfLikes += 1; 
        this.setState(this.state.posts);
    }

    componentDidMount = () => {
        axios.get(`http://localhost:3000/get/allPost`)
        .then(res => {
        let posts = res.data;
        this.setState({posts});
        });

    }
    
    render() { 
        console.log(this.state)
        return (
            <div className="posts">
                {this.state.posts.map( (post, i) => (
                    <Post 
                        key={i}
                        name="asf"
                        liked={false}
                        numberOfLikes={post.likes}
                        comment={post.description}
                        profileImage={post.photo_url}
                        postImage={post.photo_url}
                        onClickHandle={() => this.onClickHandle(i)}
                    />
                ))}
            </div>
        )
    };
};

export default posts;