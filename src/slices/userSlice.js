import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
        joined: '',
        image: '',
        words: {
            known: [],
            seen: []
        },
        loggedIn: false
    },
    reducers: {
        login: (state, action) => {
            let user = action.payload;
            state.username = user.username;
            state.email = user.email;
            state.joined = user.joined;
            state.image = user.image;
            state.words = user.words;
            state.loggedIn = true;
        },
        logout: (state) => {
            state.username = '';
            state.email = '';
            state.joined = '';
            state.image = '';
            state.words = { known: [], seen: [] };
            state.loggedIn = false;
        },
        addKnownWords: (state, action) => {
            state.words.known.concat(action.payload);
        },
        addSeenWords: (state, action) => {
            state.words.seen.concat(action.payload);
        },
        removeKnownWords: (state, action) => {
            let wordsOnly = action.payload.map(e => e.word);
            state.words.known = state.words.known.filter(o => !wordsOnly.includes(o));
        },
        removeSeenWords: (state, action) => {
            let wordsOnly = action.payload.map(e => e.word);
            state.words.seen = state.words.seen.filter(o => !wordsOnly.includes(o.word));
        },
        setKnownWords: (state, action) => {
            state.words.known = action.payload;
        },
        setSeenWords: (state, action) => {
            state.words.seen = action.payload;
        }
    }
});

export const { login, logout, addKnownWords, addSeenWords, removeKnownWords, removeSeenWords, setKnownWords, setSeenWords } = userSlice.actions;

export default userSlice.reducer;