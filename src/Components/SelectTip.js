import React, { useRef } from 'react'
import './SelectTip.css'
import Button from './Button'
import './Button.css'
import './Bill.css'


export default function SelectTip(props) {
    function activate(e) {

        document.querySelectorAll('.btn-act').forEach((btn) => {
            btn.removeAttribute('id')
        })
        e.target.setAttribute('id', 'active-btn')
    }
    return (
        <div>
            <p className='st'>Select Tip %</p><span className='error2'>{props.hidden()}</span>
            <div className='precents'>

                <Button click={activate} num='5' setTip={props.setTip} />

                <Button click={activate} num='10' setTip={props.setTip} />
                <Button click={activate} num='15' setTip={props.setTip} />
                <Button click={activate} num='25' setTip={props.setTip} />
                <Button click={activate} num='50' setTip={props.setTip} />
                <input value={props.tip} onChange={(event) => props.setTip(event.target.value)} placeholder='Custom' className='custom' type="number" />
            </div>

        </div>
    )
}
