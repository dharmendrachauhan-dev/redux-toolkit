import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Feature/Slices.js'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
    },
})