import React from 'react';
import { Route, Redirect } from "react-router-dom";
// import axios from 'axios'
import cookie from 'js-cookie'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = cookie.get('token')

    return (
        <Route {...rest} render={() => {
            if (auth) {
                return <Component />
            } else {
                return <Redirect to={
                    {
                        pathname: '/',
                        state: {
                            from: rest.location
                        }
                    }
                } />
            }
        }} />
    )
}





// const PrivateRoute = ({ component: Component, ...rest }) => {
//     return (
//         <Route {...rest} render={() => {
//             if (rest.authenticated === true) {
//                 return <Component />
//             } else {
//                 return <Redirect to={
//                     {
//                         pathname: '/',
//                         state: {
//                             from: rest.location
//                         }
//                     }
//                 } />
//             }

//         }} />
//     )

// }

export default PrivateRoute;