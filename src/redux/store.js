import { configureStore } from "@reduxjs/toolkit";
import editorSlice from "../features/slice.js";

export const store = configureStore({
  reducer: {
    CodeEditor: editorSlice,
  },
});
