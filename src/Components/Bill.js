import { useEffect, useState } from "react";
import React from 'react'
import './Bill.css'
import './Button.css'
import img1 from './images/icon-dollar.svg'
import NumPeople from './NumPeople'
import SelectTip from './SelectTip'
import GreenCard from './GreenCard'

export default function Bill() {
    const [bill, setBill] = useState('')
    const [tip, setTip] = useState('')
    const [person, setPerson] = useState('')
    const [result1, setResult1] = useState('0.00')
    const [result2, setResult2] = useState('0.00')
    function clickReset() {
        setResult1('0.00')
        setResult2('0.00')
        setBill('')
        setTip('')
        setPerson('')
        document.querySelectorAll('.btn-act').forEach((btn) => {
            btn.removeAttribute('id')
        })
    }

    function hiddenBill() {
        if (bill == 0) {
            return 'Can’t be zero'
        }
    }
    function hiddenTip() {
        if (tip == 0) {
            return 'Can’t be zero'
        }
    }
    function hiddenPeople() {
        if (person == 0) {
            return 'Can’t be zero'
        }
    }
    useEffect(() => {
        if (bill > 0 && tip > 0 && person > 0) {
            setResult1((bill * tip) / (person * 100))
            setResult2((bill / person) + result1)
        }
    })
    return (
        <div className='cont'>
            <p className='billtit'>Bill</p><span className='error3'>{hiddenBill()}</span>
            <input className='inp' type="number" placeholder='0' onChange={(event) => setBill(event.target.value)} value={bill} />
            <div className='divpt'>
                <img className='img1' src={img1} alt="img" />
            </div>
            <SelectTip hidden={hiddenTip} tip={tip} setTip={setTip} />
            <NumPeople hidden={hiddenPeople} person={person} setPerson={setPerson} />
            <GreenCard clickReset={clickReset} setResult1={setResult1} setResult2={setResult2} result1={result1} result2={result2} />



        </div>
    )

}

