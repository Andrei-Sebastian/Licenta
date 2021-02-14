import React from 'react';
import './Post.css';
import Text from '../../LongText/LongText';
import like from '../../../Images/like.png';
import likedd from '../../../Images/liked.png';


const post = (props) => {
        return (
            <div className="post">
                <div className="aboutPost">
                    <img className="circular_image" src={props.profileImage}/>
                    <a className="userName" target="_blank">{props.name}</a>
                </div>
                <div className="divImage" >
                    <img className='image' src={props.postImage} alt='Not Found'/>
                </div>
                <div className="description">
                    <Text text={props.comment} maxLength={150}/>
                </div>
                <hr className="line"/>
                <div className='likeBtn' onClick={props.onClickHandle}>
                    { !props.liked ?
                        <img className="imageLike" src={like}></img> : <img src={likedd}></img>
                    }
                    <label className="numberOfLikes">{props.numberOfLikes}</label>  
                </div>
            </div>
        )
};

export default post;