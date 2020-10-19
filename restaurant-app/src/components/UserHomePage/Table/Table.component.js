import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Table.css'
import './DataDisplay/DataDisplay.css'
import LeftBar from './LeftBar/LeftBar.component'
import DownBar from './DownBar/DownBar.component'

// import DataDisplay from './DataDisplay/DataDisplay.component'

export default function Table() {

    const orders = useSelector(state => state.order.order)
    const currentTable = orders.filter(order => order.table === window.location.href)
    const totalPrice = currentTable.reduce((prev, curr) => prev += +curr.price, 0)

    return (
        <div className='table-display'>

            <div className='right-components'>
                <LeftBar className='LeftBar' />
            </div>

            <div className='left-components'>
                <DownBar className='DownBar' />

                <div className='data-display'>
                    <div className='list'>
                        <ul>
                            {
                                currentTable.map(item => {
                                    return <li key={item.price} className='order'>{item.food}<span className='price'>€{item.price}</span></li>
                                })}
                        </ul>
                        <p className="order">Total <span className='price'>€{totalPrice}</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}
