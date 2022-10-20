import React from 'react'
import './Button.css'
import NumPeople from './NumPeople'

export default function Button(props) {
    return (
        <>
            <button className='btn btn-act' onClick={(e) => { props.setTip((Number(props.num))); props.click(e) }} >{props.num}%</button>
        </>
    )
}
