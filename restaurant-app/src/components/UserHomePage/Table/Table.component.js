import React, { Component } from 'react'
import './Table.css'
import './DataDisplay/DataDisplay.css'
import LeftBar from './LeftBar/LeftBar.component'
import DownBar from './DownBar/DownBar.component'
// import DataDisplay from './DataDisplay/DataDisplay.component'

export default class Table extends Component {
    state = {
        orders: []
    }

    handleStateChange = (data) => {
        this.setState({
            orders: [...this.state.orders, { food: data.food, price: data.price }]
        })
    }


    render() {
        return (
            <div className='table-display'>

                <div className='right-components'>
                    <LeftBar onClick={this.handleStateChange} className='LeftBar' />
                </div>

                <div className='left-components'>
                    <DownBar className='DownBar' />

                    <div className='data-display'>
                        <div className='list'>
                            <ul>
                                {this.state.orders.map(item =>
                                    (<li key={item.price}
                                        className="order">{item.food}
                                        <span className="price">€{item.price}</span>
                                    </li>))}
                            </ul>
                            <p className="order">Total <span className='price'>€{this.state.orders.reduce((prev, curr) => prev += +curr.price, 0)}</span></p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}
