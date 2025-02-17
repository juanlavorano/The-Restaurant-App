import { combineReducers } from 'redux'
import userReducer from './user'
import orderReducer from './orders'
import tableReducer from './table'
import numbersReducer from './numbers'

// import { logOut } from '../actions/user'


const allReducers = combineReducers({
    user: userReducer,
    order: orderReducer,
    table: tableReducer,
    number: numbersReducer
})

const rootReducer = (state, action) => {
    switch (action.type) {
        case 'USER_LOGOUT': {
            // for all keys defined in your persistConfig(s)
            localStorage.removeItem('persist:root')
            // storage.removeItem('persist:otherKey')
            state = undefined;
            window.location.href = 'http://localhost:3000/'
        }
    }
    return allReducers(state, action);
};

export default rootReducer