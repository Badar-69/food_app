import React from 'react'
import '../UI/Buttons.css'

const Buttons = ({ text, className }) => {
    return (
        <>
                <button className={`comn-button ${className}`}>
                    {text}
                </button>
        </>
    )
}

export default Buttons
