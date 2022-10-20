import React from 'react'
import './GreenCard.css'
import './Button.css'

export default function GreenCard(props) {

    return (
        <div className='greencard'>
            <p className='tip'>Tip Amount</p>
            <p className='pers'>/ person</p> <span className='price'>${props.result1}</span>
            <p className='total'>Total</p>
            <p className='pers2'>/ person</p><span className='price2'>${props.result2}</span>
            {props.result1 === '0.00' ? <div disabled className='reset'>RESET</div> : <div onClick={() => { props.clickReset(); }} className='reset'>RESET</div>}

        </div>
    )
}
