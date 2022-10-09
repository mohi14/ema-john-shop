import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();


    /*  const [products, setProducts] = useState([]);
 
     useEffect(() => {
         fetch('products.json')
             .then(res => res.json())
             .then(data => setProducts(data))
     }, []) */

    //shoring data in localstorage
    const [cart, setCart] = useState([]);
    //deleting whole cart from local storage
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    //showing data from  local storage
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])



    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        // const newCart = [...cart, selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className='oder-summery'>
                <Cart
                    cart={cart}
                    clearCart={clearCart}>

                    <Link to='/orders'><button>Review Cart</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;