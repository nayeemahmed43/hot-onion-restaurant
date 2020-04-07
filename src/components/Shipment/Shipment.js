import React, { useState } from 'react';
import './Shipment.css';
import { useForm} from 'react-hook-form';
import { useAuth } from '../Login/useAuth';
import Cart from '../Cart/Cart';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { clearLocalShoppingCart } from '../../utilities/databaseManager';

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();
    const [shipInfo, setShipInfo] = useState(null);
    const [orderId, setOrderId] = useState(null);
    const auth = useAuth();

    const cartData = JSON.parse(localStorage.getItem("id"))
    console.log(cartData);
    const stripePromise = loadStripe('pk_test_rFGZ5SVmq1jmDLoH9TNKeG5C00gtdXy9q4');

    const onSubmit = data => { 
      setShipInfo(data);
      
    }
    
    const handlePlaceOrder = (payment) =>{
      const orderDetail = {email:auth.user.email, cart: cartData.product, shipment: shipInfo, payment: payment};
      fetch('https://arcane-ocean-37462.herokuapp.com/placeOrder',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetail)
      })
      .then(res => res.json())
      .then(order => {
        setOrderId(order._id);
        clearLocalShoppingCart()
       
      })
    }
    
    
  return (
    <div className="container">
      <div className="row">

        <div style={{display: shipInfo && 'none'}} className="col-md-6">
          <h3>Shipment Information</h3>
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

            <input name="name" className="form-control" defaultValue={auth.user.name} ref={register({ required: true })} placeholder="Your Name" />
            {errors.name && <span className="error">Name is required</span>}<br/>

            <input name="email" className="form-control" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="Your Email" />
            {errors.email && <span className="error">Email is required</span>}<br/>

            <input name="Address" className="form-control" ref={register({ required: true })} placeholder="Address" />
            {errors.Address && <span className="error">Address is required</span>}<br/>

            <input name="city" className="form-control" ref={register({ required: true })} placeholder="City" />
            {errors.city && <span className="error">city is required</span>}<br/>

            <input name="country" className="form-control" ref={register({ required: true })} placeholder="Country"/>
            {errors.country && <span className="error">country is required</span>}<br/>

            <input name="zipcode" className="form-control" ref={register({ required: true })} placeholder="Zip Code"/>
            {errors.zipcode && <span className="error">Zipcode is required</span>}<br/>

            <button className="btn btn-primary form-control" type="submit">Submit</button>
            </form>
        </div>


        <div  className="col-md-6">
          <Cart cartData={cartData}></Cart>

          <div style={{marginTop: '200px', display: shipInfo ? 'block' : 'none'}}>
          <h3>Payment Information</h3>
          <Elements stripe={stripePromise}>
              <CheckoutForm handlePlaceOrder={handlePlaceOrder}></CheckoutForm>
          </Elements>
          <br/>
          {
            orderId && <div>
              <h3>Thank you for shopping with us</h3>
          <p>Your Order Id is: {orderId}</p>
            </div>
          }
          </div>
        </div>
      </div>
    </div>
    
    
  )
};
export default Shipment;