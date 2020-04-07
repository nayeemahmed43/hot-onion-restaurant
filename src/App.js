import React from 'react';
import './App.css';
import FoodItems from './components/FoodItems/FoodItems';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SingleFoodItem from './components/SingleFoodItem/SingleFoodItem';
import NotFound from './NotFound/NotFound';
import Login from './components/Login/Login';
import { AuthContextProvider, PrivateRoute } from './components/Login/useAuth';
import Shipment from './components/Shipment/Shipment';
import Inventory from './components/Inventory/Inventory';



function App() {
  return (
    <div className="App">
     <AuthContextProvider>
     
      <Router>
        <Switch>

        <Route path="/fooditems">
          <FoodItems></FoodItems>
        </Route>

        <Route path="/singlefooditem/:key">
          <SingleFoodItem></SingleFoodItem>
        </Route>
        
        <Route exact path="/">
          <FoodItems></FoodItems>
        </Route>

        <Route  path="/login">
          <Login></Login>
        </Route>
        
        <PrivateRoute path="/shipment">
          <Shipment></Shipment>
        </PrivateRoute>

        <Route  path="/Inventory">
          <Inventory></Inventory>
        </Route>
    
        <Route path="*">
          <NotFound></NotFound>
        </Route>

        </Switch>
      </Router>
      </AuthContextProvider>
    
   
    </div>
  );
}

export default App;
