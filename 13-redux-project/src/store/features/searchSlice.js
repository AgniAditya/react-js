import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: '',
        result: [],
        loading: false,
        activeTab: 'collection',
        error: null
    },
    reducers: {
        setQuery : (state,action) => {
            state.query = action.payload;
        },
        setActiveTab: (state,action) => {
            state.activeTab = action.payload;
        },
        setLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        setResult: (state,action) => {
            state.result = action.payload;
            state.loading = false;
        },
        setError: (state,action) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearResults: (state) => {
            state.result = []
        }
    }
})

export const {
    setQuery,
    setActiveTab,
    setLoading,
    setResult,
    setError,
    clearResults
} = searchSlice.actions
export default searchSlice.reducer