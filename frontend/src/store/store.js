import {configureStore} from '@reduxjs/toolkit'
import registerReducer from './userSlice'
import loginReducer from './loginslice'
import basketReducer from './basketSlice'
import checkoutReducer from './checkoutslice'


export const store = configureStore ({
    reducer:{ 
        user:registerReducer,
        user1:loginReducer,
        basket: basketReducer,
        checkout: checkoutReducer

    }
})

