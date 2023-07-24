import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Buttons from './Buttons'
import logo from '../../assets/logo.png'
import '../UI/Navbar.css'
import checkImg from '../../assets/cafe-1.jpg'

function Navbar() {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };

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
                        <i className="bag-icon fa-solid fa-bag-shopping" onClick={handleSidebarToggle}></i>
                        <Buttons text='ORDER NOW' className='nav-button' />
                    </div>
                </div>
            </div>

            {isSidebarOpen && (

                <div className="sidebar open">
                    <div className="sidebar-header">
                        <h2 className='side-heading'>My Orders</h2>
                        <i className="cross-icon fa-solid fa-times" onClick={handleSidebarToggle}></i>
                    </div>
                    <div className="sidebar-content">
                        <div className="side-rest">
                            <img src={checkImg} alt="" className="side-img" />
                            <h6 className="side-rest-head">Kennigton Lane Cafe</h6>
                        </div>
                        
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
