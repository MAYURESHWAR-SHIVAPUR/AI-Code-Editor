import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: JSON.parse(window.localStorage.getItem("tasks")) || [],
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        ReduxInput: (state, action) => {

        },

    },
});
export const {
    ReduxInput
} = counterSlice.actions;

export default counterSlice.reducer;
