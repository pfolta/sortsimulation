import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Theme, themes } from "@/app/theme";

interface SettingsState {
    theme: Theme;
}

const initialState: SettingsState = {
    theme: "light"
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload;
        },
        toggleTheme: (state) => {
            state.theme = themes[state.theme] === themes.dark ? "light" : "dark";
        }
    }
});

export default settingsSlice.reducer;
export const { setTheme, toggleTheme } = settingsSlice.actions;
export { initialState };
export type { SettingsState };
