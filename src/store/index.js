
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import blogReducer from './slices/blog'

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
    blog:blogReducer,
  },
});
