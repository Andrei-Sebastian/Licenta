import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';
import TextArea from '../TextArea/TextArea';
import './AddPost.css';
import './Emoji.css';
import { Picker } from 'emoji-mart';
import Layout from '../layout';

class AddPost extends Component {
    state = {
        image: '',
        file: '',
        description: '',
        readyForPost: false,
        loading: false,
        showEmoji: false, 
        rows: 4,
        minRows: 4,
        maxRows: 10,
    };

    uploadImage = (e) => {
        const file = e.target.files[0] || "";
        try {
            const reader = new FileReader();
            reader.onload = () => {
                if(reader.readyState === 2){
                    this.setState({
                        image: reader.result, 
                        file: file,
                        description: this.state.description, 
                        readyForPost: false});
                }
            }
            reader.readAsDataURL(e.target.files[0]);
        } catch(err) {
            // error when close file explorer
        }   
    }

    // create new post and add in mongo
    onClickHandlePost = async () => {
        this.state.loading = true;
        this.setState(this.state);
        const data = new FormData();
        data.append('file', this.state.file);
        data.append('upload_preset', 'folder_p');
        const res = await axios.post('https://api.cloudinary.com/v1_1/dm3pamnau/image/upload', data, {onUploadProgress: progressEvent => {
            console.log(`Process: ${Math.round(progressEvent.loaded / progressEvent.total) * 100}%`)
        }});
        await axios.post(`http://localhost:8080/add/post`,
            {
                photo_url: res.data.secure_url,
                description: this.state.description
            },
            {
                headers: {
                    Authorization: localStorage.getItem("user-info"),
                }
            }
        );
        this.state.loading = false;
        this.setState(this.state);
    }

    addEmoji = e => {
        let emoji = e.native;
        this.state.description += emoji;
        this.setState(this.state);
    };
    
    clickEmojiShow = () => {
        this.state.showEmoji = !this.state.showEmoji;
        this.setState(this.state);
    }
	
	handleChange = (event) => {
		const textareaLineHeight = 24;
		const { minRows, maxRows } = this.state;
		
		const previousRows = event.target.rows;
  	    event.target.rows = minRows; // reset number of rows in textarea 
		
		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    
        if (currentRows === previousRows) {
    	    event.target.rows = currentRows;
        }
		
		if (currentRows >= maxRows) {
			event.target.rows = maxRows;
			event.target.scrollTop = event.target.scrollHeight;
		}
        this.state.description = event.target.value;
        this.state.rows = currentRows < maxRows ? currentRows : maxRows;
  	    this.setState(this.state);
	};

    render() {
        if (localStorage.getItem('user-info') === null) {
            return  <Redirect to='/login' />
        }
        return (
            <Layout>
                {/* <Navbar/> */}
                <div className="newPost">
                    <div className="post">
                        <div className="new-post-title">
                            <p>New post</p>
                        </div>
                        {this.state.image !== '' ? 
                            <div> 
                                <img className='image' src={this.state.image} alt='Not Found'/>
                                <button className="choose-photo-button" onClick={() => this.fileInput.click()}>Choose another photo</button>
                            </div> : 
                            <img className='image' style={{cursor: 'pointer'}} src='https://res.cloudinary.com/dm3pamnau/image/upload/v1613636290/folder_p/select-image_wl1bfc.webp' alt='Not Found' onClick={() => this.fileInput.click()}></img>
                        }
                        <div className="description">
                                {this.state.showEmoji ? <span><Picker onSelect={this.addEmoji}/></span> : null}
                                <img className='show-emoji-icon' src="https://cdn4.iconfinder.com/data/icons/users-29/32/165-01-512.png" onClick={this.clickEmojiShow.bind(this)}></img>
                                <img className='show-emoji-icon' src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/text-uppercase-512.png" onClick={this.clickEmojiShow.bind(this)}></img>
                                <TextArea 
                                    description={this.state.description}
                                    rows={this.state.rows}
                                    onChange={(e)=>this.handleChange(e)}
                                />
                        </div>
                        <hr className="line"/>
                        {this.state.loading ? <Loading/> : <button className='upload-post-button' disabled={this.state.image === ''} onClick={this.onClickHandlePost.bind(this)}>UPLOAD</button>}
                    
                    </div>
                    <input
                        type="file"
                        name="file"
                        placeholder="Upload an image"
                        // accept="audio/*,video/*,image/*"
                        accept="image/*"
                        style={{display: 'none'}}
                        onChange={(e)=>{this.uploadImage(e)}}
                        ref={fileInput => this.fileInput = fileInput}
                    />
                </div>
            </Layout>
        );
    }  
}

export default AddPost;
