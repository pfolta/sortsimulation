import { configureStore } from "@reduxjs/toolkit";

import SettingsReducer from "@/app/store/SettingsSlice";

const store = configureStore({
    reducer: {
        settings: SettingsReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
