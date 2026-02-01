import { createSlice } from "@reduxjs/toolkit" ;
import { toast, Zoom } from "react-toastify" ;


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
            console.log(state.items);
            
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection:(state,action)=>{
            state.items = []
            localStorage.removeItem('collection')
        },
        addedToast:()=>{
            toast.success('Saved To Collection ✅', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,            
            progress: undefined,
            theme: "dark",
            transition: Zoom,
        });
        },
        removeToast:()=>{
            toast.error('Removed From Collection', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,      
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
         });
        }
    }
})


export const {
    addCollection,
    removeCollection,
    clearCollection,
    addedToast,
    removeToast,
} = collectionSlice.actions


export default collectionSlice.reducer;