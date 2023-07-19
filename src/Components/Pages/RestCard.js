import React from 'react'
import './RestCard.css'
import restName from '../../assets/cafe-1.jpg'
import logoImg from '../../assets/logo-img.jpg'

function RestCard() {
    return (
        <>
            <div className="rest-data-section">
                <div className="current-page">
                    <span className='pr-page'>Home <i className="abt-arrow fa-solid fa-arrow-right"></i> <span className="pr-page">Restaurants</span>  <i className="abt-arrow fa-solid fa-arrow-right"></i> <span className="cr-page">The Wilmington</span></span>
                </div>
                <div className="data-row">
                    <div className="logo-rate">
                        <div className="logo-detail">
                            <img className='rst-img' src={restName} alt="" />
                            <h2 className="logo-heading">Kennington Lane Cafe</h2>
                        </div>

                        <p className='rate-span'>Rate:</p>
                        <div className="stars">
                            <i className="star-icon fa-solid fa-star"></i>
                            <i className="star-icon fa-solid fa-star"></i>
                            <i className="star-icon fa-solid fa-star"></i>
                            <i className="star-icon fa-solid fa-star"></i>
                            <i className="star-icon fa-solid fa-star-half-stroke"></i>
                        </div>

                        <p className="rate-span">CUISINES:</p>
                        <div className="tags">
                            <a href='/' className="name-tags">american</a>
                            <a href='/' className="name-tags">steakhouse</a>
                            <a href='/' className="name-tags">seafood</a>
                        </div>

                        <p className="rate-span">Features:</p>
                        <p className="feature-para">Lorem mollis aliquam ut porttitor. Nisl rhoncus mattis rhoncus urna neque. Pharetra sit amet aliquam id. Urna nec tincidunt praesent semper feugiat nibh.</p>

                    </div>

                    <div className="logo-img">
                        <div className="logo-time">
                            <i className="logo-icon fa-solid fa-clock"></i>

                            <div className="logo-text">
                                <h4 className="time-heading">
                                    9am - 12pm
                                    <br />
                                    Hours
                                </h4>
                            </div>
                        </div>

                        <div className="logo-lunch">
                            <i className="logo-icon fa-solid fa-utensils"></i>

                            <div className="logo-text">
                                <h4 className="time-heading">
                                    Breakfast, Lunch, Dinner
                                    <br />
                                    Meals
                                </h4>
                            </div>
                        </div>

                        <img className='sect-img' src={logoImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestCard
