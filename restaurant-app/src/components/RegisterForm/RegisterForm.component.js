import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterForm.css'
import axios from 'axios'

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeConfirmPassword = this.changeConfirmPassword.bind(this)

    }


    changeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    changeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    changePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    changeConfirmPassword(e) {
        this.setState({
            confirmPassword: e.target.value
        })
    }

    handleSubmitForm = (event) => {
        event.preventDefault()

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password

        }

        if (this.state.confirmPassword !== this.state.password) {
            alert('Passwords do not match')
            return false
        } else {
            axios.post(`http://localhost:5000/api/user/register`, newUser)
                .then(res => alert('User created successfully'))
            window.location.reload(true)
        }
    }



    render() {
        return (
            <div className='container'>
                <form className='loginForm' onSubmit={this.handleSubmitForm}>
                    <h2 className='loginTitle formItem'>Register</h2>
                    <input className='formItem' type='text' value={this.state.username} id='username' onChange={this.changeUsername} placeholder='Username' size='40' /> <br />
                    <input className='formItem' type='text' value={this.state.email} id='email' onChange={this.changeEmail} placeholder='Email' size='40' /> <br />
                    <input className='formItem' type='password' value={this.state.password} id='password' onChange={this.changePassword} placeholder='Password' size='40' /> <br />
                    <input className='formItem' type='password' value={this.state.confirmPassword} id='confirm-password' onChange={this.changeConfirmPassword} placeholder='Confirm password' size='40' /> <br />
                    <button className='formItem' name='Register' type='submit'>Register</button>
                </form>
            </div>
        )
    }
}