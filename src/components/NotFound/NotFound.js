// all necessary file imported
import React from 'react';
import img from '../NotFound/notFound.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={img} alt="" />
            <h3>Please try agin. <span>Page Not Found !!</span> </h3>
        </div>
    );
};

export default NotFound;