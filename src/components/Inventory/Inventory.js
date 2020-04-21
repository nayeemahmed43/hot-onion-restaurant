import React from 'react';
//import foodInfo from '../../fakeData/foodInfo';
const Inventory = () => {
    const handleAddInventory = () => {
        // this part is used to load data into Database from fake data file(only for admin)
            // const product = foodInfo[0];
            // console.log('before post', foodInfo.length);
            // fetch('http://localhost:4200/addFood',{
            //     method: 'POST',
            //     headers:{
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(foodInfo)
            // })
            // .then(res => res.json())
            // .then(data => {
            //     console.log('post successful', data);
            // })
    }
    return (
        <div>
            <h1>Add Inventory to sell more...</h1>
            <button className="btn btn-warning" onClick={handleAddInventory}>Add Inventory</button>
        </div>
    );
};

export default Inventory;