import React from 'react';
import './Home.css';
import Product from './Product.js';
import scrunchies from './images/scr1img.png';
import scr from "./images/scrunchies1.jpg";
import slider from "./images/slider.jpg";


const Home = () => {
  return (
    <div className='home'>
        <div className="home_container">
            <img className='home_image' src={slider} alt="img" />
        <div className="home_row">
            <Product
            id ="1"
            title="the book"
            price ={29.99}
            image={scrunchies} alt="book "
            rating={5} 
            />
            <Product
            id="2"
            title="the book"
            price ={29.99}
            image={scr} alt="book "
            rating={5}/>
            <Product
            id="3"
        title="the book"
        price ={29.99}
        image={scr} alt="book "
        rating={5}/>
        <Product
        id="4"
        title="the book"
        price ={29.99}
        image={scrunchies} alt="book "
        rating={5}/>
            
           
            </div>
        <div className="home_row">
        <Product
        id="5"
        title="the book"
        price ={29.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="book "
        rating={5}/>
        <Product
        id="6"
        title="the book"
        price ={29.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="book "
        rating={5}/>
        <Product
        id="7"
        title="the book"
        price ={29.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="book "
        rating={5}/>

        </div>
        <div className="home_row">
        <Product
        id="8"
        title="the book"
        price ={29.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="book "
        rating={5}/>
        <Product
        id="9"
        title="the book"
        price ={29.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="book "
        rating={5}/>
        </div>
        </div>
     </div>
  )
}

export default Home