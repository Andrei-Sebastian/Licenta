import React, { Component } from 'react';
import './Post.css';
import image from '../../../Images/img.png';
import image1 from '../../../Images/img1.png';
import image2 from '../../../Images/img2.png';
import image3 from '../../../Images/img3.png';
import like from '../../../Images/like.png';
import likedd from '../../../Images/liked.png';


class post extends Component {
    // state = {
    //     name: this.props.name,
    //     liked: this.props.liked,
    //     numberOfLikes: this.props.numberOfLikes
    // }

    // onClickHandle = () => {
    //     const liked = !this.state.liked;
    //     const numberOfLikes = this.state.liked ? this.state.numberOfLikes -= 1 : this.state.numberOfLikes += 1; 
    //     console.log(numberOfLikes);
    //     this.setState({liked: liked, numberOfLikes: numberOfLikes})

    // }
      

    render() {  
        return (
            <div className="post">
                <div className="aboutPost">
                    <img className="circular_image" src={image}/>
                    <a className="userName"href="https://www.w3schools.com/" target="_blank">{this.props.name}</a>
                </div>
                <div className="divImage" >
                    <img className='image' src={image} alt='Not Found'/>
                </div>
                <p className="description">Ha ha ha! This haircut looks insane </p>
                <hr/>
                <div className='likeBtn' onClick={this.onClickHandle}>
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