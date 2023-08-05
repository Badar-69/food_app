import React from 'react'
import './Errorpg.css'
import errorImg from '../../assets/404.png'
import Footer from '../UI/Footer'

function Errorpg() {
  return (
    <>
      <div className="search-section">
        <div className="search-bar">
          <input className='key-input' type="text" placeholder='Enter query keywords' />
        </div>
      </div>

      <div className="error-section">
        <div className="error-one">
          <img className='error-img' src={errorImg} alt="" />
          <h2 className="error-404">404</h2>
        </div>

        <div className="error-two">
          <div className="error-text">
            <h3 className="error-heading">Sorry, we were unuble to find that page</h3>
            <p className="error-para">Varius sit amet mattis vulputate enim nulla aliquet porttitor.
              Elementum nibh tellus molestie nunc.</p>
          </div>
        </div>
        
        <div className="link-back">
          <a href="/food_app" className="error-link">
            <i class="fa-solid fa-house"></i>
          </a>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Errorpg
