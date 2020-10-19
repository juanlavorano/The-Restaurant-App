const logIn = (data) => {
    return {
        type: 'LOGGED_USER',
        payload: data
    }
}

const logOut = () => {
    return {
        type: 'USER_LOGOUT'
    }
}

export { logIn, logOut }
