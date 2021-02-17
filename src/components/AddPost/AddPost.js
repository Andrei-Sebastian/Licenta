import React, { Component } from 'react';
import axios from 'axios';

import './AddPost.css'

class AddPost extends Component {
    state = {
        image: '',
        loading: true
    };

    uploadImage = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'folder_p');
        const res = await axios.post('https://api.cloudinary.com/v1_1/dm3pamnau/image/upload', data);
        this.setState({image: res.data.secure_url, loading: false});
    }

    render() {
        return (
            <div className="App">
            <h1>Upload Image</h1>
            <input
                type="file"
                name="file"
                placeholder="Upload an image"
                onChange={this.uploadImage}
            />
            {this.state.loading ? (
                <h3>Loading...</h3>
            ) : (
                <img src={this.state.image} style={{ width: '300px' }} />
            )}
            </div>
        )
    }
  
}

export default AddPost;
