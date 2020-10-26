import React from 'react'
import { useSelector } from 'react-redux'
import './Table.css'
import './DataDisplay/DataDisplay.css'
import LeftBar from './LeftBar/LeftBar.component'
import DownBar from './DownBar/DownBar.component'

export default function Table() {

    const orders = useSelector(state => state.order.order)
    const currentNumber = useSelector(state => state.number.number)
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
                                    return <li key={item.price} className='order'><span className='amount'>{item.amount}</span><span className='food'>{item.food}</span><span className='price'>€{item.price}</span></li>
                                })}
                        </ul>
                    </div>
                </div>
                <div className='totalDiv'>
                    <p className="total">Total <span className='price'>€{totalPrice}</span></p>
                    <p className='total'> <span className='price'>{currentNumber}</span></p>
                </div>
            </div>

        </div>
    )
}
