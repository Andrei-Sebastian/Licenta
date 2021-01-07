import React, { Component } from 'react';
import './Post.css';
import like from '../../../Images/like.png';
import likedd from '../../../Images/liked.png';


class post extends Component {
    render() {  
        return (
            <div className="post">
                <div className="aboutPost">
                    <img className="circular_image" src={this.props.profileImage}/>
                    <a className="userName"href="https://www.w3schools.com/" target="_blank">{this.props.name}</a>
                </div>
                <div className="divImage" >
                    <img className='image' src={this.props.postImage} alt='Not Found'/>
                </div>
                <p className="description">{this.props.comment ? this.props.comment : "~"} </p>
                <hr className="line"/>
                <div className='likeBtn' onClick={this.props.onClickHandle}>
                    { !this.props.liked ?
                        <img className="imageLike" src={like}></img> : <img src={likedd}></img>
                    }
                    <label className="numberOfLikes">{this.props.numberOfLikes}</label>  
                </div>
            </div>
        )
    };
};

export default post;