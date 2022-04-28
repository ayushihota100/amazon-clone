import React from 'react';
import  './Header.css'; 
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue} from "./StateProvider";
import { auth } from './firebase';





function Header() {
    const [{basket,user}, dispatch] = useStateValue();


    const handleAuthentication = () =>
    {
        if(user)
        {
            auth.signOut(); //all we need to do to signout from amazon
        }
    }

  return(
    <div className="header">
        
            <Link to="/">
            <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            
            </Link>
        
        <div className="header_search">
            <input className='header_searchInput' type="text"  />
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className="header_Nav"> 
            <Link to={ !user && '/login'}> 
                
            <div onClick={handleAuthentication} className="header_option">
                <span className='header_optionOne'>Hello</span>
                <span className='header_optionTwo'>{user ? 'Sign Out' : 'Sign In'}</span>


            </div>
            </Link>
            <div className="header_option">
            <span className='header_optionOne'>Orders and</span>
                <span className='header_optionTwo'>Returns</span>

                
            </div>
            
            <Link to="/checkout">
            <div className="header_optionBasket">
                <ShoppingBasketIcon />
                <span className='header_OptionOne header_BasketCount'>{basket?.length}</span>
            </div></Link>
           

        </div>


    </div>
  );
  }

export default Header;
