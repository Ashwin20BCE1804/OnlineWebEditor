import {createSlice} from '@reduxjs/toolkit';
export const CodeSlice=createSlice({
    name:"code",
    initialState:{
        htmlCode:"",
        cssCode:"",
        jsCode:""
    },reducers:{
        updateHtmlCode:(state,action)=>{
            return{
                ...state,
                htmlCode:action.payload.data
            }
        },
        updateCssCode:(state,action)=>{
            return{
                ...state,
                cssCode:action.payload.data
            }
        },
        updateJsCode:(state,action)=>{
            return{
                ...state,
                jsCode:action.payload.data
            }
        }
    }
})
export default CodeSlice.reducer;
export const{updateCssCode,updateHtmlCode,updateJsCode}=CodeSlice.actions;