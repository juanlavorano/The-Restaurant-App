import React, { useState } from 'react'
import axios from 'axios'
import cookie from 'js-cookie'
import { useDispatch } from 'react-redux'
import { logIn } from '../../actions/user'
import './LoginForm.css'
import { FaUserAlt } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'

export default function LoginForm(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(`http://localhost:5000/api/user/login`, { username, password })
            .then(res => {
                cookie.set('token', res.data)
            })
            .then(res => dispatch(logIn(username)))
            .then(res => {
                props.history.push(`/home/${username}`)
            })
            .catch(err => console.log(err))

    }

    const path = `${window.location}register`
    return (
        <div className='container'>
            <div className='logo-bar'>
                <svg width="98" height="116" viewBox="0 0 98 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Logo">
                        <ellipse id="Ellipse 1" cx="29" cy="49.5" rx="29" ry="28.5" fill="#49AEDA" fill-opacity="0.45" />
                        <ellipse id="Ellipse 2" cx="59" cy="78" rx="39" ry="38" fill="#49AEDA" fill-opacity="0.6" />
                        <ellipse id="Ellipse 3" cx="71.5" cy="31" rx="23.5" ry="22" fill="#49AEDA" fill-opacity="0.25" />
                        <path id="R" d="M79.2 97L63.2 74.5C61.4 74.7 59.5333 74.8 57.6 74.8H38.8V97H31.4V27H57.6C66.5333 27 73.5333 29.1333 78.6 33.4C83.6667 37.6667 86.2 43.5333 86.2 51C86.2 56.4667 84.8 61.1 82 64.9C79.2667 68.6333 75.3333 71.3333 70.2 73L87.3 97H79.2ZM57.4 68.5C64.3333 68.5 69.6333 66.9667 73.3 63.9C76.9667 60.8333 78.8 56.5333 78.8 51C78.8 45.3333 76.9667 41 73.3 38C69.6333 34.9333 64.3333 33.4 57.4 33.4H38.8V68.5H57.4Z" fill="white" />
                    </g>
                </svg>
                <button onClick={() => window.location.assign(path)} id='sign-up-btn'>Sign up</button>
            </div>
            <div className='triangles'>
                <svg width="1440" height="611" viewBox="0 0 1440 611" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Triangles">
                        <path id="Vector 3" d="M1440 611L0 0V611H1440Z" fill="#49AEDA" fill-opacity="0.1" />
                        <path id="Vector 2" d="M1440 611L0 114V611H1440Z" fill="#49AEDA" fill-opacity="0.2" />
                        <path id="Vector 1" d="M1440 611L0 327V611H1440Z" fill="#49AEDA" fill-opacity="0.25" />
                    </g>
                </svg>
            </div>
            <form className='loginForm' onSubmit={handleSubmit}>
                <h2 className='loginTitle'>Log in</h2>
                <div className='input-div'>
                    <FaUserAlt className='icon' />
                    <input className='formItem' type='text' value={username || ''} onChange={e => setUsername(e.target.value)} placeholder='Username' size='40'></input>
                </div>    <br />
                <div className='input-div'>
                    <FaLock className='icon' />
                    <input className='formItem' type='password' value={password || ''} onChange={e => setPassword(e.target.value)} placeholder='Password' size='40' />
                </div> <br />
                <div className='login-btn-line'><button name='Login' type='submit'>Log in</button><a>Forgot password?</a></div>
            </form>
        </div>
    )
}


// const mapStateToProps = state => {
//     return {
//         username: state.username,
//         password: state.password,
//         id: state.id
//     }
// }

// export default connect(mapStateToProps)(LoginForm)
