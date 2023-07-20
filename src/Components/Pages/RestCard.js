import React, { useState } from 'react';
import './RestCard.css'
import restName from '../../assets/cafe-1.jpg'
import logoImg from '../../assets/logo-img.jpg'
import dish1 from '../../assets/dish-1.png'
import dish2 from '../../assets/dish-2.png'
import dish3 from '../../assets/dish-3.png'
import dish4 from '../../assets/dish-4.png'
import dish5 from '../../assets/dish-5.png'
import dish6 from '../../assets/dish-6.png'
import dish7 from '../../assets/dish-7.png'
import dish8 from '../../assets/dish-8.png'
import dish9 from '../../assets/dish-9.png'
const dishes = [
    { image: dish1, title: 'Egg, kiwi and sauce chilli', price: '39' },
    { image: dish2, title: 'Potatoes with chicken and dried fruits', price: '46' },
    { image: dish3, title: 'Rice with shrimps and kiwi', price: '49' },
    { image: dish4, title: 'Spaghetti with mushrooms and...', price: '49' },
    { image: dish5, title: 'Sliced chicken, avocado and...', price: '39' },
    { image: dish6, title: 'Veal meat, tomatoes and...', price: '49' },
]

const lunch = [
    { image: dish7, title: 'Fruits with rice chips', price: '39' },
    { image: dish8, title: 'Vegetables with rice chips', price: '35' },
    { image: dish9, title: 'Chicken with vegetables and...', price: '45' },
]


function RestCard() {
    // const [count, setCount] = useState(0);

    const [dishesCount, setDishesCount] = useState(new Array(dishes.length).fill(0));

    const handleIncrement = (index) => {
        const newDishesCount = [...dishesCount];
        newDishesCount[index] = newDishesCount[index] + 1;
        setDishesCount(newDishesCount);
    };

    const handleDecrement = (index) => {
        if (dishesCount[index] > 0) {
            const newDishesCount = [...dishesCount];
            newDishesCount[index] = newDishesCount[index] - 1;
            setDishesCount(newDishesCount);
        }
    };


    // const handleIncrement = (id) => {
    //     dishes.map((item) => {
    //         if (item.id === id) { setCount(count + 1) };
    //     })
    // };

    // const handleDecrement = (id) => {
    //     dishes.map((item) => {
    //         if (item.id === id) { setCount(count - 1) }
    //     })
    // }




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

            <div className="meals-section">
                <div className="meals-select">
                    <div className="meal-text-parent">
                        <div className="meal-text">

                            <div className="meal-btns">
                                <button className='btns-rest meal-break'>Breakfast</button>
                                <button className='btns-rest meal-lunch'>Lunch</button>
                                <button className='btns-rest meal-dinner'>Dinner</button>
                            </div>

                            <div className="like-meals">
                                <i class="meal-icon fa-solid fa-heart"></i>
                                <a className='meal-para' href="/food_app">Like Meals</a>
                            </div>
                        </div>
                    </div>

                    <div className="meals-row">
                        {dishes.map((dish, index) => (
                            <div className="dish">
                                <img className="dish-img" src={dish.image} alt="dish pic" />
                                <div className="dish-details">
                                    <h3 className="dish-heading">{dish.title}</h3>

                                    <div className="dish-icons">
                                        <a className='dish-tags' href="/food_app">Breakfast</a>
                                        <a className='dish-tags' href="/food_app">Brunch</a>
                                        <i class="dish-icons fa-solid fa-circle-info"></i>
                                        <i class="dish-icons fa-solid fa-heart"></i>
                                    </div>

                                    <div className="dish-price">
                                        <h2 className="price-heading">${dish.price}</h2>
                                        <div className="price-increase">
                                            <button
                                                onClick={() => handleDecrement(index)}
                                                className={`dish-btn ${dishesCount[index] === 0 ? 'disabled' : ''}`}
                                                disabled={dishesCount[index] === 0}
                                            >
                                                -
                                            </button>

                                            <input type="number" min="0" value={dishesCount[index]} readOnly id="dish-input" />

                                            <button onClick={() => handleIncrement(index)} className="dish-btn">
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="dish-add">
                                        <button className="btn-cart">Add to Basket <i class="fa-solid fa-bag-shopping"></i></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lunch-menu">
                        <div className="lunch-text">
                            <h2 className="lunch-heading">See also Lunch Category</h2>
                        </div>

                        <div className="lunch-row">
                            {lunch.map((lunch, index) => (
                                <div className="dish">
                                    <img className="dish-img" src={lunch.image} alt="dish pic" />
                                    <div className="dish-details">
                                        <h3 className="dish-heading">{lunch.title}</h3>

                                        <div className="dish-icons">
                                            <a className='dish-tags' href="/food_app">Breakfast</a>
                                            <a className='dish-tags' href="/food_app">Brunch</a>
                                            <i class="dish-icons fa-solid fa-circle-info"></i>
                                            <i class="dish-icons fa-solid fa-heart"></i>
                                        </div>

                                        <div className="dish-price">
                                            <h2 className="price-heading">${lunch.price}</h2>
                                            <div className="price-increase">
                                                <button
                                                    onClick={() => handleDecrement(index)}
                                                    className={`dish-btn ${dishesCount[index] === 0 ? 'disabled' : ''}`}
                                                    disabled={dishesCount[index] === 0}
                                                >
                                                    -
                                                </button>

                                                <input type="number" min="0" value={dishesCount[index]} readOnly id="dish-input" />

                                                <button onClick={() => handleIncrement(index)} className="dish-btn">
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="dish-add">
                                            <button className="btn-cart">Add to Basket <i class="fa-solid fa-bag-shopping"></i></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestCard
