const initialState = {
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGGED_USER":
            return {
                ...state,
                user: action.payload
            }
        default: return state
    }
}

export default userReducer