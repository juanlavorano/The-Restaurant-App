import React from 'react'
import './Modal.css'

export default function Modal({ open, onClose }) {
    if (!open) return null
    return (
        <div className='Overlay'>
            <div className='Modal'>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}