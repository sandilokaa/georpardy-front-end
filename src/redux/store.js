import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import cityDetailSlice from "./slices/cityDetailSlice";

const store = configureStore({
    reducer: {
        search: searchSlice,
        city: cityDetailSlice
    },
});

export default store;