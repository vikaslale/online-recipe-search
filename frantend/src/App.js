import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Food from './foodRecipe/food';
import Userv from './foodRecipe/Userv';
import Footer from './components/Footer';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


function App(){
  return (
    <>
    <div className="page-container">
      <div className="content-wrap">
    <Router>
      <Navbar />
      <Food />
         <Userv/>

      <Switch>
        <Route path='/'/>
        </Switch>
      
     </Router>
     </div>
         <Footer />
         </div>
         </>
   
  );
}

export default App;