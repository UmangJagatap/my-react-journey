
// CreateSlice
// 1) A function that "accepts an initial state", an "object of reducer functions",
//     and a "slice name",
//     and automatically generates
//     i) action creators and
//     ii)action types that correspond to the reducers and state.

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        //immer
        addToCart(state, action) {
            console.log(action);
            state.value.push(action.payload);
        }
    }

})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;