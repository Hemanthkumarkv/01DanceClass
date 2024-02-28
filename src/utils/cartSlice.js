
import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    intialState:{
        items:["burgar", "pizza"]
    },

    reducers:{
        addItem:(state, action)=>{

            //mutating the state here 
            state.items.push(action.payload)
        },
        removeItem:(state, action)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length=0 //[]
        }
    }


})

export const {addItem, removeItem, clearCart} =cartSlice.action

export default cartSlice.reducers