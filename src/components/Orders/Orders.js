import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Orders = () => {
    const { initialCart } = useLoaderData(); //{ products: products, initialCart: initialCart }
    const [cart, setCart] = useState(initialCart);

    //deleting whole cart from local storage
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div className='shop'>
            <div className='order-container'>
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItems>)
                }
                {
                    cart.length === 0 && <h2>No Items for review. Please <Link to='/'>Shop more</Link> </h2>
                }
            </div>
            <div className='oder-summery'>
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;