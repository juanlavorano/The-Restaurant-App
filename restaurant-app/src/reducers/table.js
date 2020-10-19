const initialState = {
    type: ''
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TYPE_SELECTED':
            return {
                ...state,
                type: action.payload
            }
        case 'CLEAR_DISPALAY':
            return {
                ...state,
                type: action.payload
            }
        default: return state
    }
}

export default tableReducer
