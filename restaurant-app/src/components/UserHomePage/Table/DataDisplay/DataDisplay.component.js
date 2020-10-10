import React, { Component } from 'react'
import './DataDisplay.css'

export default class DownBar extends Component {

    render() {
        return (
            <div className='data-display'>
                <div className='list'>
                    <ul>
                        <li className="order">Algo <span className="price">Precio</span></li>
                        <li className="order">Algo <span className="price">Precio</span></li>
                        <li className="order">Algo <span className="price">Precio</span></li>
                        <li className="order">Algo <span className="price">Precio</span></li>
                    </ul>
                </div>

            </div >
        )
    }

}