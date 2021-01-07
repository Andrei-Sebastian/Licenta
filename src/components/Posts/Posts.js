import React, { Component } from 'react';
import './Posts.css';
import Post from './Post/Post';

const data = [
    {name: "Alexandru Ion", liked: true, numberOfLikes: 47},
    {name: "Andrei Vasilescu", liked: false, numberOfLikes: 5},
    {name: "George Ion", liked: true, numberOfLikes: 10},
];

class posts extends Component {
    render() {  
        return (
            <div className="posts">
            {data.map( (post, i) => (
                <Post 
                key={i}
                name={post.name}
                liked={post.liked}
                numberOfLikes={post.numberOfLikes}
                // less={() => props.ingredientRemoved(ctrl.type)}
                />
            ))}
        </div>
        )
    };
};

export default posts;