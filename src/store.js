import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import analyzeReducer from './slices/userSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        analyze: analyzeReducer
    }
});