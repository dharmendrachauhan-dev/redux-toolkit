import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 1000
    },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1
        },
        decrement: (state) => {
            state.value = state.value - 1
        },
        incrementByAmount: (state,actions) => {
            state.value = state.value + actions.payload
        }
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer