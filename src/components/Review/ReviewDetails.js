import React from 'react';
import './ReviewDetails.css'

const ReviewsDetails = ({ item }) => {
    console.log(item);
    const { Ratting, name, Comment } = item;

    return (
        <div className='review-content'>
            <h3>{name}</h3>
            <span>Ratting: {Ratting} </span>
            <p>Comment: {Comment}</p>
        </div>
    );
};

export default ReviewsDetails;