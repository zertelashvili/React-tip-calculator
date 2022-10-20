
import React from 'react'
import './Card.css'
import Bill from './Bill'
import image from './images/logo.svg'

export default function () {
    return (
        <div className='container'>
            <img className='smth' src={image} alt="img" />
            <div className='card'>
                <Bill />




            </div>
        </div>
    )
}
