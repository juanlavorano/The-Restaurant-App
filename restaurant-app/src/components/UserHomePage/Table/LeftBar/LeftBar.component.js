import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './LeftBar.css'
import { addOrder } from '../../../../actions/orders'
import { selectDisplay } from '../../../../actions/table'

import menu from './FakeDatabase'

export default function LeftBar() {
    const dispatch = useDispatch()
    const selectedType = state => state.table.type.type

    const typeSelected = useSelector(selectedType)

    const handleClick = (e) => {
        dispatch(addOrder(e.target.textContent))
    }

    const filterMenu = (e) => {
        dispatch(selectDisplay(e.target.textContent))
    }
    // const filteredMenu = menu.filter(filterMenu)


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


{/* <div className='left-bar'>
<div className='column'>
    {menu.map(item => {
        return <button className='menu-item' key={item.id} onClick={handleClick}>{item.plate}</button>
    })}
</div>

</div> */}


 // <div className='left-bar'>
        //     <div className='column'>
        //         <button onClick={handleClick}>Bife</button>
        //         <button onClick={handleClick}>Bondiola</button>
        //         <button onClick={handleClick}>Chori</button>
        //         <button onClick={handleClick}>Morcilla</button>
        //     </div>
        //     <div className='column'>
        //         <button onClick={handleClick}>Pollo al espiedo</button>
        //         <button onClick={handleClick}>Matambre</button>
        //         <button onClick={handleClick}>Vacio</button>
        //         <button onClick={handleClick}>Asado</button>
        //     </div>
        // </div>