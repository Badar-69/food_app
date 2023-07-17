import React from 'react';
import { NavLink } from 'react-router-dom';
import Buttons from './Buttons'
import logo from '../../assets/logo.png'
import '../UI/Navbar.css'

function Navbar() {
    return (
        <>
            <div className="nav">
                <div className="header">
                    <div className="comp-name">
                        <img className='comp-logo' src={logo} alt="Dish" />
                        <span className='comp-name'>QUICK<span className='comp-lName'>EAT</span></span>
                    </div>

                    <div className="links">
                        {/* <a href="/" className="pg-links">Home</a>
                        <a href="/" className="pg-links">About Us</a>
                        <a href="/" className="pg-links">Restaurants</a>
                        <a href="/" className="pg-links">Pages</a>
                        <a href="/" className="pg-links">Contacts</a> */}

                        <NavLink exact to="/" className="pg-links" activeClassName="active">
                            Home
                        </NavLink>
                        <NavLink to="/about" className="pg-links" activeClassName="active">
                            About Us
                        </NavLink>
                        <NavLink to="/restaurants" className="pg-links" activeClassName="active">
                            Restaurants
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
