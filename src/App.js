import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Payment from './Payment'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe("pk_test_51KkdnuSCjuX6V2Mbec8QvKg8rfSvuVTW7RtF3np67PYDUNOUOAg67mXoDFsw07ZB4NKyXgFLNgSjWlBkR5od4gKv00HfbUCK0D");

function App() {
  const[{}, dispatch] = useStateValue();

 useEffect(() => 
{
  //will only run once when the app component runs
  auth.onAuthStateChanged((authUser) =>
    {
      console.log('the user is ', authUser);
      if (authUser)
      {
        //the user just logged in/ the user was logged in
        dispatch(
          {
            type: 'SET_USER',
            user: authUser, //evry time they login it will  fire the event and shoot the user info into data layer
          }
        );
      }
      else{
        dispatch(
          {
            type:'SET_USER',
        user: null,
        //the user is logged out
          }
        );
       
      }
    }); //it also helps in tracking back the user on refresh once logged in!what it does is everytime anyones loggin in or loggin out it keeps a track, like listener!

}, []);

  return (
    <Router>
    <div className="app">
    
      <Switch>
      <Route path="/login">
      <Login/>
      </Route>
      
      <Route path="/checkout">
      <Header/>
      <Checkout/>
      </Route>
      <Route path="/payment">
      <Header/>
       <Elements stripe={promise}>
         <Payment/>
       </Elements>
      
      
      </Route>
        
        <Route path="/">
        <Header/>
        <Home />
        </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
