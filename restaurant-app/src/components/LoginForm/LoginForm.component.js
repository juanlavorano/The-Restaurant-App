import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import cookie from 'js-cookie'
import { useDispatch } from 'react-redux'
import { logIn } from '../../actions/user'

export default function LoginForm(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [id, setId] = useState('')

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

    return (
        <div className='container'>
            <form className='loginForm' onSubmit={handleSubmit}>
                <h2 className='loginTitle formItem'>Login</h2>
                <input className='formItem' type='text' value={username || ''} onChange={e => setUsername(e.target.value)} placeholder='Username' size='40' /> <br />
                <input className='formItem' type='password' value={password || ''} onChange={e => setPassword(e.target.value)} placeholder='Password' size='40' /> <br />
                <button className='formItem' name='Login' type='submit' >Login</button>
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
