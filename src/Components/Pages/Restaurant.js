import React from 'react'
import './Restaurant.css'
import Buttons from '../UI/Buttons'
import rowImg from '../../assets/order.png'
import bgTop from '../../assets/cafe-2.jpg'
import rest1 from '../../assets/cafe-1.jpg'
import rest2 from '../../assets/cafe-2.jpg'
import rest3 from '../../assets/cafe-3.jpg'
import rest4 from '../../assets/cafe-4.jpg'
import rest5 from '../../assets/cafe-5.jpg'
import rest6 from '../../assets/cafe-6.jpg'
import SubForm from '../UI/SubForm'
import Footer from '../UI/Footer'

function Restaurant() {
    const restData = [
        { image: rest1, title: 'Kennington Lane Cafe', tag1: 'american', tag2: 'steakhouse', tag3: 'seafood' },
        { image: rest2, title: 'The Wilmington', tag1: 'american', tag2: 'steakhouse', tag3: 'seafood' },
        { image: rest3, title: 'Kings Arms', tag1: 'healthy', tag2: 'steakhouse', tag3: 'vegetarian' },
        { image: rest4, title: 'The Victoria', tag1: 'american', tag2: 'steakhouse', tag3: 'seafood' },
        { image: rest5, title: 'Lanes of London', tag1: 'american', tag2: 'steakhouse', tag3: 'seafood' },
        { image: rest6, title: 'The Andevor Arms', tag1: 'healthy', tag2: 'steakhouse', tag3: 'vegetarian' },
    ];

    return (
        <>
            <div className="resta-section">
                <div className="about-us">
                    <span className='pr-page'>Home <i className="abt-arrow fa-solid fa-arrow-right"></i> <span className="cr-page">Restaurants</span></span>
                </div>

                <div className="resta-row">
                    <div data-aos="fade-up" className="row-one">
                        <div className="row-text">
                            <h3 className='row-heading'>Restaurants</h3>
                            <p className="row-para">Egestas sed tempus urna et pharetra pharetra massa. Fermentum posuere urna nec tincidunt praesent semper.</p>
                            <div className="dropdown">
                                <select name="" id="dropdown">
                                    <option className='options' value="0">Choose a Restaurant</option>
                                    <option className='options' value="1">Choose a Restaurant 1</option>
                                    <option className='options' value="2">Choose a Restaurant 2</option>
                                    <option className='options' value="3">Choose a Restaurant 3</option>
                                    <option className='options' value="4">Choose a Restaurant 4</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="row-two">
                        <img className='row-img' src={rowImg} alt="" />
                    </div>
                </div>
            </div>

            {/* Bg Section */}
            <div className="bg-parent">
                <div className="bg-section">
                    <div  data-aos="fade-up" className="bg-container">
                        <div className="banner-img">
                            <div className="bg-top">
                                <div className="bg-month">
                                    <h4 className="bg-mon-heading">Restaurant of the Month</h4>
                                </div>

                                <div className="bg-wilmington">
                                    <img className='top-img' src={bgTop} alt="" />
                                    <h4 className="will-heading">The Wilmington</h4>
                                </div>
                            </div>
                            <div className="bg-second">
                                <div className="bg-text">
                                    <h2 className="bg-heading">Choose 2 lunches <span className="bg-span">pay for one</span></h2>
                                    <Buttons text='ORDER NOW' className='bg-btn' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Name Section */}


            <div className="name-section" >
                <div className="name-row" >
                    {restData.map((rest, index) => (
                        <div data-aos="flip-up" className="name-card" key={index}>
                            <div className="name-text" >
                                <img className='name-img' src={rest.image} alt="" />
                                <h4 className="name-heading">{rest.title}</h4>
                                <div className="stars">
                                    <i className="star-icon fa-solid fa-star"></i>
                                    <i className="star-icon fa-solid fa-star"></i>
                                    <i className="star-icon fa-solid fa-star"></i>
                                    <i className="star-icon fa-solid fa-star"></i>
                                    <i className="star-icon fa-solid fa-star-half-stroke"></i>
                                </div>

                                <a href='/' className="name-tags">{rest.tag1}</a>
                                <a href='/' className="name-tags">{rest.tag2}</a>
                                <a href='/' className="name-tags">{rest.tag3}</a>

                                <p className="name-para">Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <SubForm/>
            <Footer/>

        </>
    )
}

export default Restaurant
