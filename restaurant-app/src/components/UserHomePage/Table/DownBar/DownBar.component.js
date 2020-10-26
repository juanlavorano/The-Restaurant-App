import React from 'react'
import './DownBar.css'
import { useSelector, useDispatch } from 'react-redux'
import { addAmount, resetAmount } from '../../../../actions/numbers'

export default function DownBar() {
    const user = useSelector(state => state.user.user)
    const currentNumber = useSelector(state => state.number.number)
    const dispatch = useDispatch()

    const handleBack = (e) => {
        e.preventDefault()
        window.location.href = `http://localhost:3000/home/${user}`
    }

    const handleClear = (e) => {
        e.preventDefault()
        dispatch(resetAmount())
    }

    const handleNumber = (e) => {
        dispatch(addAmount(currentNumber + e.target.textContent))

    }

    return (
        <div className='down-bar'>
            <div className='row'>
                <div className='numbers'>
                    <button onClick={handleNumber}>1</button>
                    <button onClick={handleNumber}>2</button>
                    <button onClick={handleNumber}>3</button>
                </div>
                <button>Button</button>
                <button>Button</button>
            </div>
            <div className='row'>
                <div className='numbers'>
                    <button onClick={handleNumber}>4</button>
                    <button onClick={handleNumber}>5</button>
                    <button onClick={handleNumber}>6</button>
                </div>
                <button>Button</button>
                <button>Button</button>
            </div>
            <div className='row'>
                <div className='numbers'>
                    <button onClick={handleNumber}>7</button>
                    <button onClick={handleNumber}>8</button>
                    <button onClick={handleNumber}>9</button>
                </div>
                <button>Button</button>
                <button>Button</button>
            </div>
            <div className='row'>
                <div className='numbers'>
                    <button onClick={handleNumber}>.</button>
                    <button onClick={handleNumber}>0</button>
                    <button onClick={handleNumber}>00</button>
                </div>
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleBack}>Back</button>
            </div>
        </div>
    )
}

