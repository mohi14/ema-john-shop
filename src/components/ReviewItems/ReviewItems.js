import React from 'react';
import './ReviewItems.css';

const ReviewItems = ({ product }) => {
    const { name, price, quantity, img } = product;
    return (
        <div className='review-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>{price}</small></p>
                    <p><small>{quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <button>Delete</button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItems;