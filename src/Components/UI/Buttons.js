import React from 'react'
import '../UI/Buttons.css'

const Buttons = ({ text, className }) => {
    return (
        <>
                <button className={`button-all comn-button ${className}`}>
                    {text}
                </button>
        </>
    )
}

export default Buttons
