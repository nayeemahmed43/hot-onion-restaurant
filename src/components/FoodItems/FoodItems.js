import React, { useState, useEffect } from 'react';
import logo2 from '../../fakeData/logo2.png';
import path1 from '../../fakeData/ICON/Path 1.png';
import bannerbackground from '../../fakeData/bannerbackground.png'
import  './FoodItems.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const FoodItems = () => {
    const auth = useAuth();
    const [products,setProducts] = useState([]);
    const [food,setFood] = useState([]);
    const foodInfo = products;
    
    useEffect(() =>{
        fetch('https://arcane-ocean-37462.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => {
            console.log('data from database',data)
            setProducts(data);
            setFood(data.filter(i => i.category === 'lunch'))
        })
    },[])

        
        
    const breakfastHandler = () => {
        const breakfast = foodInfo.filter(i=>i.category === 'breakfast');
        setFood([...breakfast]);
    }
    const lunchHandler = () => {
        const lunch = foodInfo.filter(i=>i.category === 'lunch');
        setFood([...lunch]);
    }
    const dinnerHandler = () => {
        const dinner = foodInfo.filter(i=>i.category === 'dinner');
        setFood([...dinner]);      
    }

    return (
        <div className="container">

            <nav className="navbar navbar-light bg-light">
                <img src={logo2} width="200" className="d-inline-block align-top" alt="" />

                <div className="nav">
                    <img src={path1} alt=""/>
                    {auth.user ? <button className="logButton" onClick={auth.signOut}>log out</button> :  <Link to="/login"><button className="logButton">log in</button></Link> }  
                    <button id="signupButton">Sign up</button>
                </div>
            </nav>
            
            <div>
                <img id="banner" src={bannerbackground} alt=""/>
            </div>
            

            <div className="d-flex justify-content-center">
                <button onClick={breakfastHandler} className="btn btn-secondary"><b>Breakfast</b></button>
                <button onClick={lunchHandler} className="btn btn-secondary active" aria-pressed="true"><b>Lunch</b></button>
                <button onClick={dinnerHandler} className="btn btn-secondary"><b>Dinner</b></button>
            </div>

            <div className="row">
                
                {food.length !==0 ? food.map((item, i) => (
                        <div className="card col-md-4" key={i}>
                            <img 
                                    style={{height: "250px", width: 'auto'}} 
                                    className="img-thumbnail"
                                    src={item.image} 
                                    alt={item.name} 
                                />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.title}</p>
                                <h3 className="card-text">$ {item.price}</h3>
                                <Link to={"/singlefooditem/"+ item.id}>
                                    <button className="btn btn-info">Details</button>
                                </Link>
                            </div>
                        </div>
                    )) : <h3 style={{margin:"auto"}}>Loading...</h3>}
            </div>
        </div>   
    ) };

export default FoodItems;