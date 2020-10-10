import React, { Component } from 'react';
import axios from 'axios'
import cookie from 'js-cookie'


export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            id: '',
            // authenticated: false
        }
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
    }

    changeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    changePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({
            username: this.state.username,
            password: this.state.password,
        })

        axios.post(`http://localhost:5000/api/user/login`, { username: this.state.username, password: this.state.password })
            .then(res => {
                cookie.set('token', res.data)
            })
            .then(res => axios.get('http://localhost:5000/api/get/user')
                .then(res => {
                    res.data.forEach(user => {
                        if (user.username === this.state.username) {
                            this.setState({ user: user.username })
                        }
                    })
                }))
            .then(res => {
                this.props.history.push(`/home/${this.state.username}`)
            })
            .catch(err => console.log(err))

    }

    render() {
        return (
            <div className='container'>
                <form className='loginForm' onSubmit={this.handleSubmit}>
                    <h2 className='loginTitle formItem'>Login</h2>
                    <input className='formItem' type='text' value={this.state.username} id='username' onChange={this.changeUsername} placeholder='Username' size='40' /> <br />
                    <input className='formItem' type='password' value={this.state.password} id='password' onChange={this.changePassword} placeholder='Password' size='40' /> <br />
                    <button className='formItem' name='Login' type='submit' >Login</button>
                </form>
            </div>
        )
    }

}
