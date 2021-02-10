import React, { Component } from 'react';
import './Posts.css';
import Post from './Post/Post';
import axios from 'axios';

class posts extends Component {
    state = {posts: []}

    onClickHandle = (index) => {
        //this.state[index].likes = ! this.state[index].likes;
        this.state.posts[index].likes = parseInt(this.state.posts[index].likes) + 1;  //this.state[index].liked ?  this.state[index].numberOfLikes -= 1 :  this.state[index].numberOfLikes += 1; 
        this.setState(this.state.posts);
    }

    componentDidMount = () => {
        if (!localStorage.getItem('user-info')) {
            
        }
        let data = {
            arrayUids: [1,2,3,4,5,6]
        }
        axios.get(`http://localhost:8080/welcome`,
        {
            params : data,
            headers: {
                Authorization: localStorage.getItem("user-info"),
            }
        })
        .then(res => {
        let posts = res.data;
        console.log(posts)
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