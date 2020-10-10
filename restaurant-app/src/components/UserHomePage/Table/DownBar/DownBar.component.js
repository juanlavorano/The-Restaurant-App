import React, { Component } from 'react'
import './DownBar.css'

export default class DownBar extends Component {

    render() {
        return (
            <div className='down-bar'>
                <div className='row'>
                    <button>Button</button>
                    <button>Button</button>
                    <button>Button</button>
                    <button>Button</button>
                </div>
                <div className='row'>
                    <button>Button</button>
                    <button>Button</button>
                    <button>Button</button>
                    <button>Button</button>
                </div>
            </div>
        )
    }

}