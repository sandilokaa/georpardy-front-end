import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import cityDetailSlice from "./slices/cityDetailSlice";
import accuracySlice from "./slices/accuracySlice";

const store = configureStore({
    reducer: {
        search: searchSlice,
        city: cityDetailSlice,
        accuracy: accuracySlice
    },
});

export default store;