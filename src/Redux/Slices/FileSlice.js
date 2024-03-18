import { createSlice } from "@reduxjs/toolkit";
const initialState={
    files: "",
};
const FileSlice=createSlice({
    name:"files",
    initialState,
    reducers:
    {
        addfile:(state,action)=>{
           
            state.files=action.payload
            console.log("helùskfjlskf",state.files);
        }
    }
})
export const { addfile } =FileSlice.actions;
export default FileSlice.reducer;