import React from 'react';
import './Product.css'
const Product = (props) => {
    const { addToCart } = props;
    const { name, seller, ratings, img, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p className='price'>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button className='btn' onClick={addToCart}><p>Add to Cart</p></button>
        </div>


    );
};

export default Product;