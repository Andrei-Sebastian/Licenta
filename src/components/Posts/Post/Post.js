import React from 'react';
import './Post.css';
import Text from '../../LongText/LongText';
import like from '../../../images/like.png';
import liked from '../../../images/liked.png';
import Delete from '../../../images/delete.png';

const post = (props) => {
    return (
        <div className="post">
            <div className="aboutPost">
                <div>
                <img 
                    className="circular_image" 
                    alt="User profile" 
                    src={props.profileImage} 
                    loading="lazy"
                    width="300px"
                    height="300px"
                />
                <a className="userName" target="_blank" href='/welcome'>{props.name}</a>
                </div>
                
                {
                    props.canDelete && (
                        <div title="Delete this post">
                            <img className='delete-img' src={Delete} alt='Not Found' loading="lazy"/>
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