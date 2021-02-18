import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading'
import './AddPost.css'
import { Picker } from 'emoji-mart'
import './AddPost.css'

class AddPost extends Component {
    state = {
        image: '',
        file: '',
        description: '',
        readyForPost: false,
        loading: false
    };

    uploadImage = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                this.setState({
                    image: reader.result, 
                    file: e.target.files[0],
                    description: this.state.description, 
                    readyForPost: false});
            }
        }
        reader.readAsDataURL(e.target.files[0]);
        
    }

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

    render() {
        return (
            <div className="App">
                <div className="post">
                <div className="aboutPost" style={{cursor: 'default', textAlign: 'center'}}>
                    <p>New post</p>
                </div>
                <div className="divImage" >
                    {
                        this.state.image !== '' ?  
                            <img className='image' src={this.state.image} alt='Not Found'/> : 
                            <img className='image' style={{cursor: 'pointer'}} src='https://res.cloudinary.com/dm3pamnau/image/upload/v1613636290/folder_p/select-image_wl1bfc.webp' alt='Not Found' onClick={() => this.fileInput.click()}></img>
                    }
                   
                </div>
                <div className="description">
                    <div className="form-group">
                        <textarea id="exampleFormControlTextarea1" value={this.state.description} rows="5" cols="78" style={{resize: 'none'}} onChange={(e) => {
                            this.state.description = e.target.value;
                            this.setState(this.state);
                        }}></textarea>
                        <span>
                            <Picker onSelect={this.addEmoji} />
                        </span>
                    </div>
                </div>
                <hr className="line"/>
                {this.state.loading ? <Loading/> : <button className='likeBtn' onClick={this.onClickHandlePost.bind(this)}>Post</button>}
                
            </div>
                <input
                    type="file"
                    name="file"
                    placeholder="Upload an image"
                    style={{display: 'none'}}
                    onChange={this.uploadImage}
                    ref={fileInput => this.fileInput = fileInput}
                />
            </div>
        )
    }
  
}

export default AddPost;
