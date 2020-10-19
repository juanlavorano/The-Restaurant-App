import React from 'react'
import './DownBar.css'
import { useSelector } from 'react-redux'

export default function DownBar() {
    const user = useSelector(state => state.user.user)
    const handleBack = (e) => {
        e.preventDefault()
        window.location.href = `http://localhost:3000/home/${user}`
    }

    return (
        <div className='down-bar'>
            <div className='row'>
                <button>Button</button>
                <button>Button</button>
                <button>Button</button>
                <button>Button</button>
            </div>
            <div className='row'>
                <button>Button</button>
                <button>Button</button>
                <button>Button</button>
                <button onClick={handleBack}>Back</button>
            </div>
        </div>
    )
}

