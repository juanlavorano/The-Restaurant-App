const initialState = {
    number: ''
}

const numbersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AMOUNT_ADDED':
            return {
                ...state,
                number: action.payload.number
            }
        case 'AMOUNT_RESET':
            return {
                ...state,
                number: ''
            }
        default: return state

    }
}



export default numbersReducer