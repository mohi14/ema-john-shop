import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, clearCart, children } = props;
    let totalCost = 0;
    let shippingCost = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        totalCost = product.price * product.quantity + totalCost;
        shippingCost = product.shipping + shippingCost;
    }
    const tax = parseFloat((totalCost * 0.1).toFixed(2));
    const grandTotal = (totalCost + shippingCost + tax).toFixed(2);
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {quantity} </p>
            <p>Total Price: ${totalCost} </p>
            <p>Shipping Charge: ${shippingCost}</p>
            <p>Tax: $ {tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;