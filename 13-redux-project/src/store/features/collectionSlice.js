import { createSlice } from "@reduxjs/toolkit";
import { setResult } from "./searchSlice";
import { toast } from 'react-toastify';

const collectionSlice = createSlice({
    name: 'collection',
    initialState: {
        items: JSON.parse(localStorage.getItem("collection")) || []
    },
    reducers: {
        addCollection: (state,action) => {
            const item = action.payload
            const oldItems = JSON.parse(localStorage.getItem("collection")) || [];
            const newItems = [...oldItems,item]
            localStorage.setItem("collection",JSON.stringify(newItems))
        },
        removeCollection: (state,action) => {
            const item = action.payload
            const oldItems = JSON.parse(localStorage.getItem("collection"))
            const newItems = oldItems.filter((obj) => obj.id !== item.id);
            localStorage.setItem("collection",JSON.stringify(newItems))
            state.items = newItems;
        },
        addToast: () => {
            toast("added to collection")
        },
        removeToast: () => {
            toast("removed from collection")
        }
    }
})

export const {addCollection,removeCollection,addToast,removeToast} = collectionSlice.actions
export default collectionSlice.reducer