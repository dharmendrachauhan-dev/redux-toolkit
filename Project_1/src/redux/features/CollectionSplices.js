import { createSlice } from "@reduxjs/toolkit";


const getInitialItems = () => {
    try {
        const data = JSON.parse(localStorage.getItem('collection'))
        return Array.isArray(data) ? data : []
    } catch (error) {
        return []
    }
}

const initialState = {
    items: getInitialItems()
}

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers:{
        addCollection:(state,action) => {
            const alreadyExits = state.items.find(
                item => item.id === action.payload.id
            )

            if(!alreadyExits){
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))
            }else{
                console.log("Error")
            }
        },
        removeCollection:(state,action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection:(state,action)=>{
            state.items = []
            localStorage.removeItem('collection')
        }
    }
})


export const {
    addCollection,
    removeCollection,
    clearCollection
} = collectionSlice.actions


export default collectionSlice.reducer;