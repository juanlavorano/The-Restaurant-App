import React, { Component } from 'react'
import './LeftBar.css'

export default class LeftBar extends Component {

    // COMPONENTDIDMOUNT THAT TAKES DATA FROM DATABASE AND ASSIGN IT TO THE BUTTONS
    // ITERATE TO CREAT THE NECESARY AMOUNT OF BUTTONS

    render() {
        return (
            <div className='left-bar'>
                <div className='column'>
                    <button>Button</button>
                    <button>Button</button>
                    <button>Button</button>
                    <button>Button</button>
                </div>
                <div className='column'>
                    <button>Button</button>
                    <button>Button</button>
                    <button>Button</button>
                    <button>Button</button>
                </div>
            </div>
        )
    }
}