import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../apiConfig";

export const fetchData = createAsyncThunk('data/fetchData', async(query) => {
    try {
        const response = await axios(`${BASE_URL}/city?cityName=${query}`);
        return response.data;
    } catch (error) {
        console.error('API Error:', error.message);
        throw error;
    }
});

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        data: {
            getedAllCity: []
        },
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data.getedAllCity = action.payload.data.getedAllCity;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default searchSlice.reducer;