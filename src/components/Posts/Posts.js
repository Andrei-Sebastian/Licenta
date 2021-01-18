import React, { Component } from 'react';
import './Posts.css';
import Post from './Post/Post';
import image from '../../Images/img.png';
import image1 from '../../Images/img1.png';
import image2 from '../../Images/img2.png';
import image3 from '../../Images/img3.png';

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
    onClickHandle = (index) => {
        data[index].liked = !data[index].liked;
        data[index].numberOfLikes = !data[index].liked ? data[index].numberOfLikes -= 1 : data[index].numberOfLikes += 1; 
        this.setState(data);
    }

    render() { 
        return (
            <div className="posts">
                {data.map( (post, i) => (
                    <Post 
                        key={i}
                        name={post.name}
                        liked={post.liked}
                        numberOfLikes={post.numberOfLikes}
                        comment={post.comment}
                        profileImage={post.profileImage}
                        postImage={post.postImage}
                        onClickHandle={() => this.onClickHandle(i)}
                    />
                ))}
            </div>
        )
    };
};

export default posts;