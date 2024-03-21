import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../../apiConfig";
import axios from "axios";

export const fetchDataAccuracy = createAsyncThunk('data/fetchDataAccuracy', async() => {
    try {
        const response = await axios(`${BASE_URL["backend-flask"]}/accuracy`);
        return response.data;
    } catch (error) {
        console.error('API Error:', error.message);
        throw error;
    }
});

const accuracySlice = createSlice({
    name: 'accuracy',
    initialState: {
        data: {
            accuracy_ensemble: []
        },
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAccuracy.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDataAccuracy.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data.accuracy_ensemble = action.payload.accuracy_ensemble;
            })
            .addCase(fetchDataAccuracy.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default accuracySlice.reducer;