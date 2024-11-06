import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: '000'
}

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers:{
        setAddress: (state, action) => {state.value = action.payload}
    },
});

export const {setAddress} = walletSlice.actions;

export default walletSlice.reducer;