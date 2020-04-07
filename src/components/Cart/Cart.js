import React from 'react';

const Cart = (props) => {
    const cartData = props.cartData;
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3>This is cart portion</h3>
            <p>Subtotal: $ {cartData.updatedPrice}</p>
            <p>Tax: $ 5.00</p>
            <p>Delivery Fee: $ 2.00</p>
    <p>Total : {formatNumber(cartData.updatedPrice)+formatNumber(5.00)+formatNumber(2.00)}</p>
        </div>
    );
};

export default Cart;