import React, { useState } from 'react';
import axios from "axios";

import './Post.css';

import Text from '../../LongText/LongText';
import like from '../../../images/like.png';
import liked from '../../../images/liked.png';
import Delete from '../../../images/delete.png';
import profileImage from '../../../images/profile.png';
import Dialog from "../../dialog/dialog"

const Post = (props) => {
    const [dialog, setDialog] = useState(false);
    return (
        <div className="post">
            <Dialog 
                    show={dialog} 
                    title="Do you want to delete this post?"
                    clickClose={setDialog} 
                    clickAccept={async () => {
                        console.log("here",  props.nid)
                        let params = {
                            nid: props.nid
                        }
                        await axios.post(`http://localhost:8080/deletePost`,
                            params,
                            {
                                headers: {
                                    Authorization: localStorage.getItem("user-info"),
                                }
                            }
                        );
                        window.location.reload();
                    }}
                />
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
                        <div title="Delete this post" onClick={() => setDialog(true)}>
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

export default Post;