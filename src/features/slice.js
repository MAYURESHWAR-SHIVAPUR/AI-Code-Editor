import { createSlice } from "@reduxjs/toolkit";
import { lang as template } from "../Data/lang";


const editorSlice = createSlice({
    name: "CodeEditor",
    initialState: {
        lang: "Python",
        code: template["Python"],
        output: "",
        input: "",
        isRunning: false,
    },
    reducers: {
        setLang: (state, action) => {
            state.lang = action.payload;
            state.code = template[action.payload];
        },

        setCode: (state, action) => {
            state.code = action.payload;
        },

        setInput: (state, action) => {
            state.input = action.payload;
        },

        setOutput: (state, action) => {
            state.output = action.payload;
        },

        clearAll: (state) => {
            state.input = "";
            state.output = "";
        },

        setRunning: (state, action) => {
            state.isRunning = action.payload
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(runCode.pending, (state) => {
    //             state.isRunning = true;
    //         })

    //         .addCase(runCode.fulfilled, (state, action) => {
    //             state.output = action.payload;
    //             state.isRunning = false;
    //         })

    //         .addCase(runCode.rejected, (state) => {
    //             state.isRunning = false;
    //         });
    // },
});

export const {
    setLang,
    setCode,
    setInput,
    setOutput,
    setRunning,
    clearAll,
} = editorSlice.actions;

export default editorSlice.reducer;