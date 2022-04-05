import React from 'react';

const ReviewsDetails = ({ item }) => {
    console.log(item);
    const { Ratting, name, Comment } = item;

    return (
        <div>
            <p>{name}</p>
            <span> {Ratting} </span>
            <p>{Comment}</p>
        </div>
    );
};

export default ReviewsDetails;