import React, { useState } from 'react';
import foodInfo from '../../fakeData/foodInfo';
import  './FoodItems.css';

const FoodItems = () => {
    const [food,setFood] = useState(foodInfo.filter(i=>i.category === 'lunch'))
    console.log(food);

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
            <div className="d-flex justify-content-center">
                <button onClick={breakfastHandler} className="btn btn-secondary"><b>Breakfast</b></button>
                <button onClick={lunchHandler} className="btn btn-secondary active" aria-pressed="true"><b>Lunch</b></button>
                <button onClick={dinnerHandler} className="btn btn-secondary"><b>Dinner</b></button>
            </div>

            <div className="row">
                {food.map((item, i) => (
                    <div className="card col-md-4" key={i}>
                        <img 
                                style={{height: "200px", width: 'auto'}} 
                                className="img-thumbnail"
                                src={item.image} 
                                alt={item.name} 
                            />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.title}</p>
                            <h3 className="card-text">$ {item.price}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        

        
    )};

export default FoodItems;