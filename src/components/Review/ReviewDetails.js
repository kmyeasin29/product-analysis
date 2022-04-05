import React from 'react';
import './ReviewDetails.css'

const ReviewsDetails = ({ item }) => {
    console.log(item);
    const { Ratting, name, Comment } = item;

    return (
        <div className='review-content'>
            <h4>{name}</h4>
            <span> {Ratting} </span>
            <p>{Comment}</p>
        </div>
    );
};

export default ReviewsDetails;