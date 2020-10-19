const initialState = {
    order: [
        {
            food: null,
            price: Number
        }
    ]
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEM_ADDED':
            return {
                ...state,
                order: [
                    ...state.order, {
                        table: window.location.href,
                        food: action.payload.food,
                        price: action.payload.price
                    }
                ]

            }

        case 'ITEM_DELETED':
            return {
                ...state,
                table: state.items.filter((item, index) => index !== action.payload)
            }
        default: return state
    }
}

export default orderReducer