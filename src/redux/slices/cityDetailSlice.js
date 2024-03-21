import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../apiConfig";

export const fetchDataById = createAsyncThunk('data/fetchDataById', async(cityId) => {
    try {
        const response = await axios(`${BASE_URL["backend-mysql"]}/city/:${cityId}`);
        return response.data;
    } catch (error) {
        console.error('API Error:', error.message);
        throw error;
    }
});

const cityDetailSlice = createSlice({
    name: 'city',
    initialState: {
        data: {
            getedCityByCityId: []
        },
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDataById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data.getedCityByCityId = action.payload.data.getedCityByCityId;
            })
            .addCase(fetchDataById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default cityDetailSlice.reducer;