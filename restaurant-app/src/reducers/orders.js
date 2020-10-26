const initialState = {
    order: [
        {
            food: null,
            price: Number,
        }
    ]
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEM_ADDED':
            if (!action.payload.amount || action.payload.amount === '1') {
                return {
                    ...state,
                    order: [
                        ...state.order, {
                            table: window.location.href,
                            food: action.payload.food,
                            price: action.payload.price,
                        }
                    ]

                }

            } else {
                return {
                    ...state,
                    order: [
                        ...state.order, {
                            table: window.location.href,
                            food: action.payload.food,
                            price: action.payload.price * parseFloat(action.payload.amount),
                            amount: action.payload.amount
                        }
                    ]
                }
            }

        case 'ITEM_DELETED':
            return {
                ...state,
                order: state.items.filter((item, index) => index !== action.payload)
            }
        default: return state
    }
}

export default orderReducer