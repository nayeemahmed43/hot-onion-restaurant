import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FoodItems from './components/FoodItems/FoodItems';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SingleFoodItem from './components/SingleFoodItem/SingleFoodItem';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Router>
        <Switch>

        <Route path="/fooditems">
          <FoodItems></FoodItems>
        </Route>

        <Route path="/singlefooditem">
          <SingleFoodItem></SingleFoodItem>
        </Route>
        
        <Route path="/">
          <FoodItems></FoodItems>
        </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
