import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './LeftBar.css'
import { addOrder } from '../../../../actions/orders'
import { resetAmount } from '../../../../actions/numbers'
import { selectDisplay } from '../../../../actions/table'

import menu from './FakeDatabase'

export default function LeftBar() {
    const dispatch = useDispatch()
    const selectedType = state => state.table.type.type
    const currentAmount = useSelector(state => state.number.number)

    const typeSelected = useSelector(selectedType)

    const handleClick = (e) => {
        dispatch(addOrder(e.target.textContent, currentAmount))
        dispatch(resetAmount())
    }

    const filterMenu = (e) => {
        dispatch(selectDisplay(e.target.textContent))
    }

    return (
        <div>
            <div className='left-bar'>
                <div className='column'>
                    {menu.map(item => {
                        if (item.type === typeSelected)
                            return <button className='menu-item' key={item.id} onClick={handleClick}>{item.plate}</button>
                    })}
                </div>
            </div>
            <div className='menu'>
                <div className='row'>
                    <button onClick={filterMenu}>Starter</button>
                    <button onClick={filterMenu}>Main</button>
                </div>
                <div className='row'>
                    <button onClick={filterMenu}>Dessert</button>
                    <button onClick={filterMenu}>Drink</button>
                </div>
            </div>
        </div>
    )
}