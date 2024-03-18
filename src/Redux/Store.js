import { configureStore } from "@reduxjs/toolkit";
import fielReducer from './Slices/FileSlice'
export default configureStore({
    reducer:{
files: fielReducer,
    }
})