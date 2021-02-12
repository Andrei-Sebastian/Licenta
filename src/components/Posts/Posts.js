import React, { Component } from 'react';
import './Posts.css';
import Post from './Post/Post';
import axios from 'axios';

class posts extends Component {
    state = {posts: []};
    
    componentDidMount() {
        this.setState({posts: this.props.posts});
    }

    onClickHandle(index) {
        this.state.posts[index].liked = !this.state.posts[index].liked;
        this.state.posts[index].likes = !this.state.posts[index].liked ? this.state.posts[index].likes -= 1 : this.state.posts[index].likes += 1; 
        let params = {
            nid: this.state.posts[index].nid,
            liked: this.state.posts[index].liked
        }
         axios.post(`http://localhost:8080/like`,
            params,
            {
                headers: {
                    Authorization: localStorage.getItem("user-info"),
                }
            }
        )
        .then(() => {
            this.setState({posts: this.state.posts});
        })
        .catch((err) => {
            console.log("bad");
        });
    }

    render() {
        return (
            <div className="posts">
                {this.props.posts.map( (post, i) => (
                    <Post 
                        key={i}
                        name={post.name}
                        liked={post.liked}
                        numberOfLikes={post.likes}
                        comment={post.description}
                        profileImage={post.url_photo}
                        postImage={post.photo_url}
                        postId={post.uid}
                        onClickHandle={() => this.onClickHandle(i)}
                    />
                ))}
            </div>
        )
    }
      
};

export default posts;