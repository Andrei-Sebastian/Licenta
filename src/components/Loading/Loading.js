import React from 'react';
import './Loading.css';

const loading = () => {
        return (
            <div className="loading">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
};

export default loading;