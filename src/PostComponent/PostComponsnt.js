import React, { Component } from 'react';
import './PostComponent.css';
import image from '../Images/img.png';
import image1 from '../Images/img1.png';
import image2 from '../Images/img2.png';
import image3 from '../Images/img3.png';
import like from '../Images/like.png';
import likedd from '../Images/liked.png';


class postComponent extends Component {
    state = {
        img: require('../Images/img.png'),
        liked: false,
        numberOfLikes: 10000
    }

    onClickHandle = () => {
        const liked = !this.state.liked;
        const numberOfLikes = this.state.liked ? this.state.numberOfLikes -= 1 : this.state.numberOfLikes += 1; 
        console.log(numberOfLikes);
        this.setState({liked: liked, numberOfLikes: numberOfLikes})

    }
      

    render() {  
        return (
            <div className="post">
                <div className="aboutPost">
                    <img className="circular_image" src={image}/>
                    <a className="userName"href="https://www.w3schools.com/" target="_blank">Ion Vasilescu</a>
                </div>
                <div className="divImage" >
                    <img className='image' src={image} alt='Not Found'/>
                </div>
                <p className="description">Ha ha ha! This haircut looks insane </p>
                <hr/>

                <div className='likeBtn' onClick={this.onClickHandle}>
                    { !this.state.liked ?
                        <img className="imageLike" src={like}></img> : <img src={likedd}></img>
                    }
                    <label className="numberOfLikes">{this.state.numberOfLikes}</label>  
                </div>
            </div>
        )
    };
};

export default postComponent;