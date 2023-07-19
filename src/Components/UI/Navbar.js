import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Buttons from './Buttons'
import logo from '../../assets/logo.png'
import '../UI/Navbar.css'

function Navbar() {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };


    return (
        <>
            <div className="nav">
                <div className="header">
                    <div className="comp-name">
                        <img className='comp-logo' src={logo} alt="Dish" />
                        <span className='comp-name'>QUICK<span className='comp-lName'>EAT</span></span>
                    </div>

                    <div className="links">
                        <NavLink exact to="/" className="pg-links" activeClassName="active">
                            Home
                        </NavLink>
                        <NavLink to="/about" className=" pg-links" activeClassName="active">
                            About Us
                        </NavLink>
                        <NavLink
                            to="/restaurants"
                            className="pg-resta pg-links"
                            activeClassName="active"
                            onMouseEnter={handleDropdownToggle}
                            onMouseLeave={handleDropdownToggle}
                        >
                            Restaurants
                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    <NavLink to="/restaurants/restaurant_card" className="dropdown-link">
                                        Restaurant Card
                                    </NavLink>
                                    <NavLink to="/restaurants/checkout" className="dropdown-link">
                                        Checkout
                                    </NavLink>
                                </div>
                            )}

                        </NavLink>
                        <NavLink to="/pages" className="pg-links" activeClassName="active">
                            Pages
                        </NavLink>
                        <NavLink to="/contacts" className="pg-links" activeClassName="active">
                            Contacts
                        </NavLink>

                    </div>

                    <div className="nav-right">
                        <i className="bag-icon fa-solid fa-bag-shopping"></i>
                        <Buttons text='ORDER NOW' className='nav-button' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
