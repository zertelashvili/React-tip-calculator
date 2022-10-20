import React from 'react'
import './NumPeople.css'
import './Bill'
import iconperson from './images/icon-person.svg'

export default function NumPeople(props) {
    return (
        <div>
            <p className='np'>Number of People</p> <span className='error'>{props.hidden()}</span>
            <input onClick={props.hidden} value={props.person} onChange={(event) => props.setPerson(event.target.value)} className='inpnp' type="number" placeholder='0' />
            <div className='ptnpdiv'>
                <img src={iconperson} alt="imgnp" />
            </div>
        </div>
    )
}
