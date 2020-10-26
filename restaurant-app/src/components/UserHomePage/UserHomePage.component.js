import React from 'react'
import FloorPlan from './FloorPlan/FloorPlan.component'
import { logOut } from '../../actions/user'
import { useDispatch } from 'react-redux'

export default function UserHomePage() {

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(logOut())
    }

    return (
        <div>
            <button onClick={handleClick}>Logout</button>
            <FloorPlan />
        </div>

    )
}
