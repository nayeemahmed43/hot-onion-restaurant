import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cartData = props.cartData;
  
    const formatNumber = num => {
        const precision =  num.toFixed(2);
        return Number(precision);
    }
    const subTotal = formatNumber(cartData.updatedPrice);

    return (
        <div className="cart">
            <h3 style={{marginRight: "40%"}}>CART</h3>
            <p style={{marginRight: "30%"}} >Subtotal: $ {subTotal}</p>
            <p style={{marginRight: "30%"}} >Tax: $ 5.00</p>
            <p style={{marginRight: "30%"}} >Delivery Fee: $ 2.00</p>
            <p style={{marginRight: "30%"}} ><b>Total : $ {formatNumber(subTotal+formatNumber(5.00)+formatNumber(2.00))}</b></p> 
        </div>
    );
};

export default Cart;