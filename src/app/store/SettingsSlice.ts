import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Theme, { themes } from "@/app/theme";

const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        theme: themes.light
    },
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload;
        },
        toggleTheme: (state) => {
            state.theme = state.theme.name === themes.dark.name ? themes.light : themes.dark;
        }
    }
});

export default settingsSlice.reducer;
export const { setTheme, toggleTheme } = settingsSlice.actions;
export type SettingsState = ReturnType<typeof settingsSlice.reducer>;
