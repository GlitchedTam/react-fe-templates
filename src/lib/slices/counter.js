import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (draftState) => draftState + 1,
        decrement: (draftState) => draftState - 1
    }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;