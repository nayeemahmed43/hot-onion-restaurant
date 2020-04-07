import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GoPlus, GoDash } from "react-icons/go";
import './SingleFoodItem.css';


    

const SingleFoodItem = () => {
    const [product,setProduct] = useState(null);
    useEffect(() => {
        fetch('https://arcane-ocean-37462.herokuapp.com/singlefooditem/'+key)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })

    },[])

    const [count, setCount] = useState(1);
    const {key} = useParams();
    if(product !== null){
        var price = parseFloat(product.price)
        var updatedPrice = price* count;
        localStorage.setItem("id", JSON.stringify({product,updatedPrice}));
    }

    return (
        <div className="container ">
            {product ? <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <h3>$ {updatedPrice}</h3> 

                    <div className="input-group number-spinner d-flex align-items-center">
                    <button onClick={() => (count !== 1) ? setCount(count-1) : count} className="btn btn-dark"><GoDash /></button>
                    <h3 style={{"padding":"0px 10px 0px 10px"}}> {count} </h3>
                    <button onClick={() => setCount(count+1)} className="btn btn-dark"><GoPlus /></button>
                    </div>
                        <Link to="/shipment">
                        <button className="btn btn-primary"> Add To Cart</button>
                        </Link>
                </div>
                <div className="col-md-6">
                    <img src={product.image} alt="" style={{width: "80%"}}/>            
                </div>
            </div> : <h3>Loading...</h3>}
        </div>
        
    );
};

export default SingleFoodItem;