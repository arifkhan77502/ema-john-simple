import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    // let totalPrice = 0;
    // for(let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     totalPrice += product.price;
    // }

    let shipping = 0;
    if(totalPrice > 35) {
        shipping = 0;
    }
    else if(totalPrice > 15) {
        shipping = 4.99;
    }
    else if(totalPrice > 0) {
        shipping = 12.99;
    }

    const tax = totalPrice / 10;
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);


    const formatNumber = num => {
        const precesion = num.toFixed(2);
        return Number(precesion);
    }
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(totalPrice)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p><small>Tax + Vat : {formatNumber(tax)}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;