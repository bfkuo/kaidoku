import { createSlice } from '@reduxjs/toolkit';

export const analyzeSlice = createSlice({
    name: 'analyze',
    initialState: {
        fullText: ''
    },
    reducers: {
        setFullText: (state, action) => {
            state.fullText = action.payload;
        }
    }
});

export const { setFullText } = analyzeSlice.actions;

export default analyzeSlice.reducer;