import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAppContext } from '../../Context/Context';
import { useCartContext } from '../../Context/Contextcheck';
import Buttons from './Buttons'
import logo from '../../assets/logo.png'
import '../UI/Navbar.css'
import checkImg from '../../assets/cafe-1.jpg'

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const { sidebarDishes, setSidebarDishes } = useAppContext();

    const { addToCart } = useCartContext();

    const handleCheckout = () => {
        addToCart(sidebarDishes); // Add items in the sidebar to the cart
        setSidebarDishes([]); // Clear the sidebar by updating its state
    };

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const [isPagesDropdownOpen, setPagesDropdownOpen] = useState(false);
    const handlePagesDropdownToggle = () => {
        setPagesDropdownOpen(!isPagesDropdownOpen);
    };

    // Adding price
    const calculateTotalPrice = () => {
        const totalPrice = sidebarDishes.reduce((acc, dish) => acc + Number(dish.price), 0);
        return totalPrice.toFixed(2); // Round to two decimal places
    };

    return (
        <>
            <div className="navbar-container">
                <div className="background-image">
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
                                <Link
                                    to=''
                                    className="pg-resta pg-links"
                                    onMouseEnter={handleDropdownToggle}
                                    onMouseLeave={handleDropdownToggle}
                                >
                                    Restaurants
                                    {isDropdownOpen && (
                                        (
                                            <div className="dropdown-menu">
                                                <NavLink to="/restaurants"
                                                    className="dropdown-link">
                                                    Restaurants
                                                </NavLink>

                                                <NavLink to="/restaurants/restaurant_card" className="dropdown-link">
                                                    Restaurant Card
                                                </NavLink>
                                                <NavLink to="/restaurants/checkout"
                                                    className="dropdown-link">
                                                    Checkout
                                                </NavLink>
                                            </div>
                                        )
                                    )}

                                </Link>

                                <Link
                                    to=''
                                    className="pg-pages pg-links"
                                    onMouseEnter={handlePagesDropdownToggle}
                                    onMouseLeave={handlePagesDropdownToggle}
                                >
                                    Pages
                                    {isPagesDropdownOpen && (
                                        <div className="dropdown-list">
                                            <NavLink to="/pages/blog" className="dropdown-link-item">
                                                Blog
                                            </NavLink>
                                            <NavLink to="/pages/single_blog" className="dropdown-link-item">
                                                Single Blog
                                            </NavLink>
                                            <NavLink to="/pages/services" className="dropdown-link-item">
                                                Serivces
                                            </NavLink>
                                            <NavLink to="/pages/faq" className="dropdown-link-item">
                                                FAQ
                                            </NavLink>
                                            <NavLink to="/pages/pricing_table" className="dropdown-link-item">
                                                Pricing Table
                                            </NavLink>
                                            <NavLink to="/pages/become_a_partner" className="dropdown-link-item">
                                                Become a Partner
                                            </NavLink>
                                            <NavLink to="/pages/404" className="dropdown-link-item">
                                                404
                                            </NavLink>
                                        </div>
                                    )}
                                </Link>
                                <NavLink to="/contacts" className="pg-links" activeClassName="active">
                                    Contacts
                                </NavLink>

                            </div>

                            <div className="nav-right">
                                <div className="icon-box">
                                    <i className="bag-icon fa-solid fa-bag-shopping" onClick={handleSidebarToggle}></i>
                                </div>
                                <i className={`mobile-menu-icon fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} onClick={handleMobileMenuToggle}></i>
                                <Buttons text='ORDER NOW' className='nav-button' />
                            </div>
                        </div>
                    </div>

                    {isMobileMenuOpen && (
                        <div className="mobile-menu">
                            <NavLink exact to="/" className="mob-links" activeClassName="active">
                                Home
                            </NavLink>
                            <NavLink to="/about" className="mob-links" activeClassName="active">
                                About Us
                            </NavLink>
                            <NavLink to="/restaurants"
                                className="mob-links dropdown-link">
                                Restaurants
                            </NavLink>

                            <NavLink to="/restaurants/restaurant_card" className="mob-links dropdown-link">
                                Restaurant Card
                            </NavLink>
                            <NavLink to="/restaurants/checkout"
                                className="mob-links dropdown-link">
                                Checkout
                            </NavLink>
                            <NavLink to="/pages/blog" className="mob-links dropdown-link-item">
                                Blog
                            </NavLink>
                            <NavLink to="/pages/single_blog" className="mob-links dropdown-link-item">
                                Single Blog
                            </NavLink>
                            <NavLink to="/pages/services" className="mob-links dropdown-link-item">
                                Serivces
                            </NavLink>
                            <NavLink to="/pages/faq" className="mob-links dropdown-link-item">
                                FAQ
                            </NavLink>
                            <NavLink to="/pages/pricing_table" className="mob-links dropdown-link-item">
                                Pricing Table
                            </NavLink>
                            <NavLink to="/pages/become_a_partner" className="mob-links dropdown-link-item">
                                Become a Partner
                            </NavLink>
                            <NavLink to="/pages/404" className="mob-links dropdown-link-item">
                                404
                            </NavLink>
                            <NavLink to="/contacts" className="mob-links" activeClassName="active">
                                Contacts
                            </NavLink>
                        </div>
                    )}

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
                                {sidebarDishes.map((dish, index) => (
                                    <div className="side-item" key={index}>
                                        <div className="item-details">
                                            <img src={dish.image} alt="" className="item-img" />
                                            <h6 className="item-name">{dish.title}</h6>
                                            <p className='item-price'>${dish.price}</p>
                                        </div>

                                        <div className="item-pr">
                                            <h4 className="item-heading">${dish.price}</h4>

                                            <div className="item-small">
                                                <p className="item-sum">Sum</p>
                                                <span className="span-item-quantity">Quantity : 1</span>
                                            </div>
                                        </div>
                                        <hr className='line' />


                                    </div>

                                ))}
                                <div className="total-sec">
                                    <div className="total-price">
                                        <p className="total-para">Total Order:</p>
                                        <p className="total-order">${calculateTotalPrice()}</p>
                                    </div>

                                    <div className="total-price">
                                        <p className="total-para">Total Pay:</p>
                                        <p className="total-pay">${calculateTotalPrice()}</p>
                                    </div>
                                </div>

                                <div className="nav-btn">
                                    <button className="btn-side" onClick={handleCheckout}>
                                        Checkout
                                    </button>
                                </div>

                            </div>

                        </div>

                    )}
                </div>
            </div>

        </>
    )
}

export default Navbar
