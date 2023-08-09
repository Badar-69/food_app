import React from 'react'
import './SubForm.css'
import subImg from '../../assets/sub-img.png'
import Buttons from './Buttons'

function SubForm() {
    return (
        <>
            <div className="sub-form">
                <div data-aos="flip-up" className="sub-first">
                    <img className='sub-Img' src={subImg} alt="Subscribe img" />
                </div>

                <div data-aos="fade-up" className="sub-second">
                    <div className="sub-text">
                        <span className='sub-heading'>Get the menu of your favourite restaurants every day</span>
                        <div className="submit">
                            <input type="text" id="sub-input" placeholder='Enter email address' />
                            <Buttons text='SUBSCRIBE' className='sub-button' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubForm
