import React, { Component } from 'react'
import './Table.css'
import LeftBar from './LeftBar/LeftBar.component'
import DownBar from './DownBar/DownBar.component'
import DataDisplay from './DataDisplay/DataDisplay.component'

export default class Table extends Component {
    render() {
        return (
            <div className='table-display'>

                <div className='right-components'>
                    <LeftBar className='LeftBar' />
                </div>

                <div className='left-components'>
                    <DownBar className='DownBar' />
                    <DataDisplay className='DataDisplay' />
                </div>

            </div>
        )
    }

}
