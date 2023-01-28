import { configureStore } from '@reduxjs/toolkit'
import detailsREducer from './detailsREducer'
// import userReducer from './userReducer'
//can create more reducer but we can create only one store and all reducers will impiment in store.
export const store = configureStore({
    reducer: {
        // user: userReducer,
        details:detailsREducer,
    }

})