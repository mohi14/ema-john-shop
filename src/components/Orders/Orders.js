import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Orders = () => {
    const { products, initialCart } = useLoaderData(); //{ products: products, initialCart: initialCart }
    const [cart, setCart] = useState(initialCart);
    return (
        <div className='shop'>
            <div className='order-container'>
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                    ></ReviewItems>)
                }
            </div>
            <div className='oder-summery'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;