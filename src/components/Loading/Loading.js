import React from 'react';
import './Loading.css';

const loading = (props) => {
        return (
            <div className="loading" style={props.style}>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
};

export default loading;