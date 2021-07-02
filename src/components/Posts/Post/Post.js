import React from 'react';
import './Post.css';
import Text from '../../LongText/LongText';
import like from '../../../images/like.png';
import liked from '../../../images/liked.png';
import Delete from '../../../images/delete.png';
import profileImage from '../../../images/profile.png';

const post = (props) => {
    return (
        <div className="post">
            <div className="aboutPost">
                <div className="flex" onClick={!props.canDelete && props.onClickProfile}>
                    <img 
                        className="circular_image" 
                        alt="User profile" 
                        src={props.profileImage ? props.profileImage : profileImage} 
                        loading="lazy"
                        width="300px"
                        height="300px"
                    />
                    <p className="userName" >{props.name}</p>
                </div>
                
                {
                    props.canDelete && (
                        <div title="Delete this post" onClick={props.clickDelete}>
                            <img className='delete-img' src={Delete} alt='Not Found' loading="lazy" />
                        </div>
                    )
                }
            </div>
            <div className="divImage" >
                {
                    props.postImage ?  <img className='image' src={props.postImage} alt='Not Found' loading="lazy"/> : null
                }
                
            </div>
            <div className="description">
                <Text text={props.comment} maxLength={150} style ={{whiteSpace: 'pre-line'}}/>
            </div>
            <hr className="line"/>
            <div className='likeBtn' onClick={props.onClickHandle}>
                { !props.liked ?
                    <img
                        src={like} 
                        alt="Like"
                        width="32px"
                        height="32px"
                        loading="lazy"
                    /> :
                    <img 
                        src={liked} 
                        alt="Liked" 
                        width="32px"
                        height="32px"
                        loading="lazy"
                    />
                }
                <label className="numberOfLikes">{props.numberOfLikes}</label>  
            </div>
        </div>
    )
};

export default post;