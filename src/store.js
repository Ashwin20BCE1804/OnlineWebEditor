import {configureStore} from '@reduxjs/toolkit';
import CodeSlice from './Slices/CodeSlice';
import thunk from 'redux-thunk';
export default configureStore({
    reducer:{
        "code":CodeSlice
    },
    middleware:[thunk]
})