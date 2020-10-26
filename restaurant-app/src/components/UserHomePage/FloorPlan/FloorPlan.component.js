import React from 'react'
import './FloorPlan.css'
import { useDispatch } from 'react-redux'
import { clearDispaly } from '../../../actions/table'
import { resetAmount } from '../../../actions/numbers'

function FloorPlan() {
    const dispatch = useDispatch()
    const handleTableClick = (e) => {
        const tableNumber = e.target.textContent
        const path = `${window.location}/table-${tableNumber}`
        dispatch(clearDispaly())
        dispatch(resetAmount())
        window.location.assign(path)
    }

    return (
        <div className='container'>
            <div className='table-row'>
                <button onClick={handleTableClick} className='table'>1</button>
                <button onClick={handleTableClick} className='table'>2</button>
                <button onClick={handleTableClick} className='table'>3</button>
                <button onClick={handleTableClick} className='table'>4</button>

            </div>
            <div className='table-row'>
                <button onClick={handleTableClick} className='table'>5</button>
                <button onClick={handleTableClick} className='table'>6</button>
                <button onClick={handleTableClick} className='table'>7</button>
                <button onClick={handleTableClick} className='table'>8</button>
            </div>
            <div className='table-row'>
                <button onClick={handleTableClick} className='table'>9</button>
                <button onClick={handleTableClick} className='table'>10</button>
                <button onClick={handleTableClick} className='table'>11</button>
                <button onClick={handleTableClick} className='table'>12</button>
            </div>
        </div>
    )


}

export default FloorPlan