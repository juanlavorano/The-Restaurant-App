import React from 'react'
import './FloorPlan.css'

function FloorPlan(props) {

    const handleTableClick = (e) => {
        const tableNumber = e.target.textContent
        const path = `${window.location}/table-${tableNumber}`
        window.location.assign(path)
    }

    return (
        <div className='container'>
            <div className='table-row'>
                <button onClick={handleTableClick} className='table'>1</button>
                <button className='table'>2</button>
                <button className='table'>3</button>
                <button className='table'>4</button>

            </div>
            <div className='table-row'>
                <button className='table'>5</button>
                <button className='table'>6</button>
                <button className='table'>7</button>
                <button className='table'>8</button>
            </div>
            <div className='table-row'>
                <button className='table'>9</button>
                <button className='table'>10</button>
                <button className='table'>11</button>
                <button className='table'>12</button>
            </div>
        </div>
    )


}

export default FloorPlan