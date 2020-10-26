import React, { Component } from 'react'


export default class DataDisplay extends Component {
    render() {
        return (
            <div><p className="order">Total</p><span className='price'>{this.totalPrice}</span></div>
        )

    }
}