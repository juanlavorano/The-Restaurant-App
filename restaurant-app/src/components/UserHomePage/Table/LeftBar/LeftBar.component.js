import React, { Component } from 'react'
import './LeftBar.css'

export default class LeftBar extends Component {

    sendData = (e) => {
        e.preventDefault()
        this.props.onClick({
            food: e.target.textContent,
            price: `${Math.floor(Math.random() * 100) + 1}`
        })
    }
    // COMPONENTDIDMOUNT THAT TAKES DATA FROM DATABASE AND ASSIGN IT TO THE BUTTONS
    // ITERATE TO CREAT THE NECESARY AMOUNT OF BUTTONS

    render() {

        return (
            <div className='left-bar'>
                <div className='column'>
                    <button onClick={this.sendData}>Bife</button>
                    <button onClick={this.sendData}>Bondiola</button>
                    <button onClick={this.sendData}>Chori</button>
                    <button onClick={this.sendData}>Morzilla</button>
                </div>
                <div className='column'>
                    <button onClick={this.sendData}>Pollo al espiedo</button>
                    <button onClick={this.sendData}>Matambre</button>
                    <button onClick={this.sendData}>Vacio</button>
                    <button onClick={this.sendData}>Asado</button>
                </div>
            </div>
        )
    }
}