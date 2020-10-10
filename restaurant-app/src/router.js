import React, { Component, } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// IMPORT COMPONENTS
import RegisterForm from './components/RegisterForm/RegisterForm.component'
import LoginForm from './components/LoginForm/LoginForm.component'
import Error from './components/404/Error404.component'
import UserHomePage from './components/UserHomePage/UserHomePage.component'
import PrivateRoute from './components/PrivateRoute.component'
import Table from './components/UserHomePage/Table/Table.component'

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={(props) =>
                        <LoginForm {...props} />}>

                    </Route>
                    <Route path='/register' component={RegisterForm}></Route>
                    <PrivateRoute exact path='/home/:id' component={UserHomePage} />
                    <PrivateRoute exact path='/home/:id/:tablenumber' component={Table} />

                    <Route component={Error}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router